import { describe, it, expect } from 'vitest';

import { SnoutStreetStudiosPost } from './SnoutStreetStudiosPost.js';
import { aSnoutStreetStudiosPost } from '$lib/blog/test-builders/snout-street-studios-post-builder.js';

describe('SnoutStreetStudiosPost', () => {
    it(`should construct`, () => {
        // WHEN
        const post = new SnoutStreetStudiosPost({
            title: 'the title',
            slug: 'the-slug',
            date: new Date('2023-09-02T06:58:00Z'),
            html: 'the html',
        });

        // THEN
        expect(post).toStrictEqual(
            aSnoutStreetStudiosPost()
                .withTitle('the title')
                .withSlug('the-slug')
                .withDate(new Date('2023-09-02T06:58:00Z'))
                .withHtml('the html')
                .build()
        );
    });
});
