import type { SnoutStreetStudiosPost } from '$lib/snout-street-studios/SnoutStreetStudiosPost.js';
import type { BlogPost } from './BlogPost.js';
import type { BookReview } from './BookReview.js';
import { MarkdownRepository } from './markdown-repository.js';

interface BlogItem {
    title: string;
    date: string;
    content: string;
    slug: string;
    content_type: 'blog' | 'book_review' | 'snout_street_studios';
    tags?: string[];
}

interface BlogPostListItem extends BlogItem {
    title: string;
    author: string;
    date: string;
    book_review: boolean;
    preview: string;
    tags: string[];
}

interface BookReviewListItem extends BlogItem {
    book_review: true;
    title: string;
    author: string;
    image: string;
    slug: string;
    score: number;
    finished: string;
}

interface SnoutStreetStudiosPostListItem extends BlogItem {
    title: string;
    slug: string;
    date: string;
}

export class BlogController {
    private _markdownRepository: MarkdownRepository;

    static async singleton(): Promise<BlogController> {
        const markdownRepository = await MarkdownRepository.singleton();
        return new BlogController(markdownRepository);
    }

    constructor(markdownRepository: MarkdownRepository) {
        this._markdownRepository = markdownRepository;
    }

    get markdownRepository(): MarkdownRepository {
        return this._markdownRepository;
    }

    async createBlogPost(resolvedFileName: string, markdownContent: string): Promise<BlogPost> {
        const createdBlogPost = await this._markdownRepository.createBlogPostMarkdownFile(
            resolvedFileName,
            markdownContent
        );
        this._markdownRepository = await MarkdownRepository.singleton(true);
        return createdBlogPost;
    }

    async getAllBlogPosts(
        pageSize?: number
    ): Promise<Array<BlogPostListItem | BookReviewListItem | SnoutStreetStudiosPostListItem>> {
        console.log('getAllBlogPosts');
        console.log({ pageSize });
        const blogPosts = await this._markdownRepository.blogPosts;

        const bookReviews = await this._markdownRepository.bookReviews;

        const snoutStreetStudiosPosts = await this._markdownRepository.snoutStreetStudiosPosts;

        const blogPostListItems: BlogPostListItem[] = blogPosts.blogPosts.map((blogPost) => {
            return this.blogPostToBlogPostListItem(blogPost);
        });

        const bookReviewListItems: BookReviewListItem[] = bookReviews.bookReviews.map((bookReview) => {
            return this.bookReviewToBookReviewListItem(bookReview);
        });

        const snoutStreetStudiosPostListItems: SnoutStreetStudiosPostListItem[] = snoutStreetStudiosPosts.posts.map(
            (post) => this.snoutStreetStudiosPostToSnoutStreetStudiosPostListItem(post)
        );

        const allBlogPosts = [...blogPostListItems, ...bookReviewListItems, ...snoutStreetStudiosPostListItems].sort(
            (a, b) => (a.date > b.date ? -1 : 1)
        );

        if (pageSize === undefined) {
            console.log('returning all blog posts');
            return allBlogPosts;
        }

        return allBlogPosts.slice(0, pageSize);
    }

    async getBlogPostBySlug(slug: string): Promise<BlogPostListItem | null> {
        const blogPost = await this._markdownRepository.getBlogPostBySlug(slug);
        if (blogPost) {
            return this.blogPostToBlogPostListItem(blogPost);
        }

        return null;
    }

    async getBlogPostsByTags(tags: string[]): Promise<BlogPostListItem[]> {
        const posts = await this.getAllBlogPosts();
        const blogPosts = posts.filter((post) => post.content_type === 'blog') as BlogPostListItem[];
        return blogPosts
            .filter((post: BlogPostListItem) => post['tags']?.length > 0)
            .filter((post: BlogPostListItem) => (post.tags as string[]).some((tag) => tags.includes(tag)));
    }

    async getAnyKindOfContentBySlug(
        slug: string
    ): Promise<BookReviewListItem | BlogPostListItem | SnoutStreetStudiosPostListItem | null> {
        const blogPost = await this._markdownRepository.getBlogPostBySlug(slug);
        if (blogPost) {
            return this.blogPostToBlogPostListItem(blogPost);
        }

        const bookReview = await this._markdownRepository.getBookReviewBySlug(slug);
        if (bookReview) {
            return this.bookReviewToBookReviewListItem(bookReview);
        }

        const snoutStreetStudiosPost = await this._markdownRepository.getSnoutStreetStudiosPostBySlug(slug);

        if (snoutStreetStudiosPost) {
            return this.snoutStreetStudiosPostToSnoutStreetStudiosPostListItem(snoutStreetStudiosPost);
        }

        return null;
    }

    private bookReviewToBookReviewListItem(bookReview: BookReview): BookReviewListItem {
        return {
            book_review: true,
            title: bookReview.title,
            author: bookReview.author,
            date: bookReview.date.toISOString(),
            finished: bookReview.finished.toISOString(),
            image: bookReview.image,
            score: bookReview.score,
            slug: bookReview.slug,
            content: 'bookReview.html',
            content_type: 'book_review',
        };
    }

    private blogPostToBlogPostListItem(blogPost: BlogPost): BlogPostListItem {
        return {
            title: blogPost.title,
            author: blogPost.author,
            book_review: false,
            content: blogPost.html,
            date: blogPost.date.toISOString(),
            preview: blogPost.excerpt,
            slug: blogPost.slug,
            content_type: 'blog',
            tags: blogPost.tags,
        };
    }

    private snoutStreetStudiosPostToSnoutStreetStudiosPostListItem(
        post: SnoutStreetStudiosPost
    ): SnoutStreetStudiosPostListItem {
        return {
            title: post.title,
            slug: post.slug,
            date: post.date.toISOString(),
            content_type: 'snout_street_studios',
            content: post.html,
        };
    }
}
