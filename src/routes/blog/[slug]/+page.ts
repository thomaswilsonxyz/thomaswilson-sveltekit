import type { LoadEvent } from '@sveltejs/kit';
import type { Post } from '$lib/Post.js';

export async function load({ params, fetch }: LoadEvent): Promise<{ post: Post; date: Date }> {
    const { slug } = params;
    const { post } = await fetch(`/api/blog/${slug}.json`)
        .then((res) => res.json())
        .catch((error) => {
            console.error(error);
            return { post: null };
        });

    return {
        post,
        date: new Date(post.date),
    };
}
