import { describe, expect, it } from 'vitest';
import { FloriferousPlayer } from './floriferous-player';

describe('FloriferousPlayer', () => {
	it('should construct with properties', () => {
		// GIVEN
		const player = new FloriferousPlayer({
			name: 'Alice',
			score: 2,
			rowAtEndOfGame: 0
		});

		// THEN
		expect(player.name).toBe('Alice');
		expect(player.score).toBe(2);
		expect(player.rowAtEndOfGame).toBe(0);
	});
});
