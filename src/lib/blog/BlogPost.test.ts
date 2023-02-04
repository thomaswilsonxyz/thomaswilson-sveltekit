import { describe, it, expect } from 'vitest';
import { BlogPost } from './BlogPost.js';

const exampleMarkdownWithFrontMatter = `---
title: "Test Blog Post"
date: 2023-02-01T08:00:00Z
slug: "2023-02-01-test"
---

This is the content of the blog post.

This is a [link](http://www.bbc.co.uk)

- This is a list item
- This is another list item
`;

describe('BlogPost', () => {
    it(`should construct`, () => {
        // GIVEN
        const blogPost = new BlogPost({ title: 'Test Title', markdownContent: 'Test Content' });

        // THEN
        expect(blogPost.title).toBe('Test Title');
        expect(blogPost.markdownContent).toBe('Test Content');
    });

    it(`Should parse markdown to HTML`, async () => {
        // GIVEN
        const blogPost = new BlogPost({ title: 'Test Title', markdownContent: exampleMarkdownWithFrontMatter });

        // WHEN
        const html = await blogPost.getHtml();

        // THEN
        expect(html).toStrictEqual(
            [
                `<p>This is the content of the blog post.</p>`,
                `<p>This is a <a href="http://www.bbc.co.uk">link</a></p>`,
                `<ul>`,
                `<li>This is a list item</li>`,
                `<li>This is another list item</li>`,
                `</ul>`,
            ].join(`\n`)
        );
    });
});
