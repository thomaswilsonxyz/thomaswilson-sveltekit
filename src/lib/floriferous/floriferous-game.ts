import type { FloriferousPlayer } from './floriferous-player.js';
import { intlFormat as formatDate } from 'date-fns';
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

	get prettySummary(): string {
		if (this._players.length === 0) {
			return '';
		}

		const formattedDate = formatDate(this.playedTs, {
			localeMatcher: 'best fit',
			weekday: 'long',
			day: 'numeric',
			month: 'long',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});

		const winnerStatement = `${this.winningPlayer.name} won with ${this.winningPlayer.score} points`;
		const otherPlayerStatements = this.nonWinningsPlayers.map((player) => {
			return `${player.name}: ${player.score} point${player.score === 1 ? '' : 's'}.`;
		});

		return [`${formattedDate}: ${winnerStatement}`, ...otherPlayerStatements].join('.  ');
	}

	get players(): FloriferousPlayer[] {
		return this._players;
	}

	private get winningPlayer(): FloriferousPlayer | undefined {
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

			return playersSortedByRowAtEndOfGame[0];
		}

		return playersSortedByScore[0];
	}

	private get nonWinningsPlayers(): FloriferousPlayer[] {
		return this._players.filter((player) => player.name !== this.winner);
	}

	get winner(): string | undefined {
		return this.winningPlayer?.name;
	}
}
