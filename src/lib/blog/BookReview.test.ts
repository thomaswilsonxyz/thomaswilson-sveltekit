import { describe, it, expect } from 'vitest';

import { BookReview } from './BookReview.js';
import { aBookReview } from './test-builders/book-review-builder.js';

describe(`BookReview`, () => {
    it(`should construct`, () => {
        // GIVEN
        const bookReview = new BookReview({
            title: 'After',
            author: 'Dr Bruce Greyson',
            score: 3.5,
            image: 'after',
            slug: 'after',
            date: new Date('2021-05-05'),
            finished: new Date('2021-04-20'),
            draft: false,
        });

        // WHEN
        const expectedBookReview = aBookReview()
            .withTitle('After')
            .withAuthor('Dr Bruce Greyson')
            .withScore(3.5)
            .withImage('after')
            .withSlug('after')
            .withDate(new Date('2021-05-05'))
            .withFinished(new Date('2021-04-20'))
            .build();

        // THEN
        expect(bookReview).toEqual(expectedBookReview);
    });
});
