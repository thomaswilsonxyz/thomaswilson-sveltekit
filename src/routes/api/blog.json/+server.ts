import { json } from '@sveltejs/kit';

import allPosts from '../../../content/posts.json';

export const GET = async ({ url }) => {
    try {
        const posts = Object.entries(allPosts).map(([key, value]) => ({
            ...value,
        }));

        const sortedBlogPosts = posts.sort((a, b) => {
            if (a.date > b.date) {
                return -1;
            }
            if (a.date < b.date) {
                return 1;
            }
            return 0;
        });

        return json({
            posts: sortedBlogPosts,
        });
    } catch (error) {
        console.error({ error: JSON.stringify(error) });
        return json(
            {
                error: 'Could not fetch posts. ' + error,
            },
            {
                status: 500,
            }
        );
    }
};
