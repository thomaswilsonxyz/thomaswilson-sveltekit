import type { Post } from './Post';
import { getPostsFromGlobResult } from './getPostsFromGlobResult';

export const fetchBlogPostBySlug = async (slug: string): Promise<Post | null> => {
	const globResult = await import.meta.glob('../content/**/*.md');

	const allFiles = await getPostsFromGlobResult(globResult);

	const post = allFiles.find((post) => post.slug === slug);

	if (!post) {
		return null;
	}

	return post;
};
