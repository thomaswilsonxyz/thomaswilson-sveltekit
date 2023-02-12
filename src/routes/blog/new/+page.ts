import type { LoadEvent } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function load({ route, url }: LoadEvent) {
    console.log({ route, url });

    if (url.hostname !== 'localhost') {
        return error(404, 'Not found');
    }

    return {};
}
