import { resolve } from 'path';
import { open } from 'fs';

import { BlogPost } from './BlogPost.js';
import { MarkdownFile } from './MarkdownFile.js';
import { BlogPostSet } from './BlogPostSet.js';
import { BookReviewSet } from './BookReviewSet.js';
import { BookReview } from './BookReview.js';

// We have to duplicate the `../..` here because import.meta must have a static string,
// and it (rightfully) cannot have dynamic locations
const blogPostMarkdownDirectory = `../../content/blog`;
const blogPostMetaGlobImport = import.meta.glob(`../../content/blog/*.md`, { as: 'raw' });
const bookReviewsMetaGlobImport = import.meta.glob('../../content/book-reviews/*.md', { as: 'raw' });

interface BlogPostFrontmatterValues {
    title: string;
    slug: string;
    date: Date;
    author: string;
}

interface BookReviewFrontmatterValues {
    title: string;
    author: string; // Author of the book, not the review
    slug: string;
    date: Date;
    finished: Date;
    score: number;
    image: string;
}

export class MarkdownRepository {
    readonly blogPosts: BlogPostSet;
    readonly bookReviews: BookReviewSet;

    private constructor(blogPosts: BlogPost[], bookReviews: BookReview[]) {
        this.blogPosts = new BlogPostSet(blogPosts);
        this.bookReviews = new BookReviewSet(bookReviews);
    }

    public static async singleton(): Promise<MarkdownRepository> {
        return await MarkdownRepository.fromViteGlobImport(blogPostMetaGlobImport, bookReviewsMetaGlobImport);
    }

    public static async fromViteGlobImport(blogGlobImport, bookReviewGlobImport): Promise<MarkdownRepository> {
        let fileImports: MarkdownFile<BlogPostFrontmatterValues>[] = [];
        let blogPosts: BlogPost[] = [];
        let bookReviews: BookReview[] = [];

        const blogPostFiles = Object.entries(blogGlobImport);

        for (const blogPostFile of blogPostFiles) {
            const [filename, module] = blogPostFile as [string, () => Promise<string>];
            try {
                const fileContent = await module();

                const markdownFile = new MarkdownFile<BlogPostFrontmatterValues>({
                    fileName: filename,
                    content: fileContent,
                });
                const blogPost = new BlogPost({
                    markdownContent: markdownFile.content,
                    title: markdownFile.frontmatter.title,
                    slug: markdownFile.frontmatter.slug,
                    author: markdownFile.frontmatter.author,
                    date: markdownFile.frontmatter.date,
                });

                fileImports = [...fileImports, markdownFile];
                blogPosts = [...blogPosts, blogPost];
            } catch (e) {
                console.error({
                    message: `[MarkdownRespository::fromViteGlobImport] Error loading file ${filename}`,
                    error: e,
                });
            }
        }

        for (const bookReviewFile of Object.entries(bookReviewGlobImport)) {
            const [filename, module] = bookReviewFile as [string, () => Promise<string>];
            try {
                const fileContent = await module();

                const markdownFile = new MarkdownFile<BookReviewFrontmatterValues>({
                    fileName: filename,
                    content: fileContent,
                });

                const bookReview = new BookReview({
                    author: markdownFile.frontmatter.author,
                    title: markdownFile.frontmatter.title,
                    slug: markdownFile.frontmatter.slug,
                    date: markdownFile.frontmatter.date,
                    draft: false,
                    finished: markdownFile.frontmatter.finished,
                    image: markdownFile.frontmatter.image,
                    score: markdownFile.frontmatter.score,
                    markdownContent: markdownFile.content,
                });

                bookReviews = [...bookReviews, bookReview];
            } catch (e) {
                console.error({
                    message: `[MarkdownRespository::fromViteGlobImport] Error loading file ${filename}`,
                    error: e,
                });
            }
        }

        const repository = new MarkdownRepository(blogPosts, bookReviews);
        await repository.buildAll();
        return repository;
    }

    private async buildAll() {
        await Promise.all([this.blogPosts.buildAllBlogPosts(), this.bookReviews.buildAllBookReviews()]);
        return;
    }

    getBlogPostBySlug(slug: string): BlogPost | null {
        return this.blogPosts.blogPosts.find((blogPost) => blogPost.slug === slug) ?? null;
    }

    getBookReviewBySlug(slug: string): BookReview | null {
        return this.bookReviews.bookReviews.find((bookReview) => bookReview.slug === slug) ?? null;
    }

    async deleteBlogPostMarkdownFile(fileName: string): Promise<void> {
        const file = this.blogPosts.blogPosts.find((blogPost) => blogPost.fileName === fileName);
        if (file) {
            const file = resolve(blogPostMarkdownDirectory, fileName);
        }
    }
}
