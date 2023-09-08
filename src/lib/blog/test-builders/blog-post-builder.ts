import { BlogPost } from '../BlogPost.js';

class BlogPostBuilder {
    private _title = 'default title';
    private _html = 'default html';
    private _excerpt = 'default excerpt';
    private _author = 'default author';
    private _date = new Date('2022-01-01T00:00Z');
    private _slug = 'default-slug';
    private _fileName = 'default-file-name.md';

    withTitle(title: string): BlogPostBuilder {
        this._title = title;
        return this;
    }

    withHtml(markdownContent: string): BlogPostBuilder {
        this._html = markdownContent;
        return this;
    }

    withExcerpt(excerpt: string): BlogPostBuilder {
        this._excerpt = excerpt;
        return this;
    }

    withFileName(fileName: string): BlogPostBuilder {
        this._fileName = fileName;
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

    build(): BlogPost {
        return new BlogPost({
            title: this._title,
            html: this._html,
            author: this._author,
            date: this._date,
            slug: this._slug,
            fileName: this._fileName,
            excerpt: this._excerpt,
        });
    }
}

export function aBlogPost(): BlogPostBuilder {
    return new BlogPostBuilder();
}
