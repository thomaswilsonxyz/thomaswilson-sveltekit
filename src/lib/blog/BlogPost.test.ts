import { describe, it, expect } from 'vitest';
import { BlogPost } from './BlogPost.js';
import { aBlogPost } from './test-builders/blog-post-builder.js';

const exampleMarkdownWithFrontMatter = `---
title: "Test Blog Post"
date: 2023-02-01T08:00:00Z
slug: "2023-02-01-test"
author: Thomas Wilson
---

This is the content of the blog post.

<h2 id="known-id">This is a heading</h2>

This is a [link](http://www.bbc.co.uk).

- This is a list item
- This is another list item
`;

describe('BlogPost', () => {
    describe(`Constructing`, () => {
        it(`should construct`, async () => {
            // GIVEN
            const blogPost = new BlogPost({
                title: 'Test Title',
                author: 'Test Author',
                date: new Date('2022-01-01T00:00Z'),
                slug: 'test-slug',
                markdownContent: 'Test Content',
                fileName: `the-file-name.md`,
            });

            // WHEN
            await blogPost.build();

            // THEN
            const expectedBlogPost = await aBlogPost()
                .withTitle('Test Title')
                .withAuthor('Test Author')
                .withDate(new Date('2022-01-01T00:00Z'))
                .withSlug('test-slug')
                .withMarkdownContent('Test Content')
                .withFileName(`the-file-name.md`)
                .constructAndThenBuild();

            expect(blogPost).toStrictEqual(expectedBlogPost);
            expect(blogPost.html).toBeDefined();
            expect(blogPost.excerpt).toBeDefined();
        });
    });

    describe(`Building the blog post`, () => {
        it(`should know if a blog post has been built`, () => {
            // GIVEN
            const blogPost = aBlogPost().build();

            // WHEN
            const hasBeenBuilt = blogPost.hasBeenBuilt;

            // THEN
            expect(hasBeenBuilt).toBe(false);
            expect(blogPost.html).toBeNull();
            expect(blogPost.excerpt).toBeNull();
        });

        it(`should know if a blog post has been built`, async () => {
            // GIVEN
            const blogPost = aBlogPost().build();

            // WHEN
            await blogPost.build();

            // THEN
            expect(blogPost.hasBeenBuilt).toBe(true);
            expect(blogPost.html).toBeDefined();
            expect(blogPost.excerpt).toBeDefined();
        });
    });

    it(`Should parse markdown to HTML`, async () => {
        // GIVEN
        const blogPost = await aBlogPost().withMarkdownContent(exampleMarkdownWithFrontMatter).constructAndThenBuild();

        // WHEN
        const html = blogPost.html;

        // THEN
        expect(html).toStrictEqual(
            [
                `<p>This is the content of the blog post.</p>`,
                `\<h2 id="known-id">This is a heading</h2>`,
                `<p>This is a <a href="http://www.bbc.co.uk">link</a>.</p>`,
                `<ul>`,
                `<li>This is a list item</li>`,
                `<li>This is another list item</li>`,
                `</ul>`,
            ].join(`\n`)
        );
    });

    it(`should have a plain-text excerpt`, async () => {
        // GIVEN
        const blogPost = await aBlogPost().withMarkdownContent(exampleMarkdownWithFrontMatter).constructAndThenBuild();

        // WHEN
        const excerpt = await blogPost.getExcerpt();

        // THEN
        expect(excerpt).toBe('This is the content of the blog post. This is a link.');
    });
});
