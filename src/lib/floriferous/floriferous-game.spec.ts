import { FloriferousGame } from './floriferous-game';
import { describe, it, expect } from 'vitest';
import { FloriferousPlayer } from './floriferous-player';

describe('FloriferousGame', () => {
	const alice = new FloriferousPlayer({
		name: 'Alice',
		score: 2,
		rowAtEndOfGame: 0
	});

	const bob = new FloriferousPlayer({
		name: 'Bob',
		score: 1,
		rowAtEndOfGame: 1
	});

	it('Determines a winner', () => {
		const game = new FloriferousGame();

		// WHEN
		game.addPlayer(alice);
		game.addPlayer(bob);

		// THEN
		expect(game.winner).toBe('Alice');
	});

	it('Breaks a tie using the player closest to the top of the board', () => {
		// GIVEN
		const bobWithTwoPoints = new FloriferousPlayer({
			name: 'Bob',
			score: 2,
			rowAtEndOfGame: 1
		});

		const game = new FloriferousGame();

		// WHEN
		game.addPlayer(alice);
		game.addPlayer(bobWithTwoPoints);

		// THEN
		expect(game.winner).toBe('Alice');
	});
});
