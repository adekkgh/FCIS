<script lang="ts">

	import { onMount } from 'svelte';
	import { tokenStore } from '$lib/stores/tokenStore';
	import { goto } from '$app/navigation';

	onMount(async () => {
		if (!$tokenStore || !$tokenStore.token || !$tokenStore.tokenType) {
			await goto('/');
		}
	});
</script>

{#if !$tokenStore.token || $tokenStore.tokenType !== 'access'}
	<div class="auth">

	</div>
{/if}