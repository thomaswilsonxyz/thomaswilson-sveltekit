import { resolve } from 'path';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { dump as dumpYaml } from 'js-yaml';

import { BlogController } from '../../../../lib/blog/BlogController.js';

const thisDirectory = import.meta.url
    .replace('file://', '')
    .split('/')
    .filter((part) => part !== '+server.ts')
    .join('/');

export const POST: RequestHandler = async ({ getClientAddress, request }) => {
    console.log(`Received request to create new blog post.`);
    const address = await getClientAddress();
    let fileName: string;
    let markdownContent: string;
    let title: string;
    let slug: string;
    let author: string;

    try {
        const requestBody = await request.json();
        fileName = requestBody.fileName;
        markdownContent = requestBody.markdownContent;
        title = requestBody.title;
        slug = requestBody.slug;
        author = requestBody.author;
    } catch (e: any) {
        console.log(`Caught error destructuring request body`);
        console.error(e);
        error(400, 'Error in request body.');
    }

    if ([fileName, markdownContent, title, slug, author].includes(undefined)) {
        error(400, `Missing parameters.`);
    } else if (!['127.0.0.1', '::1'].includes(address)) {
        console.log(address);
        error(403, `Forbidden.`);
    }

    const controller = await BlogController.singleton();

    const worryinglyManualFrontMatter = [`---`, dumpYaml({ title, date: new Date(), slug, author }), `---`].join(`\n`);
    const escapedMarkdown = markdownContent.replaceAll(/\\n/g, '\n');

    const contentWithFrontmatter = [worryinglyManualFrontMatter, escapedMarkdown].join(`\n`);

    const resolvedFileName = resolve(thisDirectory, `../../../../content/blog/${fileName}`);

    await controller.createBlogPost(resolvedFileName, contentWithFrontmatter);
    return json({ address });
};
