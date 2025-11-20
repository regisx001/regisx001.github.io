<script lang="ts">
	import { Briefcase } from '@lucide/svelte';
	import CareerTimeline from './CareerTimeline.svelte';
	import { CAREER_DATA } from '$lib/data/career';
</script>

<section id="career" class="scroll-mt-20 space-y-6">
	<div class="mb-6 flex items-center justify-between border-b border-border pb-2">
		<h2 class="flex items-center gap-2 font-mono text-2xl">
			<Briefcase size={20} class="text-muted-foreground" />
			CAREER_TIMELINE
		</h2>
		<span class="font-mono text-xs text-accent">EXPERIENCE: {CAREER_DATA.length} ROLES</span>
	</div>
	<div class="space-y-0">
		{#each CAREER_DATA as entry}
			<CareerTimeline {entry} />
		{/each}
	</div>
</section>
