<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Wifi, Battery, Activity, Lock, Terminal, Layout } from '@lucide/svelte';
	
	let { isProcessing = false, currentMode = 'terminal', onModeSwitch } = $props<{
		isProcessing?: boolean;
		currentMode?: 'terminal' | 'gui';
		onModeSwitch?: (mode: 'terminal' | 'gui') => void;
	}>();
	
	let time = $state(new Date());
	let interval: ReturnType<typeof setInterval>;
	
	onMount(() => {
		interval = setInterval(() => {
			time = new Date();
		}, 1000);
	});
	
	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<div class="h-10 bg-graphite/80 border-b border-graphite flex items-center justify-between px-4 text-xs font-mono uppercase tracking-wider text-muted-foreground select-none z-20">
	<div class="flex items-center gap-4">
		<!-- Mode Switcher -->
		{#if onModeSwitch}
			<div class="flex items-center gap-1 bg-dim/50 rounded border border-graphite/50">
				<button
					onclick={() => onModeSwitch('terminal')}
					class={`flex items-center gap-1.5 px-3 py-1 rounded transition-all ${
						currentMode === 'terminal'
							? 'bg-primary text-console'
							: 'text-muted-foreground hover:text-foreground hover:bg-dim'
					}`}
				>
					<Terminal class="w-3 h-3" />
					<span class="hidden sm:inline">CLI</span>
				</button>
				<button
					onclick={() => onModeSwitch('gui')}
					class={`flex items-center gap-1.5 px-3 py-1 rounded transition-all ${
						currentMode === 'gui'
							? 'bg-primary text-console'
							: 'text-muted-foreground hover:text-foreground hover:bg-dim'
					}`}
				>
					<Layout class="w-3 h-3" />
					<span class="hidden sm:inline">GUI</span>
				</button>
			</div>
		{/if}
		
		<div class={`flex items-center gap-2 ${isProcessing ? 'text-warning animate-pulse' : 'text-primary'}`}>
			<Activity class="w-3 h-3" />
			<span>{isProcessing ? 'PROCESSING...' : 'IDLE'}</span>
		</div>
		<div class="hidden md:flex items-center gap-2">
			<Lock class="w-3 h-3" />
			<span>SSL: SECURE</span>
		</div>
	</div>

	<div class="flex items-center gap-4">
		<div class="hidden md:block">RAM: 64TB</div>
		<div class="flex items-center gap-2">
			<span>{time.toLocaleTimeString([], { hour12: false })}</span>
		</div>
		<div class="flex items-center gap-2 text-primary">
			<Wifi class="w-3 h-3" />
			<Battery class="w-3 h-3" />
		</div>
	</div>
</div>
