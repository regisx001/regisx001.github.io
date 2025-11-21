<script lang="ts">
	import { PROJECTS, SKILL_CATEGORIES, EXPERIENCE, CONTACT_INFO } from '$lib/data/constants';
	import type { Project } from '$lib/types';
	import ProjectDetailModal from './ProjectDetailModal.svelte';
	import SystemMonitor from './SystemMonitor.svelte';
	import {
		Github,
		Mail,
		ExternalLink,
		Terminal,
		Cpu,
		Code2,
		Layers,
		Monitor,
		Briefcase,
		Server,
		Database
	} from '@lucide/svelte';

	let { onSwitchToTerminal } = $props<{
		onSwitchToTerminal: () => void;
	}>();

	let selectedProject = $state<Project | null>(null);

	function getIconForCategory(name: string) {
		const icons: Record<string, any> = {
			'Frontend Engineering': Monitor,
			'Backend Systems': Server,
			'Core Concepts': Database,
			'AI & Emerging Tech': Cpu
		};
		return icons[name] || Code2;
	}

	function scrollToContact() {
		document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<div
	class="h-full w-full overflow-y-auto custom-scrollbar bg-console text-foreground pb-10 relative scroll-smooth"
>
	<!-- Detail Modal Overlay -->
	{#if selectedProject}
		<ProjectDetailModal project={selectedProject} onClose={() => (selectedProject = null)} />
	{/if}

	<!-- Hero Section -->
	<section
		class="min-h-[90vh] flex flex-col justify-center px-6 md:px-20 relative overflow-hidden border-b border-graphite bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.05),transparent_40%)]"
	>
		<div class="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
			<Code2 size={400} />
		</div>

		<div class="z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10">
			<!-- Left Column: Introduction -->
			<div>
			<div class="flex items-center gap-2 text-primary mb-6 animate-flicker">
				<span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
				<span class="font-mono text-sm tracking-widest uppercase"
					>System Online // Visual Mode</span
				>
				</div>

				<h1 class="text-5xl md:text-8xl font-bold text-foreground mb-8 tracking-tight leading-none">
					EZZOUBAIR <br />
					<span class="text-primary">ZARQI</span>
				</h1>

				<p
					class="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12 border-l-2 border-primary/50 pl-6"
				>
					Junior Frontend Engineer specializing in high-performance web systems, immersive
					interactions, and AI integration.
				</p>

				<div class="flex flex-wrap gap-4">
					<button
						onclick={onSwitchToTerminal}
						class="px-8 py-4 bg-primary text-console font-bold rounded hover:bg-primary/90 transition-all flex items-center gap-2 shadow-[0_0_20px_hsl(var(--primary)/0.3)] group"
					>
						<Terminal size={20} class="group-hover:animate-pulse" />
						INIT TERMINAL
					</button>
					<button
						onclick={scrollToContact}
						class="px-8 py-4 border border-graphite bg-dim text-foreground font-bold rounded hover:border-primary hover:text-primary transition-all flex items-center gap-2"
					>
						<Mail size={20} />
						CONTACT
					</button>
				</div>
			</div>

			<!-- Right Column: System Monitor -->
			<div
				class="hidden lg:flex justify-center animate-in fade-in slide-in-from-right duration-700 delay-300"
			>
				<SystemMonitor />
			</div>
		</div>
	</section>

	<!-- Experience / Careers Section -->
	<section class="py-24 px-6 md:px-20 max-w-7xl mx-auto border-b border-graphite/50">
		<div class="flex items-center gap-4 mb-16">
			<Briefcase class="text-primary" size={32} />
			<h2 class="text-3xl font-bold text-foreground tracking-wide">CAREER_LOGS</h2>
		</div>

		<div class="relative border-l border-graphite ml-4 md:ml-6 space-y-12">
			{#each EXPERIENCE as job}
				<div class="relative pl-8 md:pl-12 group">
				<!-- Timeline Dot -->
				<div
					class="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-graphite rounded-full border border-border group-hover:bg-primary group-hover:border-primary transition-colors shadow-[0_0_0_4px_hsl(var(--console))]"
				></div>					<div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
						<div>
							<h3 class="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
								{job.title}
							</h3>
							<div class="text-blue-400 font-mono text-sm mb-2">{job.company}</div>
						</div>
						<div
							class="text-xs font-mono py-1 px-3 bg-graphite/30 border border-graphite rounded text-muted-foreground whitespace-nowrap"
						>
							{job.period}
						</div>
					</div>

					<p class="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-4">
						{job.description}
					</p>

					<ul class="space-y-2 mb-4">
						{#each job.achievements as achievement}
							<li class="flex items-start gap-2 text-muted-foreground/80">
								<span class="text-primary mt-1">▹</span>
								<span>{achievement}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>

	<!-- Projects Section -->
	<section class="py-24 px-6 md:px-20 max-w-7xl mx-auto border-b border-graphite/50">
		<div class="flex items-center gap-4 mb-16">
			<Layers class="text-primary" size={32} />
			<h2 class="text-3xl font-bold text-foreground tracking-wide">DEPLOYED_SYSTEMS</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each PROJECTS as project}
				<button
					onclick={() => (selectedProject = project)}
					class="group bg-dim border border-graphite rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_hsl(var(--primary)/0.1)] flex flex-col cursor-pointer relative text-left"
				>
				<div
					class="h-48 bg-primary/5 relative p-6 flex flex-col justify-between overflow-hidden border-b border-primary/10"
				>
					<div
						class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.2),transparent_70%)] group-hover:opacity-30 transition-opacity"
					></div>						<div class="flex justify-between items-start z-10">
							<div
								class="p-2 bg-black/50 rounded-lg backdrop-blur border border-white/10 text-foreground group-hover:text-primary transition-colors"
							>
								<Code2 size={24} />
							</div>
							<span
								class={`px-2 py-1 rounded text-xs font-mono uppercase font-bold backdrop-blur-md ${
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
					</div>

					<div class="p-6 flex-1 flex flex-col bg-dim">
						<h3 class="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
							{project.name}
						</h3>
						<p class="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
							{project.description}
						</p>

						<div class="flex flex-wrap gap-2 mb-6">
							{#each project.tech.slice(0, 3) as tech}
								<span
									class="text-xs text-muted-foreground bg-console px-2 py-1 rounded border border-graphite/50"
								>
									{tech}
								</span>
							{/each}
							{#if project.tech.length > 3}
								<span
									class="text-xs text-muted-foreground bg-console px-2 py-1 rounded border border-graphite/50"
									>+{project.tech.length - 3}</span
								>
							{/if}
						</div>

						<div
							class="inline-flex items-center gap-2 text-sm text-foreground group-hover:text-primary transition-colors font-medium mt-auto border-t border-graphite/50 pt-4 w-full"
						>
							ACCESS DATA <ExternalLink size={14} />
						</div>
					</div>
				</button>
			{/each}
		</div>
	</section>

	<!-- Skills Grid -->
	<section class="py-24 px-6 md:px-20 max-w-7xl mx-auto">
		<div class="flex items-center gap-4 mb-16">
			<Cpu class="text-primary" size={32} />
			<h2 class="text-3xl font-bold text-foreground tracking-wide">INSTALLED_MODULES</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each SKILL_CATEGORIES as category}
				{@const Icon = getIconForCategory(category.name)}
				<div
					class="bg-dim/50 border border-graphite p-6 rounded-lg hover:bg-dim hover:border-border transition-colors hover:shadow-lg hover:shadow-black/50 group"
				>
					<div
						class="text-primary mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary group-hover:text-console transition-all"
					>
						<Icon size={20} />
					</div>
					<h3 class="text-foreground font-bold mb-4 group-hover:text-primary transition-colors">
						{category.name}
					</h3>
					<ul class="space-y-2">
						{#each category.skills as skill}
							<li
								class="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors"
							>
								<div
									class="w-1 h-1 bg-muted-foreground/50 rounded-full group-hover:bg-primary transition-colors"
								></div>
								{skill.name}
								<span
									class={`ml-auto text-xs font-mono ${
										skill.level === 'expert'
											? 'text-green-400'
											: skill.level === 'advanced'
												? 'text-blue-400'
												: skill.level === 'intermediate'
													? 'text-yellow-400'
													: 'text-muted-foreground'
									}`}
								>
									{skill.level}
								</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact-section" class="py-24 px-6 md:px-20 max-w-7xl mx-auto border-t border-graphite">
		<div class="flex items-center gap-4 mb-16">
			<Mail class="text-primary" size={32} />
			<h2 class="text-3xl font-bold text-foreground tracking-wide">CONTACT_CHANNELS</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
			<div class="bg-dim/50 border border-graphite p-8 rounded-lg hover:border-primary/30 transition-colors">
				<h3 class="text-xl font-bold text-foreground mb-4">EMAIL</h3>
				<a
					href="mailto:{CONTACT_INFO.email}"
					class="text-primary hover:underline font-mono text-lg"
				>
					{CONTACT_INFO.email}
				</a>
			</div>

			<div class="bg-dim/50 border border-graphite p-8 rounded-lg hover:border-primary/30 transition-colors">
				<h3 class="text-xl font-bold text-foreground mb-4">SOCIAL</h3>
				<div class="flex gap-4">
					<a
						href={CONTACT_INFO.github}
						target="_blank"
						rel="noopener noreferrer"
						class="p-3 bg-graphite/50 rounded hover:bg-primary/20 hover:text-primary transition-all"
						aria-label="GitHub"
					>
						<Github size={24} />
					</a>
					<a
						href={CONTACT_INFO.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="p-3 bg-graphite/50 rounded hover:bg-primary/20 hover:text-primary transition-all"
						aria-label="LinkedIn"
					>
						<ExternalLink size={24} />
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="py-12 px-6 border-t border-graphite bg-black/40 mt-12">
		<div
			class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
		>
			<div class="text-center md:text-left">
				<div class="text-2xl font-bold text-foreground mb-2 tracking-tighter">
					SYSTEM_<span class="text-primary">OS</span>
				</div>
				<p class="text-muted-foreground/60 text-sm max-w-xs">
					Advanced portfolio interface designed for the modern web. Built with SvelteKit 5,
					Tailwind, and Cyberpunk aesthetics.
				</p>
			</div>

			<div class="flex gap-6">
				<a
					href={CONTACT_INFO.github}
					target="_blank"
					rel="noopener noreferrer"
					class="w-10 h-10 rounded bg-graphite/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all"
					aria-label="GitHub"
				>
					<Github size={20} />
				</a>
				<a
					href="mailto:{CONTACT_INFO.email}"
					class="w-10 h-10 rounded bg-graphite/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all"
					aria-label="Email"
				>
					<Mail size={20} />
				</a>
				<a
					href={CONTACT_INFO.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="w-10 h-10 rounded bg-graphite/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all"
					aria-label="LinkedIn"
				>
					<ExternalLink size={20} />
				</a>
			</div>
		</div>

		<div
			class="max-w-7xl mx-auto mt-12 pt-8 border-t border-graphite/30 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-muted-foreground/60"
		>
			<div>ID: 0x84F2A // SESSION: ACTIVE</div>
			<div class="mt-2 md:mt-0">
				&copy; {new Date().getFullYear()} SYSTEM_OS. ALL SYSTEMS OPERATIONAL.
			</div>
		</div>
	</footer>
</div>
