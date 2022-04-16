import type { Post } from './Post';
import { compile } from 'mdsvex';
import { getPostsFromGlobResult } from './getPostsFromGlobResult';
import remarkGfm from 'remark-gfm';

export const fetchBlogPostBySlug = async (slug: string): Promise<Post | null> => {
	const globResult = await import.meta.glob('../content/**/*.md');

	const allFiles = await getPostsFromGlobResult(globResult);

	const post = allFiles.find((post) => post.slug === slug);

	if (!post) {
		return null;
	}

	const compiles = await compile(post.html, { remarkPlugins: [remarkGfm] });

	console.log({ compiles, filename: post.filename });

	return {
		...post,
		html: compiles.code
	};
};
