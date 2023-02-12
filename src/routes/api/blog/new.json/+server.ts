import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ getClientAddress }) => {
    const address = await getClientAddress();
    console.log({ address });
    return json({ address });
};
