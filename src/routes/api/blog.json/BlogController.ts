import type { BlogPostSet } from '../../../lib/blog/BlogPostSet.js';
import { MarkdownRepository } from '../../../lib/blog/markdown-repository.js';

const blogPostMetaGlobImport = import.meta.glob('../../../content/blog/*.md', { as: 'raw' });

interface BlogPostListItem {
    title: string;
    author: string;
    date: string;
    book_review: boolean;
    preview: string;
    content: string;
    slug: string;
}

export class BlogController {
    static async singleton(): Promise<BlogController> {
        const markdownRepository = await MarkdownRepository.fromViteGlobImport(blogPostMetaGlobImport);
        return new BlogController(markdownRepository);
    }

    constructor(private readonly markdownRepository: MarkdownRepository) {}

    async getAllBlogPosts(): Promise<BlogPostListItem[]> {
        const blogPosts = await this.markdownRepository.blogPosts;
        await blogPosts.buildAllBlogPosts();

        const blogPostListItems: BlogPostListItem[] = blogPosts.blogPosts.map((blogPost) => {
            return {
                title: blogPost.title,
                author: blogPost.author,
                book_review: false,
                content: blogPost.html,
                date: blogPost.date.toISOString(),
                preview: blogPost.excerpt,
                slug: blogPost.slug,
            };
        });

        return blogPostListItems.sort((a, b) => (a.date > b.date ? -1 : 1));
    }
}
