import { json } from '@sveltejs/kit';
import wainwrights from '../../../content/wainwrights/wainwrights.json';

export const GET = async ({ url }) => {
	try {
		return json({
			wainwrights
		});
	} catch (error) {
		console.error({ error: JSON.stringify(error) });
		return json(
			{
				error: 'Could not fetch wainwrights' + error
			},
			{
				status: 500
			}
		);
	}
};
