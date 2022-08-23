export interface FloriferousPlayerParams {
	name: string;
	score: number;
	rowAtEndOfGame: number;
}

export class FloriferousPlayer {
	readonly name: string;
	readonly score: number;
	readonly rowAtEndOfGame: number;

	constructor(params: FloriferousPlayerParams) {
		this.name = params.name;
		this.score = params.score;
		this.rowAtEndOfGame = params.rowAtEndOfGame;
	}
}
