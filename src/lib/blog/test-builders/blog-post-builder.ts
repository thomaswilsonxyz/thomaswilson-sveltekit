import { BlogPost } from '../BlogPost.js';

class BlogPostBuilder {
    private _title = 'default title';
    private _markdownContent = 'default markdown content';

    withTitle(title: string): BlogPostBuilder {
        this._title = title;
        return this;
    }

    withMarkdownContent(markdownContent: string): BlogPostBuilder {
        this._markdownContent = markdownContent;
        return this;
    }

    build(): BlogPost {
        return new BlogPost({ title: this._title, markdownContent: this._markdownContent });
    }
}

export function aBlogPost(): BlogPostBuilder {
    return new BlogPostBuilder();
}
