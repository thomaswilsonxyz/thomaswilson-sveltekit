import type { Post } from './Post';
import { getPostsFromGlobResult } from './getPostsFromGlobResult';
import allPosts from '../content/posts.json'

export const fetchBlogPostBySlug = async (slug: string): Promise<Post | null> => {

	const post = allPosts[slug]

	if (!post) {
		return null;
	}

	return post;
};
