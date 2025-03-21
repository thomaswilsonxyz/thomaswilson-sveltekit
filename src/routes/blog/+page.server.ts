import { BlogController } from '$lib/blog/BlogController.js';
import type { Load } from '@sveltejs/kit';
import { differenceInCalendarDays, getYear } from 'date-fns';

export const prerender = true;

export const load: Load = async ({ params, url }) => {
    const controller = await BlogController.singleton();
    const posts = await controller.getAllBlogPosts();

    const currentYear = getYear(new Date());
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
        posts,
        firstPost,
        averageDaysBetweenPosts,
        daysSinceFirstPost,
        daysSinceLastPublish,
        numberOfPosts,
        numberOfBlogPostsThisYear,
    };
};
