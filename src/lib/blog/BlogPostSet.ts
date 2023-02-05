import type { BlogPost } from './BlogPost.js';

export class BlogPostSet {
    private _blogPosts: BlogPost[] = [];

    constructor(blogPosts: BlogPost[]) {
        this._blogPosts = blogPosts;
    }

    get blogPosts(): BlogPost[] {
        return this._blogPosts;
    }

    getBlogPostWithTitle(title: string): BlogPost | null {
        return this._blogPosts.find((post) => post.title === title) ?? null;
    }

    async buildAllBlogPosts(): Promise<void> {
        await Promise.all(this.blogPosts.map((post) => post.build()));
    }
}
