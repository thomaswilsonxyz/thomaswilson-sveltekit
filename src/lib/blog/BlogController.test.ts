import { describe, it, beforeEach, expect } from 'vitest';
import { BlogController } from './BlogController.js';

describe(`BlogController`, () => {
    describe(`Getting all blog posts and book reviews`, () => {
        let controller: BlogController;

        beforeEach(async () => {
            controller = await BlogController.singleton();
        });

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
});
