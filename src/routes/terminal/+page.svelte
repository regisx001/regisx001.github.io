<script lang="ts">
	import { goto } from '$app/navigation';
	import type { HistoryItem } from '$lib/types';
	import { SystemState } from '$lib/types';
	import { executeCommand } from '$lib/services/commandService';
	import BootSequence from '$lib/components/terminal/BootSequence.svelte';
	import TerminalShell from '$lib/components/terminal/TerminalShell.svelte';
	import StatusBar from '$lib/components/terminal/StatusBar.svelte';
	
	let systemState = $state(SystemState.BOOTING);
	let history = $state<HistoryItem[]>([]);
	let cwd = $state('~');
	let isProcessing = $state(false);
	
	function handleBootComplete() {
		systemState = SystemState.READY;
	}

	function handleModeSwitch(mode: 'terminal' | 'gui') {
		if (mode === 'gui') {
			goto('/');
		}
	}
	
	async function handleCommand(input: string) {
		// Add command to history
		history = [...history, {
			type: 'command',
			content: input,
			cwd
		}];
		
		isProcessing = true;
		
		// Small delay to simulate processing
		await new Promise(resolve => setTimeout(resolve, 100));
		
		try {
			const response = executeCommand(input, cwd);
			
			// Handle special actions
			if (response.action === 'clear') {
				history = [];
			} else if (response.action === 'cd') {
				// Update current working directory
				if (response.path) {
					cwd = response.path;
				}
				if (response.content) {
					history = [...history, {
						type: response.type,
						content: response.content
					}];
				}
			} else if (response.action === 'gui') {
				// Add success message first
				if (response.content) {
					history = [...history, {
						type: response.type,
						content: response.content
					}];
				}
				// Navigate to GUI after a short delay
				setTimeout(() => goto('/'), 500);
			} else if (response.content) {
				history = [...history, {
					type: response.type,
					content: response.content
				}];
			}
		} catch (error) {
			history = [...history, {
				type: 'error',
				content: `System error: ${error instanceof Error ? error.message : 'Unknown error'}`
			}];
		} finally {
			isProcessing = false;
		}
	}
</script>

<div class="w-full h-screen dark flex flex-col overflow-hidden">
	<!-- Status Bar at the very top -->
	<StatusBar {isProcessing} currentMode="terminal" onModeSwitch={handleModeSwitch} />
	
	<!-- Terminal Window with margins -->
	<div class="flex-1 p-4 md:p-6 lg:p-8 crt flex flex-col overflow-hidden">
		{#if systemState === SystemState.BOOTING}
			<BootSequence oncomplete={handleBootComplete} />
		{:else}
			<TerminalShell
				{history}
				{cwd}
				{isProcessing}
				onCommand={handleCommand}
			/>
		{/if}
	</div>
</div>
