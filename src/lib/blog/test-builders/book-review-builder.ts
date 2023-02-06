import { BookReview } from '../BookReview.js';

class BookReviewBuilder {
    private title = 'default title';
    private author = 'default author';
    private date = new Date();
    private draft = false;
    private finished = new Date();
    private image = 'default image';
    private score = 0;
    private slug = 'default slug';
    private markdownContent = 'default markdown content';

    withTitle(title: string): BookReviewBuilder {
        this.title = title;
        return this;
    }

    withAuthor(author: string): BookReviewBuilder {
        this.author = author;
        return this;
    }

    withDate(date: Date): BookReviewBuilder {
        this.date = date;
        return this;
    }

    withDraft(draft: boolean): BookReviewBuilder {
        this.draft = draft;
        return this;
    }

    withFinished(finished: Date): BookReviewBuilder {
        this.finished = finished;
        return this;
    }

    withImage(image: string): BookReviewBuilder {
        this.image = image;
        return this;
    }

    withScore(score: number): BookReviewBuilder {
        this.score = score;
        return this;
    }

    withSlug(slug: string): BookReviewBuilder {
        this.slug = slug;
        return this;
    }

    withMarkdownContent(markdownContent: string): BookReviewBuilder {
        this.markdownContent = markdownContent;
        return this;
    }

    build(): BookReview {
        return new BookReview({
            title: this.title,
            author: this.author,
            date: this.date,
            draft: this.draft,
            finished: this.finished,
            image: this.image,
            score: this.score,
            slug: this.slug,
            markdownContent: this.markdownContent,
        });
    }
}

export function aBookReview(): BookReviewBuilder {
    return new BookReviewBuilder();
}
