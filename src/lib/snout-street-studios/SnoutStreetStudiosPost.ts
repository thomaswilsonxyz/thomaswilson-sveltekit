import { z } from 'zod';
import type { SnoutStreetStudiosPostDto } from './SnoutStreetStudiosPostDto.js';

const SnoutStreetStudiosPostProps = z.object({
    slug: z.string(),
    title: z.string(),
    date: z.date(),
    html: z.string(),
});

// Make a props type from the zod schema, where the values are non-optional.
type Props = z.infer<typeof SnoutStreetStudiosPostProps> & {
    excerpt: string;
    html: string;
};

export class SnoutStreetStudiosPost {
    public readonly slug: string;
    public readonly title: string;
    public readonly date: Date;
    public readonly html: string;
    public readonly excerpt: string;

    constructor(props: Props) {
        try {
            const { slug, title, date, html } = SnoutStreetStudiosPostProps.parse(props);
            this.slug = slug;
            this.title = title;
            this.date = date;
            this.html = html;
            this.excerpt = props.excerpt;
        } catch (error) {
            SnoutStreetStudiosPost.logAndThenThrowError(`Failed to construct post`, 'constructor', { props, error });
            throw error;
        }
    }

    private static logAndThenThrowError(errorMessage: string, contextName: string, ...args: any) {
        console.error({
            info: `Caught error in SnoutStreetStudiosPost::${contextName}`,
            errorMessage,
            ...args,
        });

        throw new Error(errorMessage);
    }

    public toJson(): string {
        const dto: SnoutStreetStudiosPostDto = {
            slug: this.slug,
            title: this.title,
            date: this.date,
            html: this.html,
            excerpt: this.excerpt,
        };

        return JSON.stringify(dto);
    }

    public static fromJson(json: string): SnoutStreetStudiosPost {
        try {
            JSON.parse(json);
        } catch {
            this.logAndThenThrowError('Failed to parse JSON', 'fromJson', { json });
        }

        try {
            const dto: SnoutStreetStudiosPostDto = JSON.parse(json);
            return new SnoutStreetStudiosPost(dto);
        } catch {
            this.logAndThenThrowError(`Failed to construct post from JSON`, 'fromJson', { json });
        }
    }
}
