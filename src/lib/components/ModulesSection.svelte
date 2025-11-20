<script lang="ts">
	import { Layers } from '@lucide/svelte';
	import ModuleCard from './ModuleCard.svelte';
	import { PROJECTS } from '$lib/data/projects';
</script>

<section id="modules" class="scroll-mt-20 space-y-6">
	<div class="mb-6 flex items-center justify-between border-b border-border pb-2">
		<h2 class="flex items-center gap-2 font-mono text-2xl">
			<Layers size={20} class="text-muted-foreground" />
			INSTALLED_MODULES
		</h2>
		<span class="font-mono text-xs text-primary">STATUS: ONLINE</span>
	</div>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each PROJECTS as project}
			<ModuleCard {project} />
		{/each}
	</div>
</section>
