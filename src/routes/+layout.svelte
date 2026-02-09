<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import "bootstrap-icons/font/bootstrap-icons.css";
	import "@tabler/core/dist/css/tabler.min.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="container-fluid">
	{@render children()}
</main>
