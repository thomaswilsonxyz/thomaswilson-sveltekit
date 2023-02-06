import { describe, it, expect, beforeAll } from 'vitest';
import { MarkdownRepository } from './markdown-repository.js';

import { MarkdownFile } from './MarkdownFile.js';
import { aBlogPost } from './test-builders/blog-post-builder.js';

const blogPostImport = import.meta.glob(`./test-fixtures/blog-*.md`, { as: 'raw' });
const bookReviewImport = import.meta.glob(`./test-fixtures/book-review-*.md`, { as: 'raw' });

const testMarkdownContent = `---
title: "Test Blog Post"
author: "Thomas Wilson"
date: 2023-02-01T08:00:00Z
slug: "2023-02-01-test"
draft: false
---

This is a blog post written in markdown. 

This is a [link](http://www.bbc.co.uk) 
`;

describe(`Blog MarkdownRepository`, () => {
    it(`should load`, async () => {
        // GIVEN
        const repository = await MarkdownRepository.fromViteGlobImport(blogPostImport, bookReviewImport);

        const expectedBlogPost = await aBlogPost()
            .withAuthor('Thomas Wilson')
            .withDate(new Date('2023-02-01T08:00:00Z'))
            .withSlug('2023-02-01-test')
            .withTitle('Test Blog Post')
            .withMarkdownContent(testMarkdownContent)
            .constructAndThenBuild();

        // WHEN
        const blogPost = repository.blogPosts.getBlogPostWithTitle('Test Blog Post');

        // THEN
        expect(repository).toBeDefined();
        expect(blogPost).toStrictEqual(expectedBlogPost);
    });

    it(`should automatically build all the blog posts and book reviews`, async () => {
        // GIVEN
        const repository = await MarkdownRepository.fromViteGlobImport(blogPostImport, bookReviewImport);

        // WHEN/THEN
        expect(repository.blogPosts.blogPosts[0].html).not.toBeNull();
        expect(repository.bookReviews.bookReviews[0].html).not.toBeNull();
    });

    describe(`Finding by Slug`, () => {
        let repository: MarkdownRepository;

        beforeAll(async () => {
            repository = await MarkdownRepository.fromViteGlobImport(blogPostImport, bookReviewImport);
        });

        it(`should return null if there's neither a blog post nor a book review with the slug`, async () => {
            // WHEN
            const markdownFile = repository.getBlogPostBySlug('non-existent-slug');

            // THEN
            expect(markdownFile).toBeNull();
        });
    });
});
