import { BookReview } from './BookReview.js';

export class BookReviewSet {
    private _bookReviews: BookReview[] = [];

    constructor(bookReviews: BookReview[]) {
        this._bookReviews = bookReviews;
    }

    get bookReviews(): BookReview[] {
        return this._bookReviews;
    }
}
