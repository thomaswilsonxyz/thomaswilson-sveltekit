import { error, type Load, type LoadEvent } from '@sveltejs/kit';
import { BlogController } from '../../../lib/blog/BlogController.js';

export const load: Load = async ({ params, fetch }) => {
    const controller = await BlogController.singleton();
    const slug = params['slug'] as string;
    const post = await controller.getAnyKindOfContentBySlug(slug);

    if (!post) {
        return error(404, 'Post not found');
    }

    return { post, date: new Date(post.date) };
};
