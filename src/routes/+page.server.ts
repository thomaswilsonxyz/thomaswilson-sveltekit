import { BlogController } from '../lib/blog/BlogController.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    try {
        const controller = await BlogController.singleton();
        const latestBlogPosts = await controller.getAllBlogPosts(3);
        return { latestBlogPosts }
    } catch (error) {
        console.error({
            message: `Caught error in GET /api/blog.json`,
            error: JSON.stringify(error),
        });
        return { latestBlogPosts: [] }
    }
};
