import { describe, it, expect } from 'vitest';
import { BlogPost } from './BlogPost.js';
import { aBlogPost } from './test-builders/blog-post-builder.js';

describe('BlogPost', () => {
    describe(`Constructing`, () => {
        it(`should construct`, async () => {
            // GIVEN
            const blogPost = new BlogPost({
                title: 'Test Title',
                author: 'Test Author',
                date: new Date('2022-01-01T00:00Z'),
                slug: 'test-slug',
                fileName: `the-file-name.md`,
                html: 'Test Content',
                excerpt: 'Test Excerpt',
                tags: [],
            });

            // THEN
            const expectedBlogPost = await aBlogPost()
                .withTitle('Test Title')
                .withAuthor('Test Author')
                .withDate(new Date('2022-01-01T00:00Z'))
                .withSlug('test-slug')
                .withHtml('Test Content')
                .withExcerpt('Test Excerpt')
                .withFileName(`the-file-name.md`)
                .withEmptyTags()
                .build();

            expect(blogPost).toStrictEqual(expectedBlogPost);
            expect(blogPost.html).toBeDefined();
            expect(blogPost.excerpt).toBeDefined();
        });
    });
});
