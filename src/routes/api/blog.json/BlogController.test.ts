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

            // then
            expect(blogPosts.getBlogPostWithTitle('Vibe Check #10')).toBeDefined();
        });
    });
});
