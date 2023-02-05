import { BlogPost } from './BlogPost.js';
import { MarkdownFile } from './MarkdownFile.js';
import { BlogPostSet } from './BlogPostSet.js';

interface FrontmatterValues {
    title: string;
    slug: string;
    date: Date;
    author: string;
}

export class MarkdownRepository {
    readonly markdownFiles: MarkdownFile[];
    readonly blogPosts: BlogPostSet;

    private constructor(files: MarkdownFile[], blogPosts: BlogPost[]) {
        this.blogPosts = new BlogPostSet([]);
        this.markdownFiles = files;
        this.blogPosts = new BlogPostSet(blogPosts);
    }

    public static async fromViteGlobImport(globImport): Promise<MarkdownRepository> {
        let fileImports: MarkdownFile<FrontmatterValues>[] = [];
        let blogPosts: BlogPost[] = [];
        const allFiles = Object.entries(globImport);

        for (const entry of allFiles) {
            const [filename, module] = entry as [string, () => Promise<string>];
            try {
                const fileContent = await module();

                const markdownFile = new MarkdownFile<FrontmatterValues>({ fileName: filename, content: fileContent });
                const blogPost = new BlogPost({
                    markdownContent: markdownFile.content,
                    title: markdownFile.frontmatter.title,
                    slug: markdownFile.frontmatter.slug,
                    author: markdownFile.frontmatter.author,
                    date: markdownFile.frontmatter.date,
                });

                fileImports = [...fileImports, markdownFile];
                blogPosts = [...blogPosts, blogPost];
            } catch (e) {
                console.error({
                    message: `[MarkdownRespository::fromViteGlobImport] Error loading file ${filename}`,
                    error: e,
                });
            }
        }

        return new MarkdownRepository(fileImports, blogPosts);
    }

    getMarkdownFileForFileName(fileName: string): MarkdownFile | null {
        return this.markdownFiles.find((file) => file.fileName === fileName) ?? null;
    }

    getBlogPostWithTitle(title: string): BlogPost | null {
        return this.blogPosts.getBlogPostWithTitle(title);
    }
}
