interface BlogPostParams {
    title: string;
    date: Date;
    author: string;
    slug: string;
    fileName: string; // excluding any leading `..`
    html: string;
    excerpt: string;
}

export class BlogPost {
    readonly title: string;
    readonly date: Date;
    readonly author: string;
    readonly slug: string;
    readonly fileName: string;
    public readonly html: string;
    public readonly excerpt: string;

    constructor(params: BlogPostParams) {
        this.title = params.title;
        this.date = params.date;
        this.author = params.author;
        this.slug = params.slug;
        this.fileName = params.fileName.split(`/`)[-1];
        this.html = params.html;
        this.excerpt = params.excerpt;
    }
}
