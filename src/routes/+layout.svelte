<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	import { onMount } from 'svelte';
	import { setupAuth } from '$lib/stores/auth';

	onMount(async () => {
		await setupAuth();
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
