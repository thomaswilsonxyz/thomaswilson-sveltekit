interface BookReviewProps {
    title: string;
    author: string;
    score: number;
    image: string;
    slug: string;
    date: Date;
    finished: Date;
    draft: boolean;
}

export class BookReview {
    readonly title: string;
    readonly author: string;
    readonly score: number;
    readonly image: string;
    readonly slug: string;
    readonly date: Date;
    readonly finished: Date;

    constructor(props: BookReviewProps) {
        this.title = props.title;
        this.author = props.author;
        this.score = props.score;
        this.image = props.image;
        this.slug = props.slug;
        this.date = props.date;
        this.finished = props.finished;
    }
}
