import type { FloriferousGame } from './floriferous-game';

export interface FloriferousGameRepository {
	save(game: FloriferousGame): Promise<FloriferousGame>;
	getById(id: string): Promise<FloriferousGame | null>;
	getRecent(count: number): Promise<FloriferousGame[]>;

}