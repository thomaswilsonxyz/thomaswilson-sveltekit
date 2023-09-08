import type { SnoutStreetStudiosPost } from '$lib/snout-street-studios/SnoutStreetStudiosPost.js';

export class SnoutStreetStudiosPostSet {
    private readonly _posts: SnoutStreetStudiosPost[] = [];

    constructor(posts: SnoutStreetStudiosPost[]) {
        this._posts = posts;
    }

    public get posts(): SnoutStreetStudiosPost[] {
        return this._posts;
    }
}
