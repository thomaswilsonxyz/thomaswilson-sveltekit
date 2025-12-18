import { describe, it, expect, beforeAll, beforeEach } from "vitest";
import { MarkdownRepository } from "./markdown-repository.js";
import { resolve, dirname } from "path";

import { aBlogPost } from "./test-builders/blog-post-builder.js";

const blogPostImport = import.meta.glob(`./test-fixtures/blog-*.md`, {
  as: "raw",
});
const bookReviewImport = import.meta.glob(`./test-fixtures/book-review-*.md`, {
  as: "raw",
});
const snoutStreetPostImport = import.meta.glob(
  `./test-fixtures/snout-street-studio-*.md`,
  { as: "raw" },
);

const expectedHtml = `<p>This is a blog post written in markdown.</p>
<p>This is a <a href="http://www.bbc.co.uk">link</a></p>`;

describe(`Blog MarkdownRepository`, () => {
  let repository: MarkdownRepository;

  beforeEach(async () => {
    repository = await MarkdownRepository.fromViteGlobImport(
      blogPostImport,
      bookReviewImport,
    );
  });

  it(`should load`, async () => {
    // GIVEN
    const expectedBlogPost = aBlogPost()
      .withAuthor("Thomas Wilson")
      .withDate(new Date("2023-02-01T08:00:00Z"))
      .withSlug("2023-02-01-test")
      .withTitle("Test Blog Post")
      .withExcerpt("This is a blog post written in markdown. This is a link")
      .withHtml(expectedHtml)
      .withFileName("blog-2023-02-01-test.md")
      .build();

    // WHEN
    const blogPost =
      repository.blogPosts.getBlogPostWithTitle("Test Blog Post");

    // THEN
    expect(repository).toBeDefined();
    expect(blogPost).toStrictEqual(expectedBlogPost);
  });

  it(`should automatically build all the blog posts and book reviews`, async () => {
    // WHEN/THEN
    expect(repository.blogPosts.blogPosts[0].html).not.toBeNull();
    expect(repository.bookReviews.bookReviews[0].html).not.toBeNull();
  });

  describe(`Finding by Slug`, () => {
    it(`should return null if there's neither a blog post nor a book review with the slug`, async () => {
      // WHEN
      const markdownFile = repository.getBlogPostBySlug("non-existent-slug");

      // THEN
      expect(markdownFile).toBeNull();
    });
  });

  describe(`Deleting markdown files`, () => {
    let repository: MarkdownRepository;
    const currentDirectory = dirname(import.meta.url.replace("file://", ""));

    beforeAll(async () => {
      repository = await MarkdownRepository.fromViteGlobImport(
        blogPostImport,
        bookReviewImport,
        snoutStreetPostImport,
      );

      const resolvedPath = resolve(
        `${currentDirectory}/test-fixtures/test-file.md`,
      );
      await repository.createBlogPostMarkdownFile(resolvedPath, expectedHtml);
    });

    it(`should throw an error if it attempts to delete a blog post file which does not exist`, async () => {
      // GIVEN
      const theFileName = "non-existent-file.md";

      // WHEN/THEN
      expect(async () =>
        repository.deleteBlogPostMarkdownFile(theFileName),
      ).rejects.toThrowError(`File 'non-existent-file.md' not found.`);
    });

    it(`should successfully delete a file when it does exist`, async () => {
      // GIVEN
      const fileName = `${currentDirectory}/test-fixtures/test-file.md`;

      // WHEN
      await repository.deleteBlogPostMarkdownFile(fileName);
    });
  });
});
