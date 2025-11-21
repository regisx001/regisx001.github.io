<script lang="ts">
	import { User, Zap } from '@lucide/svelte';
	import { SKILLS } from '$lib/data/constants';
</script>

<div class="border-l-2 border-matrix pl-4 py-2 my-2">
	<div class="flex items-start gap-6 flex-col md:flex-row">
		<div class="w-24 h-24 bg-graphite rounded flex items-center justify-center shrink-0 border border-dashed border-muted-foreground/50">
			<User class="w-12 h-12 text-muted-foreground" />
		</div>
		
		<div class="flex-1 space-y-4">
			<div>
				<h3 class="text-xl text-foreground font-bold mb-1">System Operator</h3>
				<p class="text-muted-foreground text-sm">Senior Frontend Engineer & UI Architect</p>
			</div>

			<div class="text-card-foreground text-sm leading-relaxed">
				Specialized in building high-performance, scalable web interfaces. 
				Obsessed with pixel perfection, accessible design systems, and 
				seamless user experiences. Currently operating out of Node_Localhost.
			</div>

			<div>
				<h4 class="text-warning text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
					<Zap class="w-3 h-3" /> Loaded Modules
				</h4>
				<div class="grid grid-cols-2 gap-2">
					{#each SKILLS as skill}
						<div class="flex items-center gap-2 text-xs text-matrix">
							<span class="w-1 h-1 bg-matrix rounded-full"></span>
							{skill}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
