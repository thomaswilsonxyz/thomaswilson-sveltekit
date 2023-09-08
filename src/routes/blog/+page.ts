import type { LoadEvent } from '@sveltejs/kit';
import { differenceInCalendarDays, getYear } from 'date-fns';
export const prerender = true;

interface BlogPostListItem {
    title: string;
    author: string;
    book_review: boolean;
    content: string;
    date: string;
    preview: string;
    slug: string;
    content_type: 'blog' | 'book_review' | 'snout_street_studios';
}

export async function load({ fetch }: LoadEvent) {
    const posts: BlogPostListItem[] = await fetch('/api/blog.json')
        .then((res) => res.json())
        .then((res) => res.posts);

    const currentYear = getYear(new Date());
    console.log({ posts });
    const mostRecentPost = posts[0];
    console.log({ ...mostRecentPost });

    const daysSinceLastPublish = differenceInCalendarDays(new Date(), new Date(mostRecentPost.date));

    const numberOfPosts = posts.length;
    const firstPost = posts[numberOfPosts - 1];
    const daysSinceFirstPost = differenceInCalendarDays(new Date(), new Date(firstPost.date));
    const averageDaysBetweenPosts = Number(daysSinceFirstPost / numberOfPosts).toFixed(2);
    const numberOfBlogPostsThisYear: number = posts.filter(
        (post) => getYear(new Date(post.date)) === currentYear
    ).length;

    return {
        posts,
        firstPost,
        averageDaysBetweenPosts,
        daysSinceFirstPost,
        daysSinceLastPublish,
        numberOfPosts,
        numberOfBlogPostsThisYear,
    };
}
