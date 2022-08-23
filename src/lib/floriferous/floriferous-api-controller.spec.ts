import { describe, it, expect } from 'vitest';
import type { ApiGamesFloriferousPostRequest } from './floriferous-api-controller';
import { FloriferousApiController } from './floriferous-api-controller';
import { StubFloriferousGameRepository } from './stub-floriferous-game-repository';
import { FloriferousGame } from './floriferous-game';
import { SimplePasswordAuthenticator } from '../simple-password-authenticator';
import { Headers } from 'node-fetch';

const isDate = (value = 'invalid'): boolean => {
	return value !== 'invalid' && !isNaN(Date.parse(value));
};

describe('FloriferousApiController', () => {
	const stubGameRepository = new StubFloriferousGameRepository();
	const authenticator = new SimplePasswordAuthenticator('expected-password');
	const controller = new FloriferousApiController(stubGameRepository, authenticator);

	it('should validate a request with a proper password', async () => {
		// GIVEN
		const headers: Headers = new Headers();
		headers.set('x-api-password', 'expected-password');

		// WHEN
		const result = controller.isRequestAuthenticated({ headers: headers });

		// THEN
		expect(result).toBe(true);
	});

	it('should not validate a request with an invalid password', async () => {
		// GIVEN
		const headers = new Headers();
		headers.set('x-api-password', 'invalid-password');

		// WHEN
		const result = controller.isRequestAuthenticated({ headers });

		// THEN
		expect(result).toBe(false);
	});

	it('should not validate a request without a password', async () => {
		// GIVEN
		const request = {
			headers: new Headers()
		};

		// WHEN
		const result = controller.isRequestAuthenticated(request);

		// THEN
		expect(result).toBe(false);
	});

	it('should get a list of recent games', async () => {
		// GIVEN
		const gameOne = new FloriferousGame({
			id: 'game-one',
			players: [{ name: 'Alice', score: 10, rowAtEndOfGame: 1 }],
			playedTs: new Date('2022-07-01T07:00Z')
		});
		const gameTwo = new FloriferousGame({
			id: 'game-two',
			players: [],
			playedTs: new Date('2022-08-20T13:25Z')
		});

		stubGameRepository.setAllGames([gameOne, gameTwo]);

		// WHEN
		const result = await controller.getRecentGames(10);

		// THEN
		expect(result).toStrictEqual([
			{
				id: 'game-one',
				playedTs: '2022-07-01T07:00:00.000Z',
				players: [{ name: 'Alice', score: 10, rowAtEndOfGame: 1 }]
			},
			{
				id: 'game-two',
				playedTs: '2022-08-20T13:25:00.000Z',
				players: []
			}
		]);
	});

	it('should save a new game', async () => {
		// GIVEN
		const requestBody: ApiGamesFloriferousPostRequest = {
			players: [
				{
					name: 'Alice',
					rowAtEndOfGame: 1,
					score: 10
				}
			]
		};

		// WHEN
		const response = await controller.createNewGame(requestBody);

		// THEN
		expect(isDate(response.playedTs)).toBe(true);
		expect(response).toStrictEqual({
			id: expect.any(String),
			playedTs: expect.any(String),
			players: [
				{
					name: 'Alice',
					score: 10,
					rowAtEndOfGame: 1
				}
			]
		});
	});
});
