import type { BookReview } from './BookReview.js';

export class BookReviewSet {
    private _bookReviews: BookReview[] = [];

    constructor(bookReviews: BookReview[]) {
        this._bookReviews = bookReviews;
    }

    async buildAllBookReviews(): Promise<void> {
        const bookReviewPromises = this._bookReviews.map((bookReview) => bookReview.build());
        await Promise.all(bookReviewPromises);
    }

    get bookReviews(): BookReview[] {
        return this._bookReviews;
    }
}
