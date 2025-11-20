<script lang="ts">
	import { FolderGit2 } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import { PROJECTS } from '$lib/data/projects';
</script>

<section id="projects" class="scroll-mt-20 space-y-6">
	<div class="mb-6 flex items-center justify-between border-b border-border pb-2">
		<h2 class="flex items-center gap-2 font-mono text-2xl">
			<FolderGit2 size={20} class="text-muted-foreground" />
			FEATURED_PROJECTS
		</h2>
		<span class="font-mono text-xs text-primary">COUNT: {PROJECTS.length}</span>
	</div>
	<div class="grid grid-cols-1 gap-6">
		{#each PROJECTS as project}
			<div class="rounded-lg border border-border bg-card/30 p-6 transition-all hover:border-primary/50">
				<div class="mb-4 flex items-start justify-between">
					<div>
						<h3 class="mb-2 font-mono text-xl font-bold text-foreground">{project.title}</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">
							{project.description}
						</p>
					</div>
					<span
						class={cn(
							'rounded border px-2 py-1 font-mono text-xs',
							project.type === 'ml'
								? 'border-accent/40 bg-accent/10 text-accent'
								: project.type === 'dev'
									? 'border-primary/40 bg-primary/10 text-primary'
									: 'border-purple-500/40 bg-purple-500/10 text-purple-400'
						)}
					>
						{project.type.toUpperCase()}
					</span>
				</div>
				<div class="mb-4 flex flex-wrap gap-2">
					{#each project.tech as tech}
						<span
							class="rounded border border-border bg-background px-2 py-1 font-mono text-[10px] text-muted-foreground"
						>
							{tech}
						</span>
					{/each}
				</div>
				<div class="flex items-center justify-between">
					<span class="font-mono text-xs text-accent">⚡ {project.metrics}</span>
					<span class="font-mono text-xs text-muted-foreground">STATUS: {project.status.toUpperCase()}</span>
				</div>
			</div>
		{/each}
	</div>
</section>
