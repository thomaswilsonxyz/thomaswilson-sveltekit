import { writeFile, unlink, existsSync } from "fs";

import { BlogPost } from "./BlogPost.js";
import { MarkdownFile } from "./MarkdownFile.js";
import { BlogPostSet } from "./BlogPostSet.js";
import { BookReviewSet } from "./BookReviewSet.js";
import { BookReview } from "./BookReview.js";

// We have to duplicate the `../..` here because import.meta must have a static string,
// and it (rightfully) cannot have dynamic locations
const blogPostMetaGlobImport = import.meta.glob(`../../content/blog/*.md`, {
  as: "raw",
});
const bookReviewsMetaGlobImport = import.meta.glob(
  `../../content/book-reviews/*.md`,
  { as: "raw" },
);

interface BlogPostFrontmatterValues {
  title: string;
  slug: string;
  date: Date;
  author: string;
  tags?: string[];
}

interface BookReviewFrontmatterValues {
  title: string;
  author: string; // Author of the book, not the review
  slug: string;
  date: Date;
  finished: Date;
  score: number;
  image: string;
}

export class MarkdownRepository {
  readonly blogPosts: BlogPostSet;
  readonly bookReviews: BookReviewSet;
  private static _singleton: MarkdownRepository;

  private constructor(blogPosts: BlogPost[], bookReviews: BookReview[]) {
    this.blogPosts = new BlogPostSet(blogPosts);
    this.bookReviews = new BookReviewSet(bookReviews);
  }

  public static async singleton(
    forceRefresh = false,
  ): Promise<MarkdownRepository> {
    if (forceRefresh || !this._singleton) {
      console.log(
        `[MarkdownRepository::singleton] Building MarkdownRepository singleton.`,
      );
      this._singleton = await MarkdownRepository.fromViteGlobImport(
        blogPostMetaGlobImport,
        bookReviewsMetaGlobImport,
      );
    }

    return this._singleton;
  }

  public static async fromViteGlobImport(
    blogGlobImport: any,
    bookReviewGlobImport: any,
  ): Promise<MarkdownRepository> {
    let fileImports: MarkdownFile<BlogPostFrontmatterValues>[] = [];
    let blogPosts: BlogPost[] = [];
    let bookReviews: BookReview[] = [];

    const blogPostFiles = Object.entries(blogGlobImport);

    for (const blogPostFile of blogPostFiles) {
      const [filename, module] = blogPostFile as [
        string,
        () => Promise<string>,
      ];
      try {
        const markdownFile =
          await MarkdownFile.build<BlogPostFrontmatterValues>(
            filename,
            await module(),
          );

        const blogPost = new BlogPost({
          excerpt: markdownFile.excerpt,
          html: markdownFile.html,
          title: markdownFile.frontmatter.title,
          slug: markdownFile.frontmatter.slug,
          author: markdownFile.frontmatter.author,
          date: markdownFile.frontmatter.date,
          fileName: filename,
          tags: markdownFile.frontmatter.tags ?? [],
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

    for (const bookReviewFile of Object.entries(bookReviewGlobImport)) {
      const [filename, module] = bookReviewFile as [
        string,
        () => Promise<string>,
      ];
      try {
        const markdownFile =
          await MarkdownFile.build<BookReviewFrontmatterValues>(
            filename,
            await module(),
          );

        const bookReview = new BookReview({
          author: markdownFile.frontmatter.author,
          title: markdownFile.frontmatter.title,
          slug: markdownFile.frontmatter.slug,
          date: markdownFile.frontmatter.date,
          draft: false,
          finished: markdownFile.frontmatter.finished,
          image: markdownFile.frontmatter.image,
          score: markdownFile.frontmatter.score,
          html: markdownFile.html,
        });

        bookReviews = [...bookReviews, bookReview];
      } catch (e) {
        console.error({
          message: `[MarkdownRespository::fromViteGlobImport] Error loading file ${filename}`,
          error: e,
        });
      }
    }

    console.log(
      `[MarkdownRepository::fromViteGlobImport] Loaded ${fileImports.length} files.`,
    );
    const repository = new MarkdownRepository(blogPosts, bookReviews);
    console.log(`[MarkdownRepository::fromViteGlobImport] Built all posts.`);
    return repository;
  }

  getBlogPostBySlug(slug: string): BlogPost | null {
    return (
      this.blogPosts.blogPosts.find((blogPost) => blogPost.slug === slug) ??
      null
    );
  }

  getBookReviewBySlug(slug: string): BookReview | null {
    return (
      this.bookReviews.bookReviews.find(
        (bookReview) => bookReview.slug === slug,
      ) ?? null
    );
  }

  async createBlogPostMarkdownFile(
    resolvedPath: string,
    contents: string,
  ): Promise<BlogPost> {
    return new Promise<void>((resolve, reject) => {
      writeFile(resolvedPath, contents, (err) => {
        if (err) {
          console.error({
            message: `createBlogPostMarkdownFile: Caught error while writing file ${resolvedPath}`,
            err,
            error: JSON.stringify(err),
          });
          reject(err);
        }

        resolve();
      });
    }).then(async () => {
      const markdownFile = await MarkdownFile.build<BlogPostFrontmatterValues>(
        resolvedPath,
        contents,
      );

      const blogPost = new BlogPost({
        html: markdownFile.html,
        excerpt: markdownFile.excerpt,
        title: markdownFile.frontmatter?.title ?? undefined,
        slug: markdownFile.frontmatter?.slug ?? undefined,
        author: markdownFile.frontmatter?.author ?? undefined,
        date: markdownFile.frontmatter?.date ?? undefined,
        fileName: resolvedPath,
        tags: [],
      });

      return blogPost;
    });
  }

  async deleteBlogPostMarkdownFile(resolvedFilePath: string): Promise<void> {
    const isPresent = existsSync(resolvedFilePath);

    if (!isPresent) {
      throw `Sausages File '${resolvedFilePath}' not found.`;
    }

    return new Promise((resolve, reject) => {
      unlink(resolvedFilePath, (err) => {
        if (err) {
          console.error({
            message: `deleteBlogPostMarkdownFile: Caught error while deleting file ${resolvedFilePath}`,
            err,
            error: JSON.stringify(err),
          });
          reject(err);
        }

        resolve();
      });
    });
  }
}
