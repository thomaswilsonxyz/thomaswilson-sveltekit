import type { Processor } from 'unified';
import { unified } from 'unified';
import markdown from 'remark-parse';
import markdownFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

interface BookReviewProps {
    title: string;
    author: string;
    score: number;
    image: string;
    slug: string;
    date: Date;
    finished: Date;
    draft: boolean;
    markdownContent: string;
}

export class BookReview {
    readonly title: string;
    readonly author: string;
    readonly score: number;
    readonly image: string;
    readonly slug: string;
    readonly date: Date;
    readonly finished: Date;
    private readonly markdownContent: string;
    private _html: string | null = null;

    constructor(props: BookReviewProps) {
        this.title = props.title;
        this.author = props.author;
        this.score = props.score;
        this.image = props.image;
        this.slug = props.slug;
        this.date = props.date;
        this.finished = props.finished;
        this.markdownContent = props.markdownContent;
    }

    private htmlProcessorFactory(): Processor {
        return unified() //
            .use(markdown)
            .use(markdownFrontmatter)
            .use(remarkStringify)
            .use(remarkRehype)
            .use(rehypeStringify);
    }

    async build(): Promise<void> {
        await this.getHtml();
    }

    async getHtml(): Promise<string> {
        if (this._html === null) {
            const processor = this.htmlProcessorFactory();
            const value = await processor.process(this.markdownContent);
            this._html = value.toString();
        }

        return this._html;
    }

    get html(): string | null {
        return this._html;
    }
}
