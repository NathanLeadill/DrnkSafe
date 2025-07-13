<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>
<Header />
		{@render children()}

<style>
</style>
