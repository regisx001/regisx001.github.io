<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import ModulesSection from '$lib/components/ModulesSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import CareerSection from '$lib/components/CareerSection.svelte';
	import type { SystemLog } from '$lib/types';
	import { INITIAL_LOGS } from '$lib/data/logs';
	import { base } from '$app/paths';

	let logs = $state<SystemLog[]>(INITIAL_LOGS);
	let logInterval: ReturnType<typeof setInterval> | null = null;

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

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
</script>

<div class="grid-bg flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
	<!-- Navigation Bar (HUD Style) -->
	<nav class="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div class="flex items-center gap-3">
					<img src="{base}/logo.png" alt="" width="50" srcset="">
					<span class="font-black">Regisx001</span>
				</div>
				<div class="hidden md:block">
					<div class="flex items-baseline space-x-6 font-mono text-sm">
						<button
							onclick={() => scrollToSection('overview')}
							class="text-muted-foreground transition-colors hover:text-primary"
						>
							/OVERVIEW
						</button>
						<button
							onclick={() => scrollToSection('modules')}
							class="text-muted-foreground transition-colors hover:text-accent"
						>
							/MODULES
						</button>
						<button
							onclick={() => scrollToSection('projects')}
							class="text-muted-foreground transition-colors hover:text-primary"
						>
							/PROJECTS
						</button>
						<button
							onclick={() => scrollToSection('career')}
							class="text-muted-foreground transition-colors hover:text-foreground"
						>
							/CAREER
						</button>
						<button
							onclick={() => scrollToSection('contact')}
							class="text-muted-foreground transition-colors hover:text-accent"
						>
							/CONTACT
						</button>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<!-- Main Content -->
	<main class="mx-auto w-full max-w-7xl grow space-y-12 px-4 pt-24">
		<!-- Hero Section with Sidebar -->
		<section id="overview" class="scroll-mt-20">
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
				<!-- Hero Content -->
				<div class="lg:col-span-8">
					<HeroSection />
				</div>

				<!-- Sidebar -->
				<div class="lg:col-span-4">
					<Sidebar {logs} />
				</div>
			</div>
		</section>

		<!-- Modules Section -->
		<ModulesSection />

		<!-- Projects Section -->
		<ProjectsSection />

		<!-- Career Timeline -->
		<CareerSection />
	</main>

	<footer class="mt-12 border-t border-border bg-background py-8">
		<div class="mx-auto max-w-7xl px-4 text-center font-mono text-xs text-muted-foreground">
			<p>SYSTEM VERSION 1.0.4 // BUILD 2023.10.25</p>
			<p class="mt-2">INITIATED BY [YOUR NAME]</p>
		</div>
	</footer>
</div>

