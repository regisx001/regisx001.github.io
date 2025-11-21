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
	
		<div class={`flex items-center gap-2 ${isProcessing ? 'text-warning animate-pulse' : 'text-primary'}`}>
			<Activity class="w-3 h-3" />
			<span>{isProcessing ? 'PROCESSING...' : 'IDLE'}</span>
		</div>
		<div class="hidden md:flex items-center gap-2">
			<Lock class="w-3 h-3" />
			<span>SSL: SECURE</span>
		</div>
	
        <!-- Mode Switcher -->
		{#if onModeSwitch}
			<div class="flex items-center gap-0.5 bg-console rounded-md border border-graphite p-0.5 shadow-inner">
                <button
					onclick={() => onModeSwitch('gui')}
					class={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all font-bold text-[10px] ${
						currentMode === 'gui'
							? 'bg-primary text-console shadow-[0_0_10px_hsl(var(--primary)/0.5)]'
							: 'text-muted-foreground hover:text-foreground hover:bg-graphite/50'
					}`}
					aria-label="Switch to GUI mode"
				>
					<Layout class="w-3.5 h-3.5" />
					<span class="hidden sm:inline tracking-wider">INTERFACE</span>
				</button>


				<button
					onclick={() => onModeSwitch('terminal')}
					class={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all font-bold text-[10px] ${
						currentMode === 'terminal'
							? 'bg-primary text-console shadow-[0_0_10px_hsl(var(--primary)/0.5)]'
							: 'text-muted-foreground hover:text-foreground hover:bg-graphite/50'
					}`}
					aria-label="Switch to Terminal mode"
				>
					<Terminal class="w-3.5 h-3.5" />
					<span class="hidden sm:inline tracking-wider">TERMINAL</span>
				</button>
				
			</div>
		{/if}
    </div>

	<div class="flex items-center gap-4">
		<div class="hidden md:block">RAM: 64GB</div>
		<div class="flex items-center gap-2">
			<span>{time.toLocaleTimeString([], { hour12: false })}</span>
		</div>
		<div class="flex items-center gap-2 text-primary">
			<Wifi class="w-3 h-3" />
			<Battery class="w-3 h-3" />
		</div>
	</div>
</div>
