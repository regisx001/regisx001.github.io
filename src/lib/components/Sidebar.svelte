<script lang="ts">
	import { Activity } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import NeuralInterface from './NeuralInterface.svelte';
	import { TECH_STACK } from '$lib/data/tech-stack';
	import type { SystemLog } from '$lib/types';

	let { logs }: { logs: SystemLog[] } = $props();
</script>

<aside class="space-y-8">
	<!-- System Status Panel -->
	<div class="rounded border border-border bg-background p-4 font-mono text-xs">
		<h3 class="mb-2 flex items-center gap-2 border-b border-border pb-2 text-muted-foreground">
			<Activity size={14} /> SYSTEM_LOGS
		</h3>
		<ul class="relative max-h-48 space-y-2 overflow-hidden">
			{#each logs as log}
				<li class="flex gap-2 opacity-80">
					<span class="text-muted-foreground">[{log.timestamp}]</span>
					<span
						class={cn(
							log.type === 'success'
								? 'text-green-400'
								: log.type === 'info'
									? 'text-blue-400'
									: 'text-red-400'
						)}
					>
						{log.message}
					</span>
				</li>
			{/each}
			<div class="absolute bottom-0 h-12 w-full bg-linear-to-t from-background to-transparent"></div>
		</ul>
	</div>

	<!-- Neural Interface Chat -->
	<div id="contact" class="scroll-mt-20">
		<NeuralInterface />
	</div>

	<!-- Tech Stack Mini-Viz -->
	<div class="hidden rounded border border-border bg-card/30 p-4 lg:block">
		<h3 class="mb-4 font-mono text-sm text-muted-foreground">DEPENDENCIES</h3>
		<div class="flex flex-wrap gap-2">
			{#each TECH_STACK as tech}
				<span
					class="cursor-default rounded border border-border bg-background px-2 py-1 font-mono text-[10px] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
				>
					{tech}
				</span>
			{/each}
		</div>
	</div>
</aside>
