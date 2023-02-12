import { describe, it, beforeEach, beforeAll, expect, afterEach } from 'vitest';
import { BlogController } from './BlogController.js';
import { MarkdownRepository } from './markdown-repository.js';

describe(`BlogController`, () => {
    let controller: BlogController;

    beforeEach(async () => {
        controller = await BlogController.singleton();
    });

    describe(`Getting all blog posts and book reviews`, () => {
        it(`should load blogs from the content folder`, async () => {
            // GIVEN
            const blogPosts = await controller.getAllBlogPosts();

            // WHEN
            const aKnownBlogPost = blogPosts.find((post) => post.title === 'Vibe Check #10');
            const aKnownBookReview = blogPosts.find((post) => post.title === 'After');
            const aMadeUpBlogPost = blogPosts.find((post) => post.title === 'Some made up blog post');

            // then
            expect(aMadeUpBlogPost).toBeUndefined();
            expect(aKnownBlogPost).not.toBeUndefined();
            expect(aKnownBookReview).not.toBeUndefined();
        });
    });

    describe(`Finding a blog post or book review by slug`, () => {
        describe(`Finding a blog post`, () => {
            // GIVEN
            const slugForRealBlogPost = '2023-02-03-vibe-check-10';
            const slugForFakeBlogPost = 'some-made-up-blog-post';

            it(`should return null if there's no blog post with the slug`, async () => {
                // WHEN
                const blogPost = await controller.getBlogOrBookReviewBySlug(slugForFakeBlogPost);

                // THEN
                expect(blogPost).toBeNull();
            });

            it(`should return the blog post if it exists`, async () => {
                // WHEN
                const blogPost = await controller.getBlogOrBookReviewBySlug(slugForRealBlogPost);

                // THEN
                expect(blogPost).not.toBeNull();
                expect(blogPost.title).toBe('Vibe Check #10');
            });
        });

        describe(`Finding a book review`, () => {
            const realSlug = 'after';
            const fakeSlug = 'some-made-up-book-review';

            it(`should return null if there's no book review with the slug`, async () => {
                // WHEN
                const bookReview = await controller.getBlogOrBookReviewBySlug(fakeSlug);

                // THEN
                expect(bookReview).toBeNull();
            });

            it(`should return the book review if it exists`, async () => {
                // WHEN
                const bookReview = await controller.getBlogOrBookReviewBySlug(realSlug);

                // THEN
                expect(bookReview).not.toBeNull();
                expect(bookReview.title).toBe('After');
            });
        });
    });

    describe(`Creating a new blog post as a file`, () => {
        let fileName: string;
        let controller: BlogController;

        beforeEach(async () => {
            fileName = 'some-made-up-blog-post.md';
            controller = await BlogController.singleton();
        });

        afterEach(async () => {
            await controller.markdownRepository.deleteBlogPostFile(fileName);
        });
    });
});
