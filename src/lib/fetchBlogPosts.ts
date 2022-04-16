import { getPostsFromGlobResult } from './getPostsFromGlobResult';
import type { Post } from './Post';
export const fetchBlogPosts = async (): Promise<Post[]> => {
	const files = await import.meta.glob('../content/**/*.md');

	return await getPostsFromGlobResult(files);
};
