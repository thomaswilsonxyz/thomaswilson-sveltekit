import { BlogController } from '$lib/blog/BlogController.js';
import type { Load } from '@sveltejs/kit';
import { differenceInCalendarDays, getYear } from 'date-fns';

/**
 * TODO: Return this to `true`, which will mean moving the `tag` searchParams from this route
 * to another, e.g. /blog/tagged/:tag, however in the interest of moving quickly, I'm leaving
 * it here for now. 2025-03-16
 */
export const prerender = false;

export const load: Load = async ({ params, url }) => {
    const controller = await BlogController.singleton();
    const tag = params['tag'];
    const posts = await controller.getBlogPostsByTags([tag]);

    const currentYear = getYear(new Date());
    console.log({ posts });
    const mostRecentPost = posts[0];

    const daysSinceLastPublish = differenceInCalendarDays(new Date(), new Date(mostRecentPost.date));

    const numberOfPosts = posts.length;
    const firstPost = posts[numberOfPosts - 1];
    const daysSinceFirstPost = differenceInCalendarDays(new Date(), new Date(firstPost.date));
    const averageDaysBetweenPosts = Number(daysSinceFirstPost / numberOfPosts).toFixed(2);
    const numberOfBlogPostsThisYear: number = posts.filter(
        (post) => getYear(new Date(post.date)) === currentYear
    ).length;

    return {
        tag,
        posts,
        firstPost,
        averageDaysBetweenPosts,
        daysSinceFirstPost,
        daysSinceLastPublish,
        numberOfPosts,
        numberOfBlogPostsThisYear,
    };
};
