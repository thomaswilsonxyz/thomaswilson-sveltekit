import type { LoadEvent } from '@sveltejs/kit';
import type { Wainwright } from './Wainwright.js';

export async function load({ fetch }: LoadEvent): Promise<{ wainwrights: Wainwright[] }> {
	const { wainwrights } = await fetch(`/api/wainwrights.json`)
		.then((res) => res.json())
		.catch((error) => {
			console.error(error);
			return { wainwrights: [] };
		});

	return {
		wainwrights
	};
}
