import { FloriferousGame } from './floriferous-game';

export interface FloriferousGameJson {
	id: string;
	playedTs: string;
	players: {
		name: string;
		score: number;
		rowAtEndOfGame: number;
	}[];
}

export class FloriferousGameApiPort {
	static jsonToGame(json: FloriferousGameJson): FloriferousGame {
		const players = json.players.map((player) => ({
			name: player.name,
			score: player.score,
			rowAtEndOfGame: player.rowAtEndOfGame
		}));

		return new FloriferousGame({
			id: json.id,
			playedTs: new Date(json.playedTs),
			players
		});
	}

	static gameToJson(game: FloriferousGame): FloriferousGameJson {
		return {
			id: game.id,
			playedTs: game.playedTs.toISOString(),
			players: game.players.map((player) => ({
				name: player.name,
				score: player.score,
				rowAtEndOfGame: player.rowAtEndOfGame
			}))
		};
	}
}
