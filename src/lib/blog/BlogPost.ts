import type { Processor } from 'unified';
import { unified } from 'unified';
import markdown from 'remark-parse';
import markdownFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

interface BlogPostParams {
    title: string;
    markdownContent: string;
}

export class BlogPost {
    readonly title: string;
    readonly markdownContent: string;

    constructor(params: BlogPostParams) {
        this.title = params.title;
        this.markdownContent = params.markdownContent;
    }

    async getHtml(): Promise<string> {
        const processor = this.markdownToHtmlProcessorFactory();
        const html = await processor.process(this.markdownContent);
        return html.toString();
    }

    private markdownToHtmlProcessorFactory(): Processor {
        return unified() //
            .use(markdown)
            .use(markdownFrontmatter)
            .use(remarkStringify)
            .use(remarkRehype)
            .use(rehypeStringify);
    }
}
