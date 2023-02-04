import { describe, it, expect } from 'vitest';
import { MarkdownFile } from './MarkdownFile.js';

const exampleMarkdownWithFrontMatter = `---
title: "Test Blog Post"
date: 2023-02-01T08:00:00Z
slug: "2023-02-01-test"
---

This is the content of the blog post.
`;

describe(`MarkdownFile`, () => {
    it(`should construct`, () => {
        // GIVEN
        const fileName = 'example.md';
        const content = 'This is a test';

        // WHEN
        const markdownFile = new MarkdownFile({ fileName, content });

        // THEN
        expect(markdownFile.fileName).toBe(fileName);
        expect(markdownFile.content).toBe(content);
    });

    it(`Should get the front matter`, () => {
        // GIVEN
        const fileName = 'example.md';
        const content = exampleMarkdownWithFrontMatter;

        // WHEN
        const markdownFile = new MarkdownFile({ fileName, content });

        // THEN
        expect(markdownFile.frontmatter).toStrictEqual({
            title: 'Test Blog Post',
            date: new Date('2023-02-01T08:00:00Z'),
            slug: '2023-02-01-test',
        });
    });
});
