import { BlogPost } from '../BlogPost.js';

class BlogPostBuilder {
    private _title = 'default title';
    private _author = 'default author';
    private _date = new Date('2022-01-01T00:00Z');
    private _slug = 'default-slug';

    private _markdownContent = 'default markdown content';

    withTitle(title: string): BlogPostBuilder {
        this._title = title;
        return this;
    }

    withMarkdownContent(markdownContent: string): BlogPostBuilder {
        this._markdownContent = markdownContent;
        return this;
    }

    withAuthor(author: string): BlogPostBuilder {
        this._author = author;
        return this;
    }

    withDate(date: Date): BlogPostBuilder {
        this._date = date;
        return this;
    }

    withSlug(slug: string): BlogPostBuilder {
        this._slug = slug;
        return this;
    }

    async constructAndThenBuild(): Promise<BlogPost> {
        const blogPost = this.build();
        await blogPost.build();
        return blogPost;
    }

    build(): BlogPost {
        return new BlogPost({
            title: this._title,
            markdownContent: this._markdownContent,
            author: this._author,
            date: this._date,
            slug: this._slug,
        });
    }
}

export function aBlogPost(): BlogPostBuilder {
    return new BlogPostBuilder();
}
