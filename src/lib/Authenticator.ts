export interface Authenticator {
	authenticate(password: string): boolean;
}