import { fetchBlogPosts } from '$lib/fetchBlogPosts';
import sanitise from 'sanitize-html';

export const get = async ({ url }) => {
	try {
		const posts = await fetchBlogPosts();

		const sortedBlogPosts = posts.sort((a, b) => {
			if (a.date > b.date) {
				return -1;
			}
			if (a.date < b.date) {
				return 1;
			}
			return 0;
		});

		const withCleanHtml = sortedBlogPosts.map((post) => {
			return {
				...post,
				html: sanitise(post.html, {
					allowedTags: []
				})
			};
		});

		return {
			status: 200,
			body: {
				posts: withCleanHtml
			}
		};
	} catch (error) {
		console.error({ error: JSON.stringify(error) });
		return {
			status: 500,
			body: {
				error: 'Could not fetch posts. ' + error
			}
		};
	}
};
