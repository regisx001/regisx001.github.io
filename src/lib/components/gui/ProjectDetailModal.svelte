<script lang="ts">
	import type { Project } from '$lib/types';
	import { X, ExternalLink, Github, Check, Terminal, Image } from '@lucide/svelte';

	let { project, onClose } = $props<{
		project: Project;
		onClose: () => void;
	}>();

	let activeTab = $state<'overview' | 'screenshots'>('overview');

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			onClose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div
	class="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
	onclick={handleBackdropClick}
	onkeydown={(e) => e.key === 'Enter' && onClose()}
	role="dialog"
	aria-modal="true"
	tabindex="-1"
>
	<div
		class="bg-console border border-primary/30 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-[0_0_60px_rgba(0,255,156,0.2)] animate-in zoom-in-95 duration-200 flex flex-col"
	>
		<!-- Header -->
		<div class="bg-graphite border-b border-primary/20 p-6 flex items-start justify-between shrink-0">
			<div class="flex-1">
				<div class="flex items-center gap-3 mb-2">
					<h2 class="text-2xl font-bold text-primary">{project.name}</h2>
					<span
						class={`px-3 py-1 rounded text-xs font-mono uppercase font-bold ${
							project.status === 'ACTIVE'
								? 'bg-green-900/30 text-green-400 border border-green-500/30'
								: project.status === 'BETA'
									? 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/30'
									: project.status === 'EXPERIMENTAL'
										? 'bg-blue-900/30 text-blue-400 border border-blue-500/30'
										: 'bg-graphite text-muted-foreground border border-border'
						}`}
					>
						{project.status}
					</span>
				</div>
				<p class="text-sm text-muted-foreground">{project.description}</p>
			</div>
			<button
				onclick={onClose}
				class="ml-4 p-2 hover:bg-primary/10 rounded transition-colors text-muted-foreground hover:text-primary shrink-0"
				aria-label="Close modal"
			>
				<X size={24} />
			</button>
		</div>

		<!-- Tabs -->
		<div class="border-b border-graphite/50 bg-dim/30 shrink-0">
			<div class="flex gap-1 px-6">
				<button
					onclick={() => (activeTab = 'overview')}
					class={`px-4 py-2.5 font-mono text-xs font-bold transition-all border-b-2 ${
						activeTab === 'overview'
							? 'border-primary text-primary'
							: 'border-transparent text-muted-foreground hover:text-foreground'
					}`}
				>
					<Terminal size={16} class="inline mr-2" />
					OVERVIEW
				</button>
				<button
					onclick={() => (activeTab = 'screenshots')}
					class={`px-4 py-2.5 font-mono text-xs font-bold transition-all border-b-2 ${
						activeTab === 'screenshots'
							? 'border-primary text-primary'
							: 'border-transparent text-muted-foreground hover:text-foreground'
					}`}
				>
					<Image size={16} class="inline mr-2" />
					SCREENSHOTS
				</button>
			</div>
		</div>

		<!-- Content -->
		<div class="p-6 space-y-6 overflow-y-auto custom-scrollbar flex-1">
			{#if activeTab === 'overview'}
				<!-- Long Description -->
				{#if project.longDescription}
				<div class="animate-in fade-in duration-300">
					<h3 class="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
						<span class="w-1 h-5 bg-primary"></span>
						OVERVIEW
					</h3>
					<p class="text-muted-foreground leading-relaxed text-base">
							{project.longDescription}
						</p>
					</div>
				{/if}

				<!-- Features -->
				{#if project.features && project.features.length > 0}
				<div class="animate-in fade-in duration-300 delay-100">
					<h3 class="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
						<span class="w-1 h-5 bg-primary"></span>
						KEY_FEATURES
					</h3>
						<ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
						{#each project.features as feature}
							<li
								class="flex items-start gap-2.5 text-sm text-muted-foreground bg-dim/50 p-2.5 rounded border border-graphite/50 hover:border-primary/30 transition-colors"
							>
								<Check size={16} class="text-primary shrink-0 mt-0.5" />
								<span>{feature}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				<!-- Tech Stack -->
				<div class="animate-in fade-in duration-300 delay-200">
					<h3 class="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
						<span class="w-1 h-5 bg-primary"></span>
						TECH_STACK
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each project.tech as tech}
							<span
								class="px-2.5 py-1.5 bg-dim border border-primary/20 rounded font-mono text-xs text-primary hover:bg-primary/10 hover:border-primary/40 transition-colors cursor-default"
							>
								{tech}
							</span>
						{/each}
					</div>
				</div>
			{:else if activeTab === 'screenshots'}
				<div class="animate-in fade-in duration-300">
					<h3 class="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
						<span class="w-1 h-5 bg-primary"></span>
						PROJECT_GALLERY
					</h3>
					
					{#if project.screenshots && project.screenshots.length > 0}
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							{#each project.screenshots as screenshot, index}
								<div
									class="aspect-video bg-dim/50 border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-all group relative cursor-pointer"
								>
									<img 
										src={screenshot} 
										alt={`${project.name} screenshot ${index + 1}`}
										class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									/>
									<!-- Overlay on hover -->
									<div
										class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center"
									>
										<div class="opacity-0 group-hover:opacity-100 transition-opacity">
											<ExternalLink size={32} class="text-primary" />
										</div>
									</div>
									<!-- Scanline effect -->
									<div
										class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,156,0.02)_50%)] bg-size-[100%_4px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
									></div>
									<!-- Corner accents -->
									<div
										class="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/50 transition-colors"
									></div>
									<div
										class="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-colors"
									></div>
									<div
										class="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/0 group-hover:border-primary/50 transition-colors"
									></div>
									<div
										class="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-colors"
									></div>
									<!-- Label -->
									<div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
										<span class="font-mono text-xs text-primary">SCREENSHOT_{index + 1}</span>
									</div>
								</div>
							{/each}
						</div>
					{:else}
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							{#each [1, 2, 3, 4] as index}
								<div
									class="aspect-video bg-dim/50 border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-all group relative"
								>
									<!-- Placeholder -->
									<div
										class="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/50"
									>
										<Image size={48} class="mb-3 text-primary/30" />
										<span class="font-mono text-xs">SCREENSHOT_{index}</span>
										<span class="font-mono text-[10px] mt-1 text-muted-foreground/30"
											>1920x1080</span
										>
									</div>
									<!-- Scanline effect -->
									<div
										class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,156,0.02)_50%)] bg-size-[100%_4px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
									></div>
									<!-- Corner accents -->
									<div
										class="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/50 transition-colors"
									></div>
									<div
										class="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-colors"
									></div>
									<div
										class="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/0 group-hover:border-primary/50 transition-colors"
									></div>
									<div
										class="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-colors"
									></div>
								</div>
							{/each}
						</div>
						<p class="text-muted-foreground/60 text-sm mt-4 font-mono text-center">
							// Screenshot placeholders - Ready for integration
						</p>
					{/if}
				</div>
			{/if}
		</div>

		<!-- Footer with Links -->
		<div class="border-t border-graphite bg-dim/30 p-4 flex flex-wrap gap-3 shrink-0">
			{#if project.github}
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 px-5 py-2.5 text-sm bg-primary text-console font-bold rounded hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,255,156,0.3)] hover:shadow-[0_0_30px_rgba(0,255,156,0.5)]"
				>
					<Github size={18} />
					VIEW SOURCE
				</a>
			{/if}
			{#if project.demo}
				<a
					href={project.demo}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 px-5 py-2.5 text-sm border border-graphite bg-dim text-foreground font-bold rounded hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
				>
					<ExternalLink size={18} />
					LIVE DEMO
				</a>
			{/if}
			<button
				onclick={onClose}
				class="flex items-center gap-2 px-5 py-2.5 text-sm ml-auto border border-graphite/50 bg-console text-muted-foreground font-bold rounded hover:border-muted-foreground hover:text-foreground transition-all"
			>
				<X size={18} />
				CLOSE
			</button>
		</div>
	</div>
</div>
