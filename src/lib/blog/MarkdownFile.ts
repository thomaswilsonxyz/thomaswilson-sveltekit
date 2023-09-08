import { MarkdownBuilder } from './markdown/markdown-builder.js';

interface MarkdownFileProps {
    fileName: string;
    /** The raw contents of the .md file */
    content: string;
}
export class MarkdownFile<FrontMatter = Record<string, string>> {
    readonly fileName: string;
    readonly content: string;
    private _frontmatter: FrontMatter | null = null;
    private _html: string | null = null;
    private _excerpt: string | null = null;

    private constructor(props: MarkdownFileProps) {
        this.fileName = props.fileName;
        this.content = props.content;
    }

    get html(): string | null {
        return this._html;
    }

    get frontmatter(): FrontMatter | null {
        return this._frontmatter;
    }

    get excerpt(): string | null {
        return this._excerpt;
    }

    static async build<Frontmatter extends Record<string, any>>(
        theFileName: string,
        theFileContents: string
    ): Promise<MarkdownFile<Frontmatter>> {
        const markdownFile = new MarkdownFile<Frontmatter>({ fileName: theFileName, content: theFileContents });
        await markdownFile.build();
        return markdownFile;
    }

    private async build(): Promise<void> {
        this._html = await MarkdownBuilder.getHtml(this.content);
        this._excerpt = await MarkdownBuilder.getExcerptFromMarkdown(this.content);
        this._frontmatter = MarkdownBuilder.getFrontmatter(this.content, this.fileName);
    }
}
