import type { Authenticator } from './Authenticator';

export class SimplePasswordAuthenticator implements Authenticator{
	constructor(private readonly password: string) {
		if (this.password === undefined) {
			throw new Error('Password must be defined');
		}
	}

	authenticate(password: string): boolean {
		return this.password === password;
	}
}