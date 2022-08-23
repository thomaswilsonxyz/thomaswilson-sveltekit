import { FloriferousGame } from './floriferous-game';
import { MongoClient } from 'mongodb';
import { FloriferousPlayer } from './floriferous-player';
import type { FloriferousGameRepository } from './FloriferousGameRepository';

interface FloriferousGameMongoDocument {
	id: string;
	playedTs: Date;
	players: {
		name: string;
		score: number;
		rowAtEndOfGame: number;
	}[];
}

export class MongodbFloriferousGameRepository implements FloriferousGameRepository {
	private client: MongoClient;
	private connection: MongoClient | null = null;
	private collectionName = 'floriferous-games';

	constructor(private readonly mongodbUrl: string, private readonly dbName: string) {
		this.client = new MongoClient(mongodbUrl);
	}

	private async connect(): Promise<void> {
		this.connection = await this.client.connect();
	}

	private async disconnect(): Promise<void> {
		if (this.connection === null) {
			return;
		}

		await this.connection.close();
	}

	async save(game: FloriferousGame): Promise<FloriferousGame> {
		await this.connect();

		const data = MongodbFloriferousGameRepository.gameToMongoDocument(game);

		const document = await this.connection
			.db(this.dbName)
			.collection<FloriferousGameMongoDocument>(this.collectionName)
			.insertOne(data);

		await this.disconnect();

		return game;
	}

	async getById(id: string): Promise<FloriferousGame | null> {
		await this.connect();

		const document = await this.connection
			.db(this.dbName)
			.collection<FloriferousGameMongoDocument>(this.collectionName)
			.findOne({ id });

		await this.disconnect();

		if (document === null) {
			return null;
		}

		return MongodbFloriferousGameRepository.documentToGame(document);
	}

	async getRecent(count = 10): Promise<FloriferousGame[]> {
		await this.connect();

		const documents = await this.connection
			.db(this.dbName)
			.collection<FloriferousGameMongoDocument>(this.collectionName)
			.find({})
			.sort({ playedTs: 1 })
			.limit(count)
			.toArray();

		await this.disconnect();

		if (!documents) {
			return [];
		}

		const formatted = documents.map((document) =>
			MongodbFloriferousGameRepository.documentToGame(document)
		);

		return formatted;
	}

	private static documentToGame(document: FloriferousGameMongoDocument): FloriferousGame {
		const players: FloriferousPlayer[] = document.players.map(
			({ name, rowAtEndOfGame, score }) =>
				new FloriferousPlayer({
					name,
					rowAtEndOfGame: rowAtEndOfGame,
					score
				})
		);

		const game = new FloriferousGame({
			id: document.id,
			playedTs: document.playedTs,
			players
		});

		return game;
	}

	private static gameToMongoDocument(game: FloriferousGame): FloriferousGameMongoDocument {
		return {
			id: game.id,
			playedTs: game.playedTs,
			players: game.players.map((player) => ({
				rowAtEndOfGame: player.rowAtEndOfGame,
				name: player.name,
				score: player.score
			}))
		};
	}
}
