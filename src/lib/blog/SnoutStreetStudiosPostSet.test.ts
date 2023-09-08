import { describe, it, expect } from 'vitest';
import { aSnoutStreetStudiosPost } from './test-builders/snout-street-studios-post-builder.js';
import { SnoutStreetStudiosPostSet } from './SnoutStreetStudiosPostSet.js';

describe(`SnoutStreetStudiosBlogPostSet`, () => {
    it(`Should contain a list of posts`, () => {
        // GIVEN
        const postOne = aSnoutStreetStudiosPost().withTitle('Post One').build();
        const postTwo = aSnoutStreetStudiosPost().withTitle('Post Two').build();

        // WHEN
        const postSet = new SnoutStreetStudiosPostSet([postOne, postTwo]);

        // THEN
        expect(postSet.posts).toStrictEqual([postOne, postTwo]);
    });
});
