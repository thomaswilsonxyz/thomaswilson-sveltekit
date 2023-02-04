import { BlogPost } from './BlogPost.js';
import { MarkdownFile } from './MarkdownFile.js';
import { BlogPostSet } from './BlogPostSet.js';

export class MarkdownRepository {
    readonly markdownFiles: MarkdownFile[];
    readonly blogPosts: BlogPostSet;

    private constructor(files: MarkdownFile[], blogPosts: BlogPost[]) {
        this.blogPosts = new BlogPostSet([]);
        this.markdownFiles = files;
        this.blogPosts = new BlogPostSet(blogPosts);
    }

    public static async fromViteGlobImport(globImport): Promise<MarkdownRepository> {
        let fileImports: MarkdownFile[] = [];
        let blogPosts: BlogPost[] = [];
        const allFiles = Object.entries(globImport);

        for (const entry of allFiles) {
            const [filename, module] = entry as [string, () => Promise<string>];
            const fileContent = await module();

            const markdownFile = new MarkdownFile<{ title: string }>({ fileName: filename, content: fileContent });
            const blogPost = new BlogPost({
                markdownContent: markdownFile.content,
                title: markdownFile.frontmatter.title,
            });

            fileImports = [...fileImports, markdownFile];
            blogPosts = [...blogPosts, blogPost];
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
