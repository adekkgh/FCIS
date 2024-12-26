import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';

interface TokenStore {
	token: string;
	tokenType: string;
}

export const tokenStore: Writable<false | TokenStore> = writable(
	browser && {
		token: localStorage.getItem('token') ?? '',
		tokenType: localStorage.getItem('tokenType') ?? '',
	}
)

tokenStore.subscribe(newTokenStore => {
	if (!newTokenStore) {
		return;
	}

	localStorage.setItem('token', newTokenStore.token);
	localStorage.setItem('tokenType', newTokenStore.tokenType);
})