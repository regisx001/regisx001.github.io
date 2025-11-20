<script lang="ts">
	import type { Project } from '$lib/types';
	import { Activity, Code2 } from '@lucide/svelte';
	import { cn } from '$lib/utils';

	let { project, class: className }: { project: Project; class?: string } = $props();

	const isML = $derived(project.type === 'ml');
	const isDev = $derived(project.type === 'dev');

	const accentColor = $derived(
		isML ? 'text-accent border-accent' : isDev ? 'text-primary border-primary' : 'text-purple-400 border-purple-400'
	);

	const shadowClass = $derived(
		isML
			? 'hover:shadow-[0_0_15px_hsl(var(--accent)/0.2)]'
			: 'hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)]'
	);
</script>

<div
	class={cn(
		'group relative border border-l-4 border-border bg-card p-6 transition-all duration-300',
		isML ? 'hover:border-l-accent' : 'hover:border-l-primary',
		shadowClass,
		className
	)}
>
	<!-- Tech Decoration -->
	<div class="absolute right-2 top-2 flex gap-1 opacity-30">
		<div class="h-1 w-1 rounded-full bg-current"></div>
		<div class="h-1 w-1 rounded-full bg-current"></div>
	</div>

	<div class="mb-4 flex items-start justify-between">
		<h3
			class="text-xl font-bold text-foreground transition-colors group-hover:text-foreground font-mono tracking-wide"
		>
			{project.title}
		</h3>
		<span class={cn('rounded border bg-black/10 px-2 py-1 text-xs font-mono', accentColor)}>
			{project.status.toUpperCase()}
		</span>
	</div>

	<p class="mb-6 text-sm font-light leading-relaxed text-muted-foreground">
		{project.description}
	</p>

	<div class="mb-4 flex flex-wrap gap-2">
		{#each project.tech as tech}
			<span
				class="border border-border bg-background px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
			>
				{tech}
			</span>
		{/each}
	</div>

	<div class={cn('flex items-center gap-2 font-mono text-xs', isML ? 'text-accent' : 'text-primary')}>
		{#if isML}
			<Activity size={14} />
		{:else}
			<Code2 size={14} />
		{/if}
		<span>METRIC: {project.metrics}</span>
	</div>

	<!-- Interactive overlay effect -->
	<div
		class="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-foreground/5 to-transparent transition-transform duration-700 group-hover:translate-x-full"
	></div>
</div>


