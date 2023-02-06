import type { Processor } from 'unified';
import { unified } from 'unified';
import { remark } from 'remark';
import markdown from 'remark-parse';
import markdownFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import stripMarkdown from 'strip-markdown';
import remarkFrontmatter from 'remark-frontmatter';

interface BlogPostParams {
    title: string;
    date: Date;
    author: string;
    slug: string;
    markdownContent: string;
}

export class BlogPost {
    readonly title: string;
    readonly date: Date;
    readonly author: string;
    readonly slug: string;
    readonly markdownContent: string;

    private _html: string | null = null;
    private _excerpt: string | null = null;

    constructor(params: BlogPostParams) {
        this.title = params.title;
        this.date = params.date;
        this.author = params.author;
        this.slug = params.slug;
        this.markdownContent = params.markdownContent;
    }

    get html(): string | null {
        return this._html;
    }

    get excerpt(): string | null {
        return this._excerpt;
    }

    get hasBeenBuilt(): boolean {
        return this._html !== null && this._excerpt !== null;
    }

    async build(): Promise<void> {
        await this.getHtml();
        await this.getExcerpt();
    }

    async getExcerpt(wordLength = 50): Promise<string> {
        const processor = this.markdownToExcerptProcessorFactory();
        const value = await processor.process(this.markdownContent);

        const textValueWithNoLinebreaks = value.toString();

        // A regex that looks for any character, followed by `.`, and then another character.
        // e.g. "This is a sentence.This is another sentence."
        // becomes "This is a sentence. This is another sentence."
        const reg = /([a-zA-Z0-9])\.([a-zA-Z0-9])/g;

        const textWithSpacesBetweenSentences = textValueWithNoLinebreaks
            .replaceAll('\r', ' ')
            .replaceAll('\n', ' ')
            .replaceAll(reg, '$1. $2')
            .split(' ')
            .filter((word) => word !== ' ' && word !== '')
            .slice(0, wordLength)
            .join(' ');

        this._excerpt = textWithSpacesBetweenSentences;
        return this._excerpt;
    }

    async getHtml(): Promise<string> {
        const processor = this.markdownToHtmlProcessorFactory();
        const html = await processor.process(this.markdownContent);
        this._html = html.toString();
        return this._html;
    }

    private markdownToHtmlProcessorFactory(): Processor {
        return unified() //
            .use(markdown)
            .use(markdownFrontmatter)
            .use(remarkStringify)
            .use(remarkRehype, { allowDangerousHtml: true })
            .use(rehypeStringify, { allowDangerousHtml: true });
    }

    private markdownToExcerptProcessorFactory(): Processor {
        return remark()
            .use(markdown)
            .use(remarkFrontmatter)
            .use(stripMarkdown, { remove: ['list'] });
    }
}
