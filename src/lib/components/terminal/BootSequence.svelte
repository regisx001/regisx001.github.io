<script lang="ts">
	import { onMount } from 'svelte';
	
	let { oncomplete } = $props<{
		oncomplete: () => void;
	}>();
	
	let logs = $state<string[]>([]);
	
	const bootLines = [
		"INITIALIZING KERNEL...",
		"LOADING MODULES: [CPU] [GPU] [NEURAL_ENGINE]",
		"MOUNTING FILESYSTEM: READ-ONLY",
		"ESTABLISHING SECURE CONNECTION...",
		"HANDSHAKE ACCEPTED.",
		"LOADING USER PROFILE...",
		"SYSTEM READY."
	];
	
	function getFormattedTime(): string {
		const now = new Date();
		const time = now.toLocaleTimeString('en-US', { hour12: false });
		const ms = now.getMilliseconds().toString().padStart(3, '0');
		return `${time}.${ms}`;
	}
	
	onMount(() => {
		let delay = 0;
		bootLines.forEach((line, index) => {
			delay += Math.random() * 300 + 100;
			setTimeout(() => {
				logs = [...logs, line];
				if (index === bootLines.length - 1) {
					setTimeout(oncomplete, 800);
				}
			}, delay);
		});
	});
</script>

<div class="w-full h-screen bg-console flex flex-col justify-center items-center text-matrix font-mono p-4 crt">
	<div class="w-full max-w-lg">
		{#each logs as log, i (i)}
			<div class="mb-1">
				<span class="text-muted-foreground mr-2">[{getFormattedTime()}]</span>
				{log}
			</div>
		{/each}
		<div class="animate-pulse mt-2">_</div>
	</div>
</div>
