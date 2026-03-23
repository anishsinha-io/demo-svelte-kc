<script lang="ts">
	import { authenticated, userProfile, token } from '$lib/stores/auth';
	import { login, logout } from '$lib/auth';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

{#if $authenticated}
	<p>Welcome {$userProfile?.email}</p>
	<p>Token {$token}</p>
	<button onclick={logout}>Logout</button>
{:else}
	<button onclick={login}>Login</button>
{/if}
