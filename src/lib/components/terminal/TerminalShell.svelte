<script lang="ts">
	import { onMount, tick } from 'svelte';
	import type { HistoryItem } from '$lib/types';
	import OutputLog from './OutputLog.svelte';
	import PromptLine from './PromptLine.svelte';
	
	let {
		history,
		onCommand,
		cwd = '~',
		isProcessing = false
	} = $props<{
		history: HistoryItem[];
		onCommand: (command: string) => void;
		cwd?: string;
		isProcessing?: boolean;
	}>();
	
	let contentRef: HTMLDivElement;
	let terminalRef: HTMLDivElement;
	
	async function scrollToBottom() {
		await tick();
		if (contentRef) {
			contentRef.scrollTop = contentRef.scrollHeight;
		}
	}
	
	function handleTerminalClick(e: MouseEvent) {
		// Only focus if not selecting text
		const selection = window.getSelection();
		if (selection && selection.toString().length > 0) {
			return; // User is selecting text, don't focus
		}
		
		// Focus on the input when clicking anywhere in the terminal
		const input = terminalRef?.querySelector('input');
		input?.focus();
	}
	
	function handleKeyPress(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			const selection = window.getSelection();
			if (selection && selection.toString().length > 0) {
				return; // User has text selected
			}
			handleTerminalClick(e as any);
		}
	}
	
	$effect(() => {
		// Watch history changes, scroll, and refocus input
		history;
		scrollToBottom().then(() => {
			// Refocus input after scroll completes
			const input = terminalRef?.querySelector('input[type="text"]');
			if (input && !isProcessing) {
				(input as HTMLInputElement).focus();
			}
		});
	});
	
	onMount(() => {
		scrollToBottom();
		// Focus input on initial mount
		const input = terminalRef?.querySelector('input[type="text"]');
		if (input) {
			(input as HTMLInputElement).focus();
		}
	});
</script>

<div
	bind:this={terminalRef}
	class="w-full h-full flex flex-col bg-console overflow-hidden rounded-lg shadow-2xl"
	onclick={handleTerminalClick}
	onkeypress={handleKeyPress}
	role="button"
	tabindex="-1"
>
	<!-- Title Bar -->
	<div class="h-8 shrink-0 bg-graphite border-b border-border flex items-center justify-between px-4 select-none">
		<div class="flex items-center gap-2">
			<div class="w-3 h-3 rounded-full bg-destructive"></div>
			<div class="w-3 h-3 rounded-full bg-warning"></div>
			<div class="w-3 h-3 rounded-full bg-primary"></div>
		</div>
		<div class="text-xs text-muted-foreground uppercase tracking-widest">
			Terminal v3.1.4
		</div>
		<div class="w-12"></div>
	</div>

	<!-- Decorative Border -->
	<div class="border-l-2 border-r-2 border-b-2 border-primary/20 flex-1 flex flex-col overflow-hidden min-h-0">
		<!-- Content Area -->
		<div
			bind:this={contentRef}
			class="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar min-h-0"
		>
			<OutputLog {history} />
			<PromptLine {cwd} onSubmit={onCommand} disabled={isProcessing} />
		</div>
	</div>
</div>
