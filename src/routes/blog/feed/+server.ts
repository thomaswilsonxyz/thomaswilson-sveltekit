import { MarkdownRepository } from '$lib/blog/markdown-repository.js';
import { RssFeed } from '$lib/blog/RssFeed.js';
import type { RequestHandler } from './$types.js';

export const GET: RequestHandler = async () => {
    const repo = await MarkdownRepository.singleton();
    const rssFeed = new RssFeed(repo.blogPosts, repo.bookReviews);

    return new Response(rssFeed.xml.toString(), {
        headers: {
            'Content-Type': 'application/rss+xml',
            charset: 'utf-8',
        },
    });
};
