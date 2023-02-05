import { describe, it, expect } from 'vitest';

import { BookReviewSet } from './BookReviewSet.js';
import { aBookReview } from './test-builders/book-review-builder.js';

describe(`BookReviewSet`, () => {
    it(`should construct`, () => {
        // GIVEN
        const bookReview = aBookReview().withTitle(`The title`).build();

        // WHEN
        const bookReviewSet = new BookReviewSet([bookReview]);

        // THEN
        expect(bookReviewSet.bookReviews).toStrictEqual([bookReview]);
    });
});
