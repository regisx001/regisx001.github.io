<script lang="ts">
	import type { CareerEntry } from '$lib/data/career';
	import { Briefcase, MapPin, Calendar } from '@lucide/svelte';
	import { cn } from '$lib/utils';

	let { entry }: { entry: CareerEntry } = $props();

	const typeColors = $derived({
		ml: 'border-accent/40 bg-accent/5',
		dev: 'border-primary/40 bg-primary/5',
		hybrid: 'border-purple-500/40 bg-purple-500/5'
	});

	const dotColors = $derived({
		ml: 'bg-accent',
		dev: 'bg-primary',
		hybrid: 'bg-purple-500'
	});
</script>

<div class="relative pl-8">
	<!-- Timeline Dot -->
	<div
		class={cn(
			'absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-background',
			dotColors[entry.type]
		)}
	></div>

	<!-- Timeline Line -->
	<div class="absolute bottom-0 left-[5px] top-8 w-0.5 bg-border"></div>

	<!-- Card Content -->
	<div class={cn('mb-8 rounded-lg border p-6 transition-all hover:border-primary/50', typeColors[entry.type])}>
		<!-- Header -->
		<div class="mb-4">
			<div class="mb-2 flex flex-wrap items-start justify-between gap-2">
				<h3 class="font-mono text-xl font-bold text-foreground">{entry.role}</h3>
				<span class="rounded border border-border bg-background px-2 py-1 font-mono text-xs text-muted-foreground">
					{entry.type.toUpperCase()}
				</span>
			</div>
			<div class="flex items-center gap-2 font-mono text-sm text-primary">
				<Briefcase size={14} />
				<span>{entry.company}</span>
			</div>
			<div class="mt-2 flex flex-wrap gap-4 font-mono text-xs text-muted-foreground">
				<span class="flex items-center gap-1">
					<Calendar size={12} />
					{entry.period}
				</span>
				<span class="flex items-center gap-1">
					<MapPin size={12} />
					{entry.location}
				</span>
			</div>
		</div>

		<!-- Description -->
		<p class="mb-4 text-sm leading-relaxed text-muted-foreground">
			{entry.description}
		</p>

		<!-- Achievements -->
		<div class="mb-4">
			<h4 class="mb-2 font-mono text-xs font-semibold text-foreground">KEY_ACHIEVEMENTS:</h4>
			<ul class="space-y-1">
				{#each entry.achievements as achievement}
					<li class="flex gap-2 text-sm text-muted-foreground">
						<span class="text-accent">▹</span>
						<span>{achievement}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Tech Stack -->
		<div>
			<h4 class="mb-2 font-mono text-xs font-semibold text-foreground">TECH_STACK:</h4>
			<div class="flex flex-wrap gap-2">
				{#each entry.tech as tech}
					<span
						class="rounded border border-border bg-background px-2 py-1 font-mono text-[10px] text-muted-foreground"
					>
						{tech}
					</span>
				{/each}
			</div>
		</div>
	</div>
</div>
