import { describe, it, expect, beforeEach } from 'vitest';
import { BlogPost } from './BlogPost.js';
import { BlogPostSet } from './BlogPostSet.js';
import { aBlogPost } from './test-builders/blog-post-builder.js';
describe(`BlogPostSet`, () => {
    it(`Should contain a list of blog posts`, () => {
        // GIVEN
        const blogPostOne = aBlogPost().withTitle('Blog Post One').build();
        const blogPostTwo = aBlogPost().withTitle('Blog Post Two').build();

        // WHEN
        const blogPostSet = new BlogPostSet([blogPostOne, blogPostTwo]);

        // THEN
        expect(blogPostSet.blogPosts).toStrictEqual([blogPostOne, blogPostTwo]);
    });

    it(`Should be able to build all the blog posts`, async () => {
        // GIVEN
        const blogPostOne = aBlogPost().withTitle('Blog Post One').build();
        const blogPostTwo = aBlogPost().withTitle('Blog Post Two').build();
        const blogPostSet = new BlogPostSet([blogPostOne, blogPostTwo]);

        // WHEN
        await blogPostSet.buildAllBlogPosts();

        // THEN
        expect(blogPostSet.blogPosts.every((post) => post.hasBeenBuilt)).toBe(true);
    });

    describe(`Finding a blog post by title`, () => {
        const blogPostOne = aBlogPost().withTitle('Blog Post One').build();
        const blogPostTwo = aBlogPost().withTitle('Blog Post Two').build();
        let set: BlogPostSet;

        beforeEach(() => {
            set = new BlogPostSet([blogPostOne, blogPostTwo]);
        });

        it(`should return a true positive`, () => {
            expect(set.getBlogPostWithTitle(`Blog Post One`)).toStrictEqual(
                aBlogPost().withTitle('Blog Post One').build()
            );
        });

        it(`should return a true negative`, () => {
            expect(set.getBlogPostWithTitle(`Blog Post Three`)).toBeNull();
        });
    });
});
