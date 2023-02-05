import { BlogPost } from './BlogPost.js';
import { MarkdownFile } from './MarkdownFile.js';
import { BlogPostSet } from './BlogPostSet.js';
import { BookReviewSet } from './BookReviewSet.js';
import { BookReview } from './BookReview.js';

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
                });

                bookReviews = [...bookReviews, bookReview];
            } catch (e) {
                console.error({
                    message: `[MarkdownRespository::fromViteGlobImport] Error loading file ${filename}`,
                    error: e,
                });
            }
        }

        return new MarkdownRepository(blogPosts, bookReviews);
    }
}
