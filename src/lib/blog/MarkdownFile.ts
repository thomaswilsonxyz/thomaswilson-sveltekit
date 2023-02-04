import { unified, type Processor } from 'unified';
import type { Parent, Node, Literal } from 'unist';

import markdown from 'remark-parse';
import markdownFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';
import { load as loadYaml } from 'js-yaml';

interface MarkdownFileProps {
    fileName: string;
    content: string;
}
export class MarkdownFile<FrontMatter = Record<string, string>> {
    readonly fileName: string;
    readonly content: string;
    readonly frontmatter: FrontMatter | undefined = undefined;

    constructor(props: MarkdownFileProps) {
        this.fileName = props.fileName;
        this.content = props.content;

        const processor = this.markdownProcesserFactory();
        const parsedMarkdown: Parent<Literal> = processor.parse(this.content) as Parent<Literal>;

        const frontmatterNode: Literal | undefined = parsedMarkdown.children.find((node) => node.type === 'yaml');

        if (frontmatterNode !== undefined) {
            const frontmatter = loadYaml(frontmatterNode.value as string);
            this.frontmatter = frontmatter as FrontMatter;
        } else {
            console.warn(`Markdown file ${this.fileName} does not contain frontmatter.`);
        }
    }

    private markdownProcesserFactory(): Processor {
        return unified() //
            .use(markdown)
            .use(markdownFrontmatter)
            .use(remarkStringify);
    }
}
