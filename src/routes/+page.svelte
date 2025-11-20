<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import SystemVisualizer from '$lib/components/SystemVisualizer.svelte';
	import NeuralInterface from '$lib/components/NeuralInterface.svelte';
	import ModuleCard from '$lib/components/ModuleCard.svelte';
	import type { Project, SystemLog } from '$lib/types';
	import { Cpu, Layers, Activity } from '@lucide/svelte';
	import { cn } from '$lib/utils';

	// Mock Data
	const PROJECTS: Project[] = [
		{
			id: '1',
			title: 'Distributed Tensor Engine',
			description:
				'A custom distributed training framework capable of handling 10B+ parameter models across varied hardware configurations.',
			tech: ['Python', 'PyTorch', 'CUDA', 'gRPC'],
			type: 'ml',
			metrics: '40% Faster Training',
			status: 'online'
		},
		{
			id: '2',
			title: 'Reactive Dashboard Core',
			description:
				'High-performance frontend architecture for real-time analytics, utilizing WebWorkers and OffscreenCanvas.',
			tech: ['React', 'TypeScript', 'WASM', 'WebGL'],
			type: 'dev',
			metrics: '< 16ms Frame Time',
			status: 'optimized'
		},
		{
			id: '3',
			title: 'Semantic Code Search',
			description:
				'Hybrid search engine combining BM25 sparse vectors with dense embedding retrieval for large codebases.',
			tech: ['Vector DB', 'FastAPI', 'Transformers', 'React'],
			type: 'hybrid',
			metrics: '95% Recall @ 10',
			status: 'online'
		}
	];

	const INITIAL_LOGS: SystemLog[] = [
		{ id: 1, timestamp: '00:01:22', message: 'System Kernel initialized.', type: 'info' },
		{ id: 2, timestamp: '00:01:24', message: 'Neural weights loaded [Vision_V4].', type: 'success' },
		{ id: 3, timestamp: '00:01:45', message: 'Dev modules mounting...', type: 'info' },
		{ id: 4, timestamp: '00:02:10', message: 'Optimization pass complete.', type: 'success' }
	];

	let activeSection = $state<'overview' | 'modules' | 'interface'>('overview');
	let logs = $state<SystemLog[]>(INITIAL_LOGS);
	let logInterval: ReturnType<typeof setInterval> | null = null;

	onMount(() => {
		logInterval = setInterval(() => {
			if (Math.random() > 0.7) {
				const newLog: SystemLog = {
					id: Date.now(),
					timestamp: new Date().toISOString().split('T')[1].split('.')[0],
					message: `Heartbeat signal: Active threads ${Math.floor(Math.random() * 12) + 4}`,
					type: 'info'
				};
				logs = [newLog, ...logs].slice(0, 6);
			}
		}, 3000);
	});

	onDestroy(() => {
		if (logInterval) clearInterval(logInterval);
	});

	const techStack = ['React 18', 'TypeScript', 'Tailwind', 'TensorFlow.js', 'Node.js', 'Python', 'Docker'];
</script>

<div class="grid-bg flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
	<!-- Navigation Bar (HUD Style) -->
	<nav class="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div class="flex items-center gap-3">
					<div class="relative">
						<Cpu class="text-primary" size={24} />
						<div class="absolute -right-1 -top-1 h-2 w-2 animate-pulse rounded-full bg-accent"></div>
					</div>
					<span class="font-mono text-lg font-bold tracking-wider">
						DEV<span class="text-primary">_</span>SYS<span class="text-accent">.AI</span>
					</span>
				</div>
				<div class="hidden md:block">
					<div class="flex items-baseline space-x-8 font-mono text-sm">
						<button
							onclick={() => (activeSection = 'overview')}
							class={cn(
								'transition-colors',
								activeSection === 'overview' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
							)}
						>
							/OVERVIEW
						</button>
						<button
							onclick={() => (activeSection = 'modules')}
							class={cn(
								'transition-colors',
								activeSection === 'modules' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
							)}
						>
							/MODULES
						</button>
						<button
							onclick={() => (activeSection = 'interface')}
							class={cn(
								'transition-colors',
								activeSection === 'interface' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
							)}
						>
							/INTERFACE
						</button>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<!-- Main Content -->
	<main class="mx-auto grid w-full max-w-7xl grow grid-cols-1 gap-8 px-4 pt-24 lg:grid-cols-12">
		<!-- Left Column: Dashboard / Content -->
		<div class="space-y-12 lg:col-span-8">
			<!-- Hero Section -->
			<section
				class={cn(
					'transition-opacity duration-500',
					activeSection === 'overview' ? 'block' : 'hidden md:block'
				)}
			>
				<div class="mb-8">
					<h1 class="mb-4 font-mono text-4xl font-bold leading-tight md:text-6xl">
						Where Code Becomes <span class="text-accent">Intelligence</span>.
					</h1>
					<p class="max-w-2xl border-l-2 border-primary pl-4 text-lg leading-relaxed text-muted-foreground">
						I architect hybrid systems—fusing robust <span class="text-primary">software engineering</span> with
						advanced <span class="text-accent">machine learning</span> pipelines.
					</p>
				</div>

				<!-- System Visualizer -->
				<div class="mb-8 w-full">
					<SystemVisualizer />
				</div>
			</section>

			<!-- Projects / Modules Grid -->
			<section
				id="modules"
				class={cn(
					'space-y-6',
					activeSection === 'modules' || activeSection === 'overview' ? 'block' : 'hidden'
				)}
			>
				<div class="mb-6 flex items-center justify-between border-b border-border pb-2">
					<h2 class="flex items-center gap-2 font-mono text-2xl">
						<Layers size={20} class="text-muted-foreground" />
						INSTALLED_MODULES
					</h2>
					<span class="font-mono text-xs text-primary">STATUS: ONLINE</span>
				</div>
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each PROJECTS as project}
						<ModuleCard {project} />
					{/each}
				</div>
			</section>
		</div>

		<!-- Right Column: Sidebar / Interface -->
		<aside class="space-y-8 lg:col-span-4">
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
			<div
				class={cn(
					activeSection === 'interface'
						? 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 lg:static lg:block lg:bg-transparent'
						: 'block'
				)}
			>
				<div class={activeSection === 'interface' ? 'w-full max-w-2xl px-4' : ''}>
					<div class="mb-2 flex items-center justify-between lg:hidden">
						{#if activeSection === 'interface'}
							<button
								onclick={() => (activeSection = 'overview')}
								class="mb-4 font-mono text-xs text-foreground">[ ESCAPE TERMINAL ]</button
							>
						{/if}
					</div>
					<NeuralInterface />
				</div>
			</div>

			<!-- Tech Stack Mini-Viz -->
			<div class="hidden rounded border border-border bg-card/30 p-4 lg:block">
				<h3 class="mb-4 font-mono text-sm text-muted-foreground">DEPENDENCIES</h3>
				<div class="flex flex-wrap gap-2">
					{#each techStack as tech}
						<span
							class="cursor-default rounded border border-border bg-background px-2 py-1 font-mono text-[10px] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
						>
							{tech}
						</span>
					{/each}
				</div>
			</div>
		</aside>
	</main>

	<footer class="mt-12 border-t border-border bg-background py-8">
		<div class="mx-auto max-w-7xl px-4 text-center font-mono text-xs text-muted-foreground">
			<p>SYSTEM VERSION 1.0.4 // BUILD 2023.10.25</p>
			<p class="mt-2">INITIATED BY [YOUR NAME]</p>
		</div>
	</footer>
</div>

