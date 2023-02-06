import type { LoadEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export async function load({ params }: LoadEvent) {
    const { slug } = params;
    // redirect to 404 if post not found
    throw redirect(307, `/blog/${slug}`);
}
