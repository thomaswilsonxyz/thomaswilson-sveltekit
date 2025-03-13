import { describe, it, expect } from 'vitest';
import { MarkdownBuilder } from './markdown-builder.js';

const markdownBuilder = (tags: string[] | undefined = undefined): string => {
    let exampleMarkdown = [`---`, `title: "This is a title"`, `date: 2025-03-13T18:44:00Z`, `draft: false`];

    if (tags !== undefined) {
        exampleMarkdown = [...exampleMarkdown, `tags:`, ...tags.map((tag) => `  - ${tag}`)];
    }

    exampleMarkdown = [
        ...exampleMarkdown,
        `---`,
        `This is a title. This is a body.`,
        `This is an incredibly long new set`,
        `of words to read. I hope you`,
        `enjoy reading them. I hope you`,
        `enjoy reading them. I hope you`,
    ];

    return exampleMarkdown.join('\n');
};

describe(`MarkdownBuilder`, () => {
    const markdown = markdownBuilder();

    it(`should build an excerpt`, async () => {
        // WHEN
        const excerpt = await MarkdownBuilder.getExcerptFromMarkdown(markdown, 10);

        // THEN
        expect(excerpt).toBe(`This is a title. This is a body. This is`);
    });

    describe(`getFrontmatter`, () => {
        it(`should be able to identify the fields in front-matter`, () => {
            // WHEN
            const frontmatter = MarkdownBuilder.getFrontmatter<{ title: string; date: Date }>(markdown, 'test.md');

            // THEN
            expect(frontmatter).toStrictEqual({
                title: 'This is a title',
                date: new Date(`2025-03-13T18:44:00Z`),
                draft: false,
            });
        });
    });

    describe(`getTagsFromMarkdown`, () => {
        it(`should build the tags`, () => {
            // WHEN
            const tags = MarkdownBuilder.getTagsFromMarkdown<{ tags: string[] }>(
                markdownBuilder(['one-tag', 'another']),
                'test.md'
            );

            // THEN
            expect(tags).toStrictEqual(['one-tag', 'another']);
        });

        it(`should build when the tags are empty`, () => {
            // WHEN
            const tags = MarkdownBuilder.getTagsFromMarkdown<{ tags: string[] }>(markdownBuilder(), 'test.md');

            // THEN
            expect(tags).toStrictEqual([]);
        });

        it(`should build when there is no 'tags' field`, () => {
            // WHEN
            const tags = MarkdownBuilder.getTagsFromMarkdown<{ tags: string[] }>(markdownBuilder(), 'test.md');

            // THEN
            expect(tags).toStrictEqual([]);
        });
    });
});
