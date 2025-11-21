<script lang="ts">
	import { ChevronRight, AlertTriangle, CheckCircle2, Cpu } from '@lucide/svelte';
	import type { HistoryItem } from '$lib/types';
	import { WELCOME_MESSAGE } from '$lib/data/constants';
	
	let { history } = $props<{
		history: HistoryItem[];
	}>();
</script>

<div class="flex flex-col gap-2">
	<!-- Initial Welcome Message -->
	<div class="whitespace-pre-wrap text-matrix/80 mb-6 leading-relaxed text-sm md:text-base">
		{WELCOME_MESSAGE}
	</div>

	{#each history as item, index (index)}
		<div class="mb-1">
			{#if item.type === 'command'}
				<div class="flex items-center gap-2 opacity-70 mb-2 mt-4">
					<span class="text-warning text-sm">guest@portfolio</span>
					<span class="text-muted-foreground">:</span>
					<span class="text-blue-400 text-sm">{item.cwd || '~'}</span>
					<ChevronRight class="w-3 h-3 text-matrix" />
					<span class="text-foreground">{item.content}</span>
				</div>
			{:else}
				<div class="pl-0 md:pl-4">
					{#if item.type === 'error'}
						<div class="flex items-start gap-2 text-destructive bg-destructive/10 p-2 border-l-2 border-destructive">
							<AlertTriangle class="w-4 h-4 mt-0.5 shrink-0" />
							<span>{item.content}</span>
						</div>
					{:else if item.type === 'success'}
						<div class="flex items-center gap-2 text-matrix">
							<CheckCircle2 class="w-4 h-4" />
							<span>{item.content}</span>
						</div>
					{:else if item.type === 'ai'}
						<div class="border border-primary/30 bg-primary/10 p-4 rounded-br-lg rounded-bl-lg relative mt-2">
							<div class="absolute -top-3 left-4 bg-console px-2 text-xs text-primary flex items-center gap-1 uppercase tracking-widest border border-primary/30">
								<Cpu class="w-3 h-3" /> Neural Core
							</div>
							<div class="text-card-foreground prose prose-invert prose-sm max-w-none">
								{item.content}
							</div>
						</div>
					{:else if item.type === 'text' || item.type === 'info'}
						<div class="text-muted-foreground whitespace-pre-wrap leading-relaxed max-w-3xl">
							{item.content}
						</div>
					{:else if item.type === 'component'}
						<div class="w-full my-2">
							{@render item.content()}
						</div>
					{/if}
				</div>
			{/if}
		</div>
	{/each}
</div>
