import { SimplePasswordAuthenticator } from './simple-password-authenticator';

import { it, expect} from 'vitest'

it('should do nothing when things are valid', () => {
	// GIVEN
	const authenticator = new SimplePasswordAuthenticator('expected-password');

	// WHEN
	const result = authenticator.authenticate('expected-password');

	//
	expect(result).toBeTruthy();
})

it('should not authenticate when the password is invalid', () => {
// GIVEN
	const authenticator = new SimplePasswordAuthenticator('expected-password');

	// WHEN
	const result = authenticator.authenticate('invalid-password');

	// THEN
	expect(result).toBeFalsy();

})