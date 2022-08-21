import { json, type LoadEvent, error } from '@sveltejs/kit';
import { fetchBlogPostBySlug } from '$lib';

export const GET = async ({ params }: LoadEvent) => {
	const { slug } = params;

	const post = await fetchBlogPostBySlug(slug);

	if (!post) {
		throw error(404, `Could not find blog post with slug '${slug}'`);
	}

	return json({ post });
};
