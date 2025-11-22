<script lang="ts">
	import { ChevronRight } from '@lucide/svelte';
	import { onMount, tick } from 'svelte';
	
	let {
		onSubmit,
		cwd = '~',
		disabled = false
	} = $props<{
		onSubmit: (command: string) => void;
		cwd?: string;
		disabled?: boolean;
	}>();
	
	let input = $state('');
	let inputRef: HTMLInputElement;
	
	let historyIndex = $state(-1);
	let commandHistory = $state<string[]>([]);
	
	// Refocus when cwd changes (directory navigation)
	$effect(() => {
		cwd; // Track cwd changes
		tick().then(() => {
			setTimeout(() => inputRef?.focus(), 10);
		});
	});
	
	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!input.trim() || disabled) return;
		
		onSubmit(input.trim());
		commandHistory = [...commandHistory, input.trim()];
		historyIndex = -1;
		input = '';
		
		// Refocus input after submission and DOM update
		await tick();
		setTimeout(() => inputRef?.focus(), 50);
	}
	
	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'ArrowUp') {
			e.preventDefault();
			if (commandHistory.length === 0) return;
			
			if (historyIndex === -1) {
				historyIndex = commandHistory.length - 1;
			} else if (historyIndex > 0) {
				historyIndex--;
			}
			input = commandHistory[historyIndex] || '';
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			if (historyIndex === -1) return;
			
			if (historyIndex < commandHistory.length - 1) {
				historyIndex++;
				input = commandHistory[historyIndex] || '';
			} else {
				historyIndex = -1;
				input = '';
			}
		}
	}
	
	function handleContainerClick() {
		inputRef?.focus();
	}
	
	function handleContainerKeyPress(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			inputRef?.focus();
		}
	}
	
	onMount(() => {
		inputRef?.focus();
	});
</script>

<form onsubmit={handleSubmit}>
	<div
		class="flex items-center gap-2 py-2"
		onclick={handleContainerClick}
		onkeypress={handleContainerKeyPress}
		role="button"
		tabindex="-1"
	>
		<!-- Prompt prefix -->
		<span class="text-warning text-sm hidden md:inline">guest@portfolio</span>
		<span class="text-muted-foreground hidden md:inline">:</span>
		<span class="text-blue-400 text-sm">{cwd}</span>
		<ChevronRight class="w-3 h-3 text-matrix" />
		
		<!-- Input with custom cursor -->
		<div class="flex-1 relative">
			<input
				bind:this={inputRef}
				bind:value={input}
				onkeydown={handleKeyDown}
				disabled={disabled}
				type="text"
				class="w-full bg-transparent border-none outline-none text-foreground caret-matrix font-mono text-sm md:text-base"
				autocomplete="off"
				spellcheck="false"
			/>
		</div>
	</div>
</form>
