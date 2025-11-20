<script lang="ts">
	import SystemVisualizer from './SystemVisualizer.svelte';
</script>

<div class="space-y-8">
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
	<div class="w-full">
		<SystemVisualizer />
	</div>
</div>
