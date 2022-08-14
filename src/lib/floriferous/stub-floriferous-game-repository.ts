import type { FloriferousGameRepository } from './FloriferousGameRepository';
import type { FloriferousGame } from './floriferous-game';

export class StubFloriferousGameRepository implements FloriferousGameRepository{
	private games: FloriferousGame[] = [];

	setAllGames(games: FloriferousGame[]): void {
		this.games = games;
	}


	getById(id: string): Promise<FloriferousGame | null> {
		throw new Error('Method not implemented.');
	}

	getRecent(count: number): Promise<FloriferousGame[]> {
		return Promise.resolve(this.games.map((game, index) => {
			if (index < count -1) {
				return game;
			}

			return undefined
		}).filter((game) => game !== undefined));

	}

	save(game: FloriferousGame): Promise<FloriferousGame> {
		return Promise.resolve(undefined);
	}
}