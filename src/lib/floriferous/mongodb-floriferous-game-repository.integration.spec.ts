import { describe, expect, it, beforeEach, afterAll } from 'vitest';

import { FloriferousGame, type FloriferousGameParams } from './floriferous-game';
import { FloriferousPlayer, type FloriferousPlayerParams } from './floriferous-player';
import { customAlphabet } from 'nanoid';
import { MongodbFloriferousGameRepository } from './mongodb-floriferous-game-repository';
import { MongoClient } from 'mongodb';

describe('MongoDB FloriferousGame Repository', () => {
	const mongoDbUrl = import.meta.env.VITE_MONGO_URL;
	const mongoDbName = import.meta.env.VITE_MONGO_DB_NAME;
	const janitor = new MongodbJanitor(mongoDbUrl, mongoDbName);

	let playerOne: FloriferousPlayer;
	let playerTwo: FloriferousPlayer;
	let game: FloriferousGame;

	beforeEach(async () => {
		playerOne = floriferousPlayerFactory({ name: 'Player 1' });
		playerTwo = floriferousPlayerFactory({ name: 'Player 2' });
		game = floriferousGameFactory();
		game.addPlayer(playerOne);
		game.addPlayer(playerTwo);
	});

	afterAll(async () => {
		await janitor.deleteAllDocumentsInConnection('floriferous-games');
	});

	const repository = new MongodbFloriferousGameRepository(mongoDbUrl, mongoDbName);

	it('should save', async () => {
		// WHEN
		const savedGame = await repository.save(game);

		// THEN
		expect(savedGame).toBeDefined();
	});

	it('should get by ID when it exists', async () => {
		// GIVEN
		const savedGame = await repository.save(game);

		// WHEN
		const foundGame = await repository.getById(game.id);

		// THEN
		expect(foundGame).toStrictEqual(game);
	});

	it('should return null when fetching by ID for a game which did not happen', async () => {
		// WHEN
		const foundGame = await repository.getById('any-random-id');

		// THEN
		expect(foundGame).toBeNull();
	});

	it('should get the last 10 games, sorted by playedTs', async () => {
		// GIVEN
		await janitor.deleteAllDocumentsInConnection('floriferous-games');
		const gameOne = floriferousGameFactory({
			playedTs: new Date('2022-08-07T19:00Z')
		});

		const gameTwo = floriferousGameFactory({
			playedTs: new Date('2022-08-07T06:00Z')
		});

		await repository.save(gameOne);
		await repository.save(gameTwo);

		// WHEN
		const recentGames = await repository.getRecent(10);

		// THEN
		expect(recentGames).toStrictEqual([gameTwo, gameOne]);
	});

	it('should return an empty array when no games have taken place', async () => {
		// GIVEN
		await janitor.deleteAllDocumentsInConnection('floriferous-games');

		// WHEN
		const recentGames = await repository.getRecent(5);

		// THEN
		expect(recentGames).toStrictEqual([]);
	});
});

class MongodbJanitor {
	private client: MongoClient;

	constructor(private readonly url: string, private readonly dbName: string) {
		this.client = new MongoClient(url);
	}

	async deleteAllDocumentsInConnection(collectionName: string): Promise<void> {
		console.info(`Deleting all documents in ${collectionName}`);

		const connection = await this.client.connect();

		const deltedDocuments = await connection
			.db(this.dbName)
			.collection(collectionName)
			.deleteMany({});

		await connection.close();

		console.info(`Deleted ${deltedDocuments.deletedCount} documents`);
	}
}

function floriferousPlayerFactory(
	overrides: Partial<FloriferousPlayerParams> = {}
): FloriferousPlayer {
	return new FloriferousPlayer({
		name: `name-${customAlphabet('abcdefghijklmnopqrstuvwxyz', 8)}`,
		score: Math.floor(Math.random() * 100),
		rowAtEndOfGame: Math.floor(Math.random() * 10),
		...overrides
	});
}

function floriferousGameFactory(overrides: Partial<FloriferousGameParams> = {}): FloriferousGame {
	return new FloriferousGame(overrides);
}
