import type { BlogPostSet } from '../../../lib/blog/BlogPostSet.js';
import { MarkdownRepository } from '../../../lib/blog/markdown-repository.js';

const blogPosts = import.meta.glob('../../content/blog/*.md', { as: 'raw' });

export class BlogController {
    static async singleton(): Promise<BlogController> {
        const markdownRepository = await MarkdownRepository.fromViteGlobImport(blogPosts);
        return new BlogController(markdownRepository);
    }

    constructor(private readonly markdownRepository: MarkdownRepository) {}

    async getAllBlogPosts(): Promise<BlogPostSet> {
        const blogPosts = await this.markdownRepository.blogPosts;
        return blogPosts;
    }
}
