<script lang="ts">
	import { COMMANDS } from '$lib/data/constants';
</script>

<table class="w-full max-w-lg border-collapse text-sm">
	<thead>
		<tr>
			<th class="text-left text-muted-foreground py-2 border-b border-graphite w-32">COMMAND</th>
			<th class="text-left text-muted-foreground py-2 border-b border-graphite">FUNCTION</th>
		</tr>
	</thead>
	<tbody>
		{#each COMMANDS as { cmd, desc }}
			<tr class="group hover:bg-foreground/5">
				<td class="py-1 text-matrix font-bold">{cmd}</td>
				<td class="py-1 text-muted-foreground">{desc}</td>
			</tr>
		{/each}
	</tbody>
</table>
