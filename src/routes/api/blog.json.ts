import allPosts from '../../content/posts.json';

export const get = async ({ url }) => {
	try {
		const posts = Object.entries(allPosts).map(([key, value]) => ({
			...value
		}));

		const sortedBlogPosts = posts.sort((a, b) => {
			if (a.date > b.date) {
				return -1;
			}
			if (a.date < b.date) {
				return 1;
			}
			return 0;
		});

		return {
			status: 200,
			body: {
				posts: sortedBlogPosts
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
