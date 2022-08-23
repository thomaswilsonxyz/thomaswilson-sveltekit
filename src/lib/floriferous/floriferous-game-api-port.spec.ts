import { FloriferousGame } from './floriferous-game';
import { FloriferousPlayer } from './floriferous-player';
import { FloriferousGameApiPort } from './floriferous-game-api-port';

import { it, expect } from 'vitest';

it('should stringify a FloriferousGame into JSON', () => {
	// GIVEN
	const game = new FloriferousGame({
		id: 'the-id',
		playedTs: new Date('2020-01-01T00:00Z'),
		players: [
			new FloriferousPlayer({ name: 'first player', rowAtEndOfGame: 1, score: 2 }),
			new FloriferousPlayer({ name: 'second player', rowAtEndOfGame: 3, score: 4 })
		]
	});

	// WHEN
	const gameAsJson = FloriferousGameApiPort.gameToJson(game);

	// THEN
	expect(gameAsJson).toStrictEqual({
		id: 'the-id',
		playedTs: '2020-01-01T00:00:00.000Z',
		players: [
			{ name: 'first player', rowAtEndOfGame: 1, score: 2 },
			{ name: 'second player', rowAtEndOfGame: 3, score: 4 }
		]
	});
});

it('should parse JSON into a floriferous game', () => {
	// GIVEN
	const gameAsJson = {
		id: 'the-id',
		playedTs: '2020-01-01T00:00:00.000Z',
		players: [
			{ name: 'first player', rowAtEndOfGame: 1, score: 2 },
			{ name: 'second player', rowAtEndOfGame: 3, score: 4 }
		]
	};

	// WHEN
	const game = FloriferousGameApiPort.jsonToGame(gameAsJson);

	// THEN
	expect(game).toStrictEqual(
		new FloriferousGame({
			id: 'the-id',
			playedTs: new Date('2020-01-01T00:00Z'),
			players: [
				{ name: 'first player', rowAtEndOfGame: 1, score: 2 },
				{ name: 'second player', rowAtEndOfGame: 3, score: 4 }
			]
		})
	);
});
