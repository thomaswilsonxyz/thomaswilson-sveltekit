import { SnoutStreetStudiosPost } from '$lib/snout-street-studios/SnoutStreetStudiosPost.js';

class SnoutStreetStudiosPostBuilder {
    private slug = 'the-default-slug';
    private title = 'the-default-title';
    private date = new Date('2000-01-01');
    private html = 'the-default-html';
    private excerpt = 'the-default-excerpt';

    public withSlug(slug: string): SnoutStreetStudiosPostBuilder {
        this.slug = slug;
        return this;
    }

    public withTitle(title: string): SnoutStreetStudiosPostBuilder {
        this.title = title;
        return this;
    }

    public withDate(date: Date): SnoutStreetStudiosPostBuilder {
        this.date = date;
        return this;
    }

    public withHtml(html: string): SnoutStreetStudiosPostBuilder {
        this.html = html;
        return this;
    }

    public withExcerpt(excerpt: string): SnoutStreetStudiosPostBuilder {
        this.excerpt = excerpt;
        return this;
    }

    build(): SnoutStreetStudiosPost {
        return new SnoutStreetStudiosPost({
            slug: this.slug,
            title: this.title,
            date: this.date,
            html: this.html,
            excerpt: this.excerpt,
        });
    }
}

export function aSnoutStreetStudiosPost(): SnoutStreetStudiosPostBuilder {
    return new SnoutStreetStudiosPostBuilder();
}
