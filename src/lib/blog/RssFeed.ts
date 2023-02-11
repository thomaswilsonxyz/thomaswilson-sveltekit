import { Feed, type Item as FeedItem } from 'feed';

import type { BlogPostSet } from './BlogPostSet.js';
import type { BlogPost } from './BlogPost.js';
import type { BookReviewSet } from './BookReviewSet.js';
import type { BookReview } from './BookReview.js';

export class RssFeed {
    private feed: Feed;

    constructor(private readonly blogPosts: BlogPostSet, private readonly bookReviews: BookReviewSet) {
        this.feed = new Feed({
            copyright: `All Rights Reserved Thomas Wilson 2023`,
            id: 'https://www.thomaswilson.xyz',
            title: `thomaswilson.xyz`,
            author: {
                name: 'Thomas Wilson',
            },
            description: `I write about software and how I should have built it, and sometimes other things.`,
        });

        this.blogPosts.blogPosts.forEach((blogPost) => this.feed.addItem(this.blogPostXml(blogPost)));
        this.bookReviews.bookReviews.forEach((bookReview) => this.feed.addItem(this.bookReviewXml(bookReview)));
    }

    private blogPostXml(blogPost: BlogPost): FeedItem {
        const item: FeedItem = {
            description: blogPost.html,
            date: blogPost.date,
            link: `https://thomaswilson.xyz/blog/${blogPost.slug}`,
            title: blogPost.title,
            published: blogPost.date,
        };

        return item;
    }

    private bookReviewXml(bookReview: BookReview): FeedItem {
        return {
            date: bookReview.date,
            link: `https://thomaswilson.xyz/blog/${bookReview.slug}`,
            title: `Book Review: ${bookReview.title}`,
            category: [{ domain: 'https://thomaswilson.xyz/blog', name: 'Book Review' }],
            description: bookReview.html,
        };
    }

    get xml(): string {
        return this.feed.rss2();
    }
}
