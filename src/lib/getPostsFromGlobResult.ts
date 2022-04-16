import type { Post } from './Post';

export async function getPostsFromGlobResult(result: Record<string, any>): Promise<Post[]> {
	const allPosts: Array<Post | null> = await Promise.all(
		Object.entries(result).map(async ([filename, resolver]) => {
			try {
				const {
					metadata,
					default: { render, $$render, ...rest }
				} = await resolver();
				const { html } = render();
				const { date, ...data } = metadata;
				return {
					...data,
					html,
					date: new Date(date),
					filename
				};
			} catch (e) {
				return null;
			}
		})
	);

	return allPosts.filter((post) => post !== null) as Post[];
}
