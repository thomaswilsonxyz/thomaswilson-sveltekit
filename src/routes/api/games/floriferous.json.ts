import { MONGO_URL, MONGO_DB_NAME, API_PASSWORD } from '$env/static/private';
import type { RequestHandler, RequestHandlerOutput } from '@sveltejs/kit';

import { MongodbFloriferousGameRepository } from '../../../lib/floriferous/mongodb-floriferous-game-repository';
import { FloriferousApiController } from '../../../lib/floriferous/floriferous-api-controller';
import { SimplePasswordAuthenticator } from '../../../lib/simple-password-authenticator';

export const GET: RequestHandler = async (): Promise<RequestHandlerOutput> => {
	const controller = new FloriferousApiController(
		new MongodbFloriferousGameRepository(MONGO_URL, MONGO_DB_NAME),
		new SimplePasswordAuthenticator(API_PASSWORD)
	);

	const response = await controller.getRecentGames(10);

	return {
		status: 200,
		body: JSON.stringify(response)
	};
};

export const POST: RequestHandler = async ({ request }) => {
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

		return {
			status: 200,
			body: JSON.parse(JSON.stringify(response))
		};
	} catch (e) {
		return {
			status: 500,
			body: JSON.stringify(e)
		};
	}
};
