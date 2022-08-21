import type { LoadEvent, Load, Page } from '@sveltejs/kit';
import { differenceInCalendarDays, intlFormat } from 'date-fns';
export const prerender = true;

type BlogPost = {
	filename: string;
	preview: string[];
	title: string;
	slug: string;
	date: Date;
	book_review?: boolean;
};

export async function load({ fetch }: LoadEvent) {
	const posts = await fetch('/api/blog.json')
		.then((res) => res.json())
		.then((res) => res.posts);

	const mostRecentPost = posts[0];

	const daysSinceLastPublish = differenceInCalendarDays(new Date(), new Date(mostRecentPost.date));

	const numberOfPosts = posts.length;
	const firstPost = posts[numberOfPosts - 1];
	const daysSinceFirstPost = differenceInCalendarDays(new Date(), new Date(firstPost.date));
	const averageDaysBetweenPosts = Number(daysSinceFirstPost / numberOfPosts).toFixed(2);

	return {
		posts,
		firstPost,
		averageDaysBetweenPosts,
		daysSinceFirstPost,
		daysSinceLastPublish,
		numberOfPosts
	};
}
