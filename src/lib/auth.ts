import Keycloak from 'keycloak-js';
import { browser } from '$app/environment';

export const keycloak = browser
	? new Keycloak({
			url: 'https://idp2.dichromatic.com',
			realm: 'checkology',
			clientId: 'mercury-client'
		})
	: null;

export async function initKeycloak() {
	const authenticated = await keycloak?.init({
		onLoad: 'check-sso',
		silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
		pkceMethod: 'S256'
	});
	return authenticated;
}

export function login() {
	keycloak?.login();
}

export function logout() {
	keycloak?.logout({ redirectUri: window.location.origin });
}
