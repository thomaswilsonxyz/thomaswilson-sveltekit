import { MONGO_URL, MONGO_DB_NAME, API_PASSWORD } from '$env/static/private';
import type { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { MongodbFloriferousGameRepository } from '$lib/floriferous/mongodb-floriferous-game-repository';
import { FloriferousApiController } from '$lib/floriferous/floriferous-api-controller';
import { SimplePasswordAuthenticator } from '$lib/simple-password-authenticator';
import {
	FloriferousGameApiPort,
	type FloriferousGameJson
} from '$lib/floriferous/floriferous-game-api-port';

export const GET: RequestHandler = async () => {
	const controller = new FloriferousApiController(
		new MongodbFloriferousGameRepository(MONGO_URL, MONGO_DB_NAME),
		new SimplePasswordAuthenticator(API_PASSWORD)
	);

	const response = await controller.getRecentGames(10);

	return new Response(JSON.stringify(response), { status: 200 });
};

export const POST = async ({ request }) => {
	const controller = new FloriferousApiController(
		new MongodbFloriferousGameRepository(MONGO_URL, MONGO_DB_NAME),
		new SimplePasswordAuthenticator(API_PASSWORD)
	);

	const isAuthenticated = controller.isRequestAuthenticated(request);

	if (!isAuthenticated) {
		return {
			status: 401,
			body: 'Unauthorized'
		};
	}

	try {
		const requestBody = await request.json();
		const response = await controller.createNewGame(requestBody);

		return new Response(JSON.stringify(response), {
			status: 200
		});
	} catch (e) {
		return new Response(JSON.stringify(e), {
			status: 500
		});
	}
};
