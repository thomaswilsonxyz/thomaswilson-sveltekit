import type { LoadEvent } from '@sveltejs/kit'

export const GET = async (_event: LoadEvent) => {
    return Promise.resolve({
        status: 200,
        body: {
            photos: [],
        },
    })
}
