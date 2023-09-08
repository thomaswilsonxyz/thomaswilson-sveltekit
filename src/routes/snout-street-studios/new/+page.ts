import type { LoadEvent } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function load({ url }: LoadEvent) {
    if (url.hostname !== 'localhost') {
        return error(404, 'Not found');
    }

    return {};
}
