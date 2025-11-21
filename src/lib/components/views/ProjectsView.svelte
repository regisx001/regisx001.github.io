<script lang="ts">
	import { Folder, GitBranch, Globe, ExternalLink } from '@lucide/svelte';
	import { PROJECTS } from '$lib/data/constants';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
	{#each PROJECTS as project}
		<div class="border border-graphite bg-dim p-4 rounded hover:border-matrix/50 transition-colors group">
			<div class="flex items-center justify-between mb-2">
				<div class="flex items-center gap-2 text-matrix font-bold">
					<Folder class="w-4 h-4" />
					{project.name}
				</div>
				<div class="text-xs px-2 py-0.5 rounded bg-graphite text-muted-foreground uppercase">
					{project.status}
				</div>
			</div>
			
			<p class="text-muted-foreground text-sm mb-4 h-10 line-clamp-2">
				{project.description}
			</p>

			<div class="flex flex-wrap gap-2 mb-4">
				{#each project.tech as tech}
					<span class="text-xs text-warning bg-warning/10 px-1.5 py-0.5 rounded">
						{tech}
					</span>
				{/each}
			</div>

			<div class="flex gap-3 text-sm border-t border-graphite pt-3">
				{#if project.github}
					<a href={project.github} class="flex items-center gap-1 text-muted-foreground hover:text-matrix transition-colors" target="_blank" rel="noopener noreferrer">
						<GitBranch class="w-3 h-3" /> Source
					</a>
				{/if}
				{#if project.demo}
					<a href={project.demo} class="flex items-center gap-1 text-muted-foreground hover:text-matrix transition-colors" target="_blank" rel="noopener noreferrer">
						<Globe class="w-3 h-3" /> Demo <ExternalLink class="w-3 h-3 ml-0.5" />
					</a>
				{/if}
			</div>
		</div>
	{/each}
</div>
