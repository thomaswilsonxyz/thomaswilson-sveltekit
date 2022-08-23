import { z } from 'zod';
import type { ZodError } from 'zod';
import type { FloriferousGameJson } from './floriferous-game-api-port';
import type { FloriferousGameRepository } from './FloriferousGameRepository';
import { FloriferousGameApiPort } from './floriferous-game-api-port';
import { FloriferousGame } from './floriferous-game';
import { FloriferousPlayer } from './floriferous-player';
import type { Authenticator } from '../Authenticator';

export interface ApiGamesFloriferousPostRequest {
	players: {
		name: string;
		score: number;
		rowAtEndOfGame: number;
	}[];
}

const apiGamesFloriferousPostRequestSchema = z.object({
	players: z
		.array(
			z.object({
				name: z.string().min(1, { message: 'Player names must be at least 1 character long' }),
				score: z
					.number({ invalid_type_error: 'Player Score must be a number.' })
					.int({ message: 'Player Score must be a whole number.' })
					.min(0, { message: 'Player score cannot be less than 0.' }),
				rowAtEndOfGame: z.number().int().min(0)
			})
		)
		.min(1)
});

export class FloriferousApiController {
	constructor(
		private readonly repository: FloriferousGameRepository,
		private readonly validator: Authenticator
	) {}

	isRequestAuthenticated(request: any): boolean {
		const password = request?.headers?.get('x-api-password') ?? '';

		if (password === undefined) {
			return false;
		}

		return this.validator.authenticate(password);
	}

	async getRecentGames(count = 10): Promise<FloriferousGameJson[]> {
		const games = await this.repository.getRecent(count);
		return games.map((game) => FloriferousGameApiPort.gameToJson(game));
	}

	async createNewGame(data: ApiGamesFloriferousPostRequest): Promise<FloriferousGameJson> {
		try {
			apiGamesFloriferousPostRequestSchema.parse(data);
		} catch (e: any) {
			if (e.issues !== undefined) {
				const zodError: ZodError = e;
				throw new Error(zodError.issues[0].message);
			}
			console.error({
				message: `Caught error validating body data in createNewGame`,
				error: e,
				data: JSON.stringify(data)
			});

			throw new Error(e?.message ?? e);
		}

		const validatedData = data;

		const players: FloriferousPlayer[] = validatedData.players.map(
			({ name, rowAtEndOfGame, score }) => {
				return new FloriferousPlayer({ name, rowAtEndOfGame, score });
			}
		);

		const game = new FloriferousGame({
			players,
			playedTs: new Date()
		});

		const savedGame = await this.repository.save(game);

		return FloriferousGameApiPort.gameToJson(game);
	}
}
