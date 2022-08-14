import type { FloriferousPlayer } from './floriferous-player';
import { nanoid } from 'nanoid';

export interface FloriferousGameParams {
	playedTs?: Date;
	id?: string;
	players?: FloriferousPlayer[];
}

export class FloriferousGame {
	readonly id: string;
	readonly playedTs: Date;
	private _players: FloriferousPlayer[] = [];

	constructor({ id = nanoid(), playedTs = new Date(), players = [] }: FloriferousGameParams = {}) {
		this.id = id;
		this.playedTs = playedTs;
		this._players = players;
	}

	addPlayer(player: FloriferousPlayer): void {
		this._players.push(player);
	}

	addPlayers(players: FloriferousPlayer[]): void {
		players.forEach((player) => {
			this.addPlayer(player);
		});
	}

	get players(): FloriferousPlayer[] {
		return this._players;
	}

	get winner(): string | undefined {
		if (this._players.length === 0) {
			return undefined;
		}
		const playersSortedByScore = this._players.sort((a, b) => {
			return b.score - a.score;
		});

		if (playersSortedByScore[0].score === playersSortedByScore[1].score) {
			const playersSortedByRowAtEndOfGame = this._players.sort((a, b) => {
				return a.rowAtEndOfGame - b.rowAtEndOfGame;
			});

			return playersSortedByRowAtEndOfGame[0].name;
		}

		return playersSortedByScore[0].name;
	}
}
