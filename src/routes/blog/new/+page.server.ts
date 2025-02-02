import { BlogController } from '$lib/blog/BlogController.js';
import type { Actions } from '@sveltejs/kit';
import { error, redirect } from '@sveltejs/kit';
import { dump as dumpYaml } from 'js-yaml';
import { resolve } from 'path';

export const prerender = false;
const thisDirectory = import.meta.url
    .replace('file://', '')
    .split('/')
    .filter((part) => part !== '+server.ts')
    .join('/');

export const actions = {
    default: async ({ getClientAddress, request }) => {
        console.log(`Received request to create new blog post.`);
        const address = await getClientAddress();
        let markdownContent: string;
        let title: string;
        let slug: string;
        let author: string;

        try {
            const requestBody = await request.formData();
            markdownContent = requestBody.get('content') as string;
            title = requestBody.get('title') as string;
            slug = requestBody.get('slug') as string;
            author = requestBody.get('author') as string;
        } catch (e: any) {
            console.log(`Caught error destructuring request body`);
            console.error(e);
            error(400, 'Error in request body.');
        }

        if ([markdownContent, title, slug, author].includes(undefined)) {
            error(400, `Missing parameters.`);
        } else if (!['127.0.0.1', '::1'].includes(address)) {
            console.log(address);
            error(403, `Forbidden.`);
        }

        const controller = await BlogController.singleton();

        const worryinglyManualFrontMatter = [`---`, dumpYaml({ title, date: new Date(), slug, author }), `---`].join(
            `\n`
        );

        const escapedMarkdown = markdownContent.replaceAll(/\\n/g, '\n');

        const contentWithFrontmatter = [worryinglyManualFrontMatter, escapedMarkdown].join(`\n`);

        const resolvedFileName = resolve(thisDirectory, `../../../../content/blog/${slug}.md`);

        console.log({ resolvedFileName });
        console.log(`\n${contentWithFrontmatter}\n`);

        await controller.createBlogPost(resolvedFileName, contentWithFrontmatter);

        redirect(307, `/blog/${slug}`);
    },
} satisfies Actions;
