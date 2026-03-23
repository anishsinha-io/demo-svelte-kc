import { writable } from 'svelte/store';
import { keycloak, initKeycloak } from '$lib/auth';
import { browser } from '$app/environment';

export const authenticated = writable(false);
export const userProfile = writable<Record<string, unknown> | null>(null);
export const token = writable<string | null>(null);

export async function setupAuth() {
	if (!browser) return;

	const isAuthenticated = await initKeycloak();
	authenticated.set(isAuthenticated ?? false);

	if (isAuthenticated) {
		userProfile.set(keycloak?.tokenParsed ?? null);
		token.set(keycloak?.token ?? null);
	}

	keycloak!.onTokenExpired = async () => {
		await keycloak?.updateToken(30);
		token.set(keycloak?.token ?? null);
	};
}
