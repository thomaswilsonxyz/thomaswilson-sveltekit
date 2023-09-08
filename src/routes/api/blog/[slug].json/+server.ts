import { json, type LoadEvent, error } from '@sveltejs/kit';
import { BlogController } from '../../../../lib/blog/BlogController.js';

export const GET = async ({ params }: LoadEvent) => {
    const controller = await BlogController.singleton();
    const { slug } = params;

    const post = await controller.getAnyKindOfContentBySlug(slug);

    if (!post) {
        throw error(404, `Could not find blog post with slug '${slug}'`);
    }

    return json({ post });
};
