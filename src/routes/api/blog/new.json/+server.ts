import { resolve } from 'path';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { BlogController } from '../../../../lib/blog/BlogController.js';
import { dump as dumpYaml } from 'js-yaml';

const thisDirectory = import.meta.url
    .replace('file://', '')
    .split('/')
    .filter((part) => part !== '+server.ts')
    .join('/');

export const POST: RequestHandler = async ({ getClientAddress, request }) => {
    const address = await getClientAddress();
    let fileName: string;
    let markdownContent: string;
    let title: string;
    let date: string;
    let slug: string;
    let author: string;

    try {
        const requestBody = await request.json();
        fileName = requestBody.fileName;
        markdownContent = requestBody.markdownContent;
        title = requestBody.title;
        date = requestBody.date;
        slug = requestBody.slug;
        author = requestBody.author;
    } catch (e: any) {
        console.log(`Caught error destructuring request body`);
        console.error(e);
        throw error(400, 'Error in request body.');
    }

    if ([fileName, markdownContent, title, date, slug, author].includes(undefined)) {
        throw error(400, `Missing parameters.`);
    } else if (address !== '127.0.0.1') {
        throw error(403, `Forbidden.`);
    }

    const controller = await BlogController.singleton();

    const worryinglyManualFrontMatter = [`---`, dumpYaml({ title, date: new Date(date), slug, author }), `---`].join(
        `\n`
    );
    const escapedMarkdown = markdownContent.replaceAll(/\\n/g, '\n');

    const contentWithFrontmatter = [worryinglyManualFrontMatter, escapedMarkdown].join(`\n`);

    const resolvedFileName = resolve(thisDirectory, `../../../../content/blog/${fileName}`);

    await controller.createBlogPost(resolvedFileName, contentWithFrontmatter);
    console.log({ address });
    return json({ address });
};
