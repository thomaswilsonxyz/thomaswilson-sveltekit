import { writeFile, unlink, existsSync } from 'fs';

import { BlogPost } from './BlogPost.js';
import { MarkdownFile } from './MarkdownFile.js';
import { BlogPostSet } from './BlogPostSet.js';
import { BookReviewSet } from './BookReviewSet.js';
import { BookReview } from './BookReview.js';
import { SnoutStreetStudiosPost } from '$lib/snout-street-studios/SnoutStreetStudiosPost.js';
import { SnoutStreetStudiosPostSet } from './SnoutStreetStudiosPostSet.js';
import { MarkdownBuilder } from './markdown/markdown-builder.js';

// We have to duplicate the `../..` here because import.meta must have a static string,
// and it (rightfully) cannot have dynamic locations
const blogPostMetaGlobImport = import.meta.glob(`../../content/blog/*.md`, { as: 'raw' });
const bookReviewsMetaGlobImport = import.meta.glob(`../../content/book-reviews/*.md`, { as: 'raw' });
const snoutStreetStudiosPostMetaGlobImport = import.meta.glob('../../content/snout-street-studios/*.md', {
    as: 'raw',
});

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

interface SnoutStreetStudiosPostFrontmatterValues {
    title: string;
    slug: string;
    date: string;
}

export class MarkdownRepository {
    readonly blogPosts: BlogPostSet;
    readonly bookReviews: BookReviewSet;
    readonly snoutStreetStudiosPosts: SnoutStreetStudiosPostSet;

    private constructor(
        blogPosts: BlogPost[],
        bookReviews: BookReview[],
        snoutStreetStudiosPosts: SnoutStreetStudiosPost[]
    ) {
        this.blogPosts = new BlogPostSet(blogPosts);
        this.bookReviews = new BookReviewSet(bookReviews);
        this.snoutStreetStudiosPosts = new SnoutStreetStudiosPostSet(snoutStreetStudiosPosts);
    }

    public static async singleton(): Promise<MarkdownRepository> {
        return await MarkdownRepository.fromViteGlobImport(
            blogPostMetaGlobImport,
            bookReviewsMetaGlobImport,
            snoutStreetStudiosPostMetaGlobImport
        );
    }

    public static async fromViteGlobImport(
        blogGlobImport,
        bookReviewGlobImport,
        snoutStreetPostGlobImport
    ): Promise<MarkdownRepository> {
        let fileImports: MarkdownFile<BlogPostFrontmatterValues>[] = [];
        let blogPosts: BlogPost[] = [];
        let bookReviews: BookReview[] = [];
        let snoutStreetPosts: SnoutStreetStudiosPost[] = [];

        const blogPostFiles = Object.entries(blogGlobImport);

        for (const blogPostFile of blogPostFiles) {
            const [filename, module] = blogPostFile as [string, () => Promise<string>];
            try {
                const markdownFile = await MarkdownFile.build<BlogPostFrontmatterValues>(filename, await module());

                const blogPost = new BlogPost({
                    excerpt: markdownFile.excerpt,
                    html: markdownFile.html,
                    title: markdownFile.frontmatter.title,
                    slug: markdownFile.frontmatter.slug,
                    author: markdownFile.frontmatter.author,
                    date: markdownFile.frontmatter.date,
                    fileName: filename,
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
                const markdownFile = await MarkdownFile.build<BookReviewFrontmatterValues>(filename, await module());

                const bookReview = new BookReview({
                    author: markdownFile.frontmatter.author,
                    title: markdownFile.frontmatter.title,
                    slug: markdownFile.frontmatter.slug,
                    date: markdownFile.frontmatter.date,
                    draft: false,
                    finished: markdownFile.frontmatter.finished,
                    image: markdownFile.frontmatter.image,
                    score: markdownFile.frontmatter.score,
                    html: markdownFile.html,
                });

                bookReviews = [...bookReviews, bookReview];
            } catch (e) {
                console.error({
                    message: `[MarkdownRespository::fromViteGlobImport] Error loading file ${filename}`,
                    error: e,
                });
            }
        }

        for (const snoutStreetPostFile of Object.entries(snoutStreetPostGlobImport)) {
            const [filename, module] = snoutStreetPostFile as [string, () => Promise<string>];
            try {
                const markdownFile = await MarkdownFile.build<SnoutStreetStudiosPostFrontmatterValues>(
                    filename,
                    await module()
                );

                const snoutStreetPost = new SnoutStreetStudiosPost({
                    title: markdownFile.frontmatter.title,
                    slug: markdownFile.frontmatter.slug,
                    date: new Date(markdownFile.frontmatter.date),
                    html: markdownFile.html,
                    excerpt: markdownFile.excerpt,
                });

                snoutStreetPosts = [...snoutStreetPosts, snoutStreetPost];
            } catch (e: any) {
                console.error({
                    message: `[MarkdownRespository::fromViteGlobImport] Error loading file ${filename}`,
                    error: e,
                });
            }
        }

        console.log(`[MarkdownRepository::fromViteGlobImport] Loaded ${fileImports.length} files.`);
        const repository = new MarkdownRepository(blogPosts, bookReviews, snoutStreetPosts);
        console.log(`[MarkdownRepository::fromViteGlobImport] Built all posts.`);
        return repository;
    }

    getBlogPostBySlug(slug: string): BlogPost | null {
        return this.blogPosts.blogPosts.find((blogPost) => blogPost.slug === slug) ?? null;
    }

    getBookReviewBySlug(slug: string): BookReview | null {
        return this.bookReviews.bookReviews.find((bookReview) => bookReview.slug === slug) ?? null;
    }

    getSnoutStreetStudiosPostBySlug(slug: string): SnoutStreetStudiosPost | null {
        return this.snoutStreetStudiosPosts.posts.find((post) => post.slug === slug) ?? null;
    }

    async createBlogPostMarkdownFile(resolvedPath: string, contents: string): Promise<BlogPost> {
        return new Promise<void>((resolve, reject) => {
            writeFile(resolvedPath, contents, (err) => {
                if (err) {
                    console.error({
                        message: `createBlogPostMarkdownFile: Caught error while writing file ${resolvedPath}`,
                        err,
                        error: JSON.stringify(err),
                    });
                    reject(err);
                }

                resolve();
            });
        }).then(async () => {
            const markdownFile = await MarkdownFile.build<BlogPostFrontmatterValues>(resolvedPath, contents);

            const blogPost = new BlogPost({
                html: markdownFile.html,
                excerpt: markdownFile.excerpt,
                title: markdownFile.frontmatter.title,
                slug: markdownFile.frontmatter.slug,
                author: markdownFile.frontmatter.author,
                date: markdownFile.frontmatter.date,
                fileName: resolvedPath,
            });

            return blogPost;
        });
    }

    async deleteBlogPostMarkdownFile(resolvedFilePath: string): Promise<void> {
        const isPresent = existsSync(resolvedFilePath);

        if (!isPresent) {
            throw `Sausages File '${resolvedFilePath}' not found.`;
        }

        return new Promise((resolve, reject) => {
            unlink(resolvedFilePath, (err) => {
                if (err) {
                    console.error({
                        message: `deleteBlogPostMarkdownFile: Caught error while deleting file ${resolvedFilePath}`,
                        err,
                        error: JSON.stringify(err),
                    });
                    reject(err);
                }

                resolve();
            });
        });
    }
}
