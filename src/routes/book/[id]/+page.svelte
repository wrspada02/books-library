<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main class="p-10 bg-slate-300 h-screen flex items-center justify-center">
	<h1>Book {data.book_id}</h1>
</main>