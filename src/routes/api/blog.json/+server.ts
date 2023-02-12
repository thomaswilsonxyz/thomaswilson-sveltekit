import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types.js';
import { BlogController } from '../../../lib/blog/BlogController';

export const GET = async () => {
    try {
        const controller = await BlogController.singleton();
        const blogPosts = await controller.getAllBlogPosts();
        return json({ posts: blogPosts });
    } catch (error) {
        console.error({ error: JSON.stringify(error) });
        return json(
            {
                error: 'Could not fetch posts. ' + error,
            },
            {
                status: 500,
            }
        );
    }
};

export const POST: RequestHandler = async ({ getClientAddress }) => {
    const address = await getClientAddress();
    console.log({ address });
    return json({ address });
};
