import type { BlogPost } from './BlogPost.js';
import type { BookReview } from './BookReview.js';
import { MarkdownRepository } from './markdown-repository.js';

const blogPostMetaGlobImport = import.meta.glob('../../content/blog/*.md', { as: 'raw' });
const bookReviewsMetaGlobImport = import.meta.glob('../../content/book-reviews/*.md', { as: 'raw' });

interface BlogPostListItem {
    title: string;
    author: string;
    date: string;
    book_review: boolean;
    preview: string;
    content: string;
    slug: string;
}

interface BookReviewListItem {
    book_review: true;
    title: string;
    author: string;
    image: string;
    slug: string;
    score: number;
    finished: string;
    date: string;
    content: string;
}

export class BlogController {
    static async singleton(): Promise<BlogController> {
        const markdownRepository = await MarkdownRepository.singleton();
        return new BlogController(markdownRepository);
    }

    constructor(private readonly markdownRepository: MarkdownRepository) {}

    async getAllBlogPosts(): Promise<Array<BlogPostListItem | BookReviewListItem>> {
        const blogPosts = await this.markdownRepository.blogPosts;

        const bookReviews = await this.markdownRepository.bookReviews;

        const blogPostListItems: BlogPostListItem[] = blogPosts.blogPosts.map((blogPost) => {
            return this.blogPostToBlogPostListItem(blogPost);
        });

        const bookReviewListItems: BookReviewListItem[] = bookReviews.bookReviews.map((bookReview) => {
            return this.bookReviewToBookReviewListItem(bookReview);
        });

        return [...blogPostListItems, ...bookReviewListItems].sort((a, b) => (a.date > b.date ? -1 : 1));
    }

    private bookReviewToBookReviewListItem(bookReview: BookReview, includeHtml = false): BookReviewListItem {
        return {
            book_review: true,
            title: bookReview.title,
            author: bookReview.author,
            date: bookReview.date.toISOString(),
            finished: bookReview.finished.toISOString(),
            image: bookReview.image,
            score: bookReview.score,
            slug: bookReview.slug,
            content: includeHtml ? bookReview.html : '',
        };
    }

    private blogPostToBlogPostListItem(blogPost: BlogPost, includeHtml = false): BlogPostListItem {
        return {
            title: blogPost.title,
            author: blogPost.author,
            book_review: false,
            content: includeHtml ? blogPost.html : '',
            date: blogPost.date.toISOString(),
            preview: blogPost.excerpt,
            slug: blogPost.slug,
        };
    }

    async getBlogOrBookReviewBySlug(slug: string): Promise<BookReviewListItem | BlogPostListItem | null> {
        const blogPost = await this.markdownRepository.getBlogPostBySlug(slug);
        if (blogPost) {
            return this.blogPostToBlogPostListItem(blogPost, true);
        }

        const bookReview = await this.markdownRepository.getBookReviewBySlug(slug);
        if (bookReview) {
            return this.bookReviewToBookReviewListItem(bookReview, true);
        }

        return null;
    }
}
