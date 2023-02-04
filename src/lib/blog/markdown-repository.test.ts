import { describe, it, expect } from 'vitest';
import { MarkdownRepository } from './markdown-repository.js';

import { MarkdownFile } from './MarkdownFile.js';
import { BlogPost } from './BlogPost.js';
import { aBlogPost } from './test-builders/blog-post-builder.js';

const globImport = import.meta.glob(`./test-fixtures/*.md`, { as: 'raw' });

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
        const repository = await MarkdownRepository.fromViteGlobImport(globImport);

        const expectedFile = new MarkdownFile({
            fileName: './test-fixtures/2023-02-01-test.md',
            content: testMarkdownContent,
        });

        const expectedBlogPost = aBlogPost()
            .withTitle('Test Blog Post')
            .withMarkdownContent(testMarkdownContent)
            .build();

        // WHEN
        const file = repository.getMarkdownFileForFileName('./test-fixtures/2023-02-01-test.md');
        const blogPost = repository.getBlogPostWithTitle('Test Blog Post');

        // THEN
        expect(repository).toBeDefined();
        expect(file).toStrictEqual(expectedFile);
        expect(blogPost).toStrictEqual(expectedBlogPost);
    });
});
