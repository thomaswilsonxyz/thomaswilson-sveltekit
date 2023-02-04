import type { BlogPost } from './BlogPost.js';

export class BlogPostSet {
    constructor(readonly blogPosts: BlogPost[]) {}

    getBlogPostWithTitle(title: string): BlogPost | null {
        return this.blogPosts.find((post) => post.title === title) ?? null;
    }
}
