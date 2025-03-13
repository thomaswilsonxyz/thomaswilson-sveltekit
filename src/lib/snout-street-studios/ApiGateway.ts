import type { SnoutStreetStudiosPost } from './SnoutStreetStudiosPost.js';
import type { BlogController } from '$lib/blog/BlogController.js';

export class SnoutStreetStudiosApiGateway {
    constructor(private readonly controller: BlogController) {}

    async getPostBySlug(slug: string): Promise<SnoutStreetStudiosPost | null> {
        const post = await this.controller.getAnyKindOfContentBySlug(slug);

        if (!post) {
            return null;
        }

        return {
            date: new Date(post.date),
            slug: post.slug,
            title: post.title,
            html: post.content,
            toJson: () => JSON.stringify(post),
            excerpt: post.
        };
    }
}
