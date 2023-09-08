import { unified } from 'unified';
import type { Processor } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import stripMarkdown from 'strip-markdown';
import type { Parent, Literal } from 'unist';
import { load as loadYaml } from 'js-yaml';

type MarkdownDocumentType = 'body' | 'excerpt';

export class MarkdownBuilder {
    static async getHtml(markdownContent: string): Promise<string> {
        const processor = this.getDocumentProcessor();
        const value = await processor.process(markdownContent);
        return value.toString();
    }

    static getFrontmatter<T extends Record<string, any>>(markdownContent: string, fileName: string): T | null {
        const processor = this.getFrontmatterProcessor();
        const parsedMarkdown: Parent<Literal> = processor.parse(markdownContent) as Parent<Literal>;

        const frontmatterNode: Literal | undefined = parsedMarkdown.children.find((node) => node.type === 'yaml');

        if (frontmatterNode !== undefined) {
            const frontmatter = loadYaml(frontmatterNode.value as string);
            return frontmatter as T;
        } else {
            console.warn(`Markdown file ${fileName} does not contain frontmatter.`);
            return null;
        }
    }

    static async getExcerptFromMarkdown(markdownContent: string, wordLength = 50): Promise<string> {
        const initialTextContent = await this.getExcerptMarkdownProcessor().process(markdownContent);

        const textValueWithNoLinebreaks = initialTextContent.toString();

        return textValueWithNoLinebreaks
            .replaceAll('\r', ' ')
            .replaceAll('\n', ' ')
            .split(' ')
            .filter((word) => word !== ' ' && word !== '')
            .slice(0, wordLength)
            .join(' ');
    }

    private static getFrontmatterProcessor(): Processor {
        return unified() //
            .use(remarkParse)
            .use(remarkFrontmatter)
            .use(remarkStringify);
    }

    private static getExcerptMarkdownProcessor(): Processor {
        return unified()
            .use(remarkParse)
            .use(remarkStringify)
            .use(remarkFrontmatter, { type: 'yaml', marker: '-' })
            .use(stripMarkdown);
    }

    static getDocumentProcessor(): Processor {
        return unified() //
            .use(remarkParse)
            .use(remarkFrontmatter)
            .use(remarkStringify)
            .use(remarkRehype, { allowDangerousHtml: true })
            .use(rehypeStringify, {
                allowDangerousHtml: true,
                allowDangerousCharacters: true,
            });
    }
}
