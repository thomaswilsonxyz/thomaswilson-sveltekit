import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';
import { type DailyPhoto } from '../api/sunrise-sunset-photo.json/SunriseSunsetController.js';

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch('/api/sunrise-sunset-photo.json');

    if (response.ok) {
        const json: DailyPhoto = await response.json();
        return {
            status: 200,
            body: json as DailyPhoto,
        };
    }

    error(500, 'Failed to fetch sunrise-sunset photo');
};
