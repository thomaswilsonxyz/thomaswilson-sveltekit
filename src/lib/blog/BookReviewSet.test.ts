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

    it(`should build all the HTML contents`, async () => {
        // GIVEN
        const bookReview = aBookReview().withTitle(`The title`).withHtml('test').build();
        const anotherBookReview = aBookReview().withTitle(`Another title`).withHtml('test').build();
        const bookReviewSet = new BookReviewSet([bookReview, anotherBookReview]);

        // WHEN
        await bookReviewSet.buildAllBookReviews();

        // THEN
        expect(bookReview.html).not.toBeNull();
        expect(anotherBookReview.html).not.toBeNull();
    });
});
