import { fetchBlogPostBySlug } from '$lib';
import type { LoadInput } from '@sveltejs/kit';

export const get = async ({ params }: LoadInput) => {
	const { slug } = params;

	const post = await fetchBlogPostBySlug(slug);

	if (!post) {
		return {
			status: 404,
			body: {}
		};
	}

	return {
		status: 200,
		body: { post }
	};
};
