import type { BlogPost } from '$lib/blog/BlogPost.js';
import { describe, it, beforeEach, expect } from 'vitest';
import { BlogController } from './BlogController.js';

describe(`BlogController`, () => {
    describe(`Getting all blog posts`, () => {
        let controller: BlogController;

        beforeEach(async () => {
            controller = await BlogController.singleton();
        });

        it(`should load blogs from the content folder`, async () => {
            // GIVEN
            const blogPosts = await controller.getAllBlogPosts();

            // WHEN
            const aKnownBlogPost = blogPosts.find((post) => post.title === 'Vibe Check #10');
            const aMadeUpBlogPost = blogPosts.find((post) => post.title === 'Some made up blog post');

            // then
            expect(aMadeUpBlogPost).toBeNull();
            expect(aKnownBlogPost).not.toBeNull();
        });
    });
});
