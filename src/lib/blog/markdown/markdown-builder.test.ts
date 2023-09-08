import { describe, it, expect } from 'vitest';
import { MarkdownBuilder } from './markdown-builder.js';

const exampleMarkdown = [
    `---`,
    `title: "This is a title"`,
    `---`,
    `This is a title. This is a body.`,
    `This is an incredibly long new set`,
    `of words to read. I hope you`,
    `enjoy reading them. I hope you`,
    `enjoy reading them. I hope you`,
].join('\n');

describe(`MarkdownBuilder`, () => {
    // const markdownBuilder = new MarkdownBuilder();

    it(`should build an excerpt`, async () => {
        // GIVEN
        const markdown = exampleMarkdown;

        // WHEN
        const excerpt = await MarkdownBuilder.getExcerptFromMarkdown(markdown, 10);

        // THEN
        expect(excerpt).toBe(`This is a title. This is a body. This is`);
    });
});
