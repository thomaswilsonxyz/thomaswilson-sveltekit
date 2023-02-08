import type { BlogPostSet } from './BlogPostSet.js';
import type { BlogPost } from './BlogPost.js';
import type { BookReviewSet } from './BookReviewSet.js';
import type { BookReview } from './BookReview.js';

export class RssFeed {
    constructor(private readonly blogPosts: BlogPostSet, private readonly bookReviews: BookReviewSet) {}

    private blogPostXml(blogPost: BlogPost): string {
        return `<item>
                <title>${blogPost.title}</title>
                <link>https://thomaswilson.xyz/blog/${blogPost.slug}</link>
                <description><![CDATA[${blogPost.html}]]></description>
                <pubDate>${blogPost.date.toUTCString()}</pubDate>
                <guid>https://thomaswilson.xyz/blog/${blogPost.slug}</guid>
        </item>`;
    }

    private bookReviewXml(bookReview: BookReview): string {
        return `<item>
                <title>Book Review: ${bookReview.title}</title>
                <link>https://thomaswilson.xyz/blog/${bookReview.slug}</link>
                <description><![CDATA[${bookReview.html}]]></description>
                <pubDate>${bookReview.date.toUTCString()}</pubDate>
                <guid>https://thomaswilson.xyz/blog/${bookReview.slug}</guid>
        </item>`;
    }

    get xml(): string {
        return `<?xml encoding="UTF-8"?>
<rss version="2.0" >
    <channel>
        <title>thomaswilson.xyz</title>
        <link>https://thomaswilson.xyz/blog</link>
        <description>I write about software and how I should have built it, and sometimes other things.</description>
        <language>en-gb</language>
        ${this.blogPosts.blogPosts.map((blogPost) => this.blogPostXml(blogPost)).join('')}
        ${this.bookReviews.bookReviews.map((bookReview) => this.bookReviewXml(bookReview)).join('')}
    </channel>
</rss>`;
    }
}
