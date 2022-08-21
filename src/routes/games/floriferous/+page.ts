import {
	FloriferousGameApiPort,
	type FloriferousGameJson
} from '$lib/floriferous/floriferous-game-api-port';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }): Promise<{ previousGames: FloriferousGameJson[] }> => {
	const previousGames = await fetch('/api/games/floriferous.json').then((res) => res.json());
	return {
		previousGames: previousGames.map(FloriferousGameApiPort.jsonToGame)
	};
};
