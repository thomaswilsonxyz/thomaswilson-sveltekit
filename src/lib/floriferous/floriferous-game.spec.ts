import { describe, it, expect } from 'vitest';

import { FloriferousGame } from './floriferous-game.js';
import { FloriferousPlayer } from './floriferous-player.js';

describe('FloriferousGame', () => {
    const alice = new FloriferousPlayer({
        name: 'Alice',
        score: 2,
        rowAtEndOfGame: 0,
    });

    const bob = new FloriferousPlayer({
        name: 'Bob',
        score: 1,
        rowAtEndOfGame: 1,
    });

    const bobWithTwoPoints = new FloriferousPlayer({
        name: 'Bob',
        score: 2,
        rowAtEndOfGame: 1,
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

        const game = new FloriferousGame();

        // WHEN
        game.addPlayer(alice);
        game.addPlayer(bobWithTwoPoints);

        // THEN
        expect(game.winner).toBe('Alice');
    });

    it('Can give a pretty summary', () => {
        // GIVEN
        const game = new FloriferousGame({
            playedTs: new Date('2022-08-28T13:12Z'),
            players: [alice, bob],
        });

        // WHEN
        const prettySummary = game.prettySummary;

        // THEN
        expect(prettySummary).toBe('Sunday, 28 August 2022 at 14:12: Alice won with 2 points.  Bob: 1 point.');
    });
});
