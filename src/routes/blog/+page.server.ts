import { BlogController } from '$lib/blog/BlogController.js';
import type { Load } from '@sveltejs/kit';
import { differenceInCalendarDays, getYear } from 'date-fns';

export const prerender = true;

export const load: Load = async ({}) => {
    const controller = await BlogController.singleton();
    const posts = await controller.getAllBlogPosts();

    const currentYear = getYear(new Date());

    const numberOfPosts = posts.length;
    const firstPost = posts[numberOfPosts - 1];
    const numberOfBlogPostsThisYear: number = posts.filter(
        (post) => getYear(new Date(post.date)) === currentYear
    ).length;

    return {
        posts,
        firstPost,
        numberOfPosts,
        numberOfBlogPostsThisYear,
    };
};
