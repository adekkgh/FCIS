<script lang="ts">
	import './layout.scss';
	import Header from '$lib/components/header/Header.svelte';
</script>

<Header />
<div class="main-layout">
	<slot />
</div>