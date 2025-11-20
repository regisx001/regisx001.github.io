<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let activity = $state(0);
	let interval: ReturnType<typeof setInterval> | null = null;

	const orange = 'hsl(var(--primary))';
	const cyan = 'hsl(var(--accent))';
	const graphite = 'hsl(var(--border))';
	const load = $derived((30 + activity * 0.2).toFixed(1));

	onMount(() => {
		interval = setInterval(() => {
			activity = (activity + 1) % 100;
		}, 2000);
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<div
	class="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg border border-border bg-background/50 backdrop-blur-sm"
>
	<div class="absolute left-4 top-4 font-mono text-xs text-muted-foreground">
		<div>SYS_MONITOR_V2.1</div>
		<div>LOAD: {load}%</div>
	</div>

	<svg width="100%" height="100%" viewBox="0 0 600 400" class="h-full w-full">
		<defs>
			<linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" stop-color={orange} stop-opacity="0" />
				<stop offset="50%" stop-color={orange} stop-opacity="1" />
				<stop offset="100%" stop-color={orange} stop-opacity="0" />
			</linearGradient>
			<linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" stop-color={cyan} stop-opacity="0" />
				<stop offset="50%" stop-color={cyan} stop-opacity="1" />
				<stop offset="100%" stop-color={cyan} stop-opacity="0" />
			</linearGradient>
			<filter id="glow-orange">
				<feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
				<feMerge>
					<feMergeNode in="coloredBlur" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
			<filter id="glow-cyan">
				<feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
				<feMerge>
					<feMergeNode in="coloredBlur" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
		</defs>

		<!-- Connecting Lines (Circuit Traces) -->
		<!-- Center to Top Left (Frontend) -->
		<path d="M300 200 L 150 100" stroke={graphite} stroke-width="2" />
		<path
			d="M300 200 L 150 100"
			stroke="url(#grad-orange)"
			stroke-width="2"
			stroke-dasharray="10, 200"
			class="animate-flow"
		/>

		<!-- Center to Top Right (Backend) -->
		<path d="M300 200 L 450 100" stroke={graphite} stroke-width="2" />
		<path
			d="M300 200 L 450 100"
			stroke="url(#grad-orange)"
			stroke-width="2"
			stroke-dasharray="10, 200"
			class="animate-flow"
			style="animation-delay: 0.5s"
		/>

		<!-- Center to Bottom Left (Training) -->
		<path d="M300 200 L 150 300" stroke={graphite} stroke-width="2" />
		<path
			d="M150 300 L 300 200"
			stroke="url(#grad-cyan)"
			stroke-width="2"
			stroke-dasharray="10, 200"
			class="animate-flow"
			style="animation-delay: 1s"
		/>

		<!-- Center to Bottom Right (Inference) -->
		<path d="M300 200 L 450 300" stroke={graphite} stroke-width="2" />
		<path
			d="M450 300 L 300 200"
			stroke="url(#grad-cyan)"
			stroke-width="2"
			stroke-dasharray="10, 200"
			class="animate-flow"
			style="animation-delay: 1.5s"
		/>

		<!-- Nodes -->

		<!-- Frontend Node -->
		<g transform="translate(150, 100)">
			<circle r="30" fill="hsl(var(--background))" stroke={orange} stroke-width="2" />
			<text x="0" y="5" text-anchor="middle" fill={orange} class="text-[10px] font-mono">UI/UX</text>
			<circle
				r="34"
				fill="none"
				stroke={orange}
				stroke-opacity="0.3"
				stroke-dasharray="4 4"
				class="origin-center"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0"
					to="360"
					dur="10s"
					repeatCount="indefinite"
				/>
			</circle>
		</g>

		<!-- Backend Node -->
		<g transform="translate(450, 100)">
			<rect
				x="-25"
				y="-25"
				width="50"
				height="50"
				fill="hsl(var(--background))"
				stroke={orange}
				stroke-width="2"
			/>
			<text x="0" y="5" text-anchor="middle" fill={orange} class="text-[10px] font-mono">API</text>
			<rect
				x="-30"
				y="-30"
				width="60"
				height="60"
				fill="none"
				stroke={orange}
				stroke-opacity="0.3"
				stroke-dasharray="2 8"
				class="origin-center"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="360"
					to="0"
					dur="12s"
					repeatCount="indefinite"
				/>
			</rect>
		</g>

		<!-- Training Node -->
		<g transform="translate(150, 300)">
			<polygon
				points="0,-30 -26,15 26,15"
				fill="hsl(var(--background))"
				stroke={cyan}
				stroke-width="2"
			/>
			<text x="0" y="5" text-anchor="middle" fill={cyan} class="text-[10px] font-mono">DATA</text>
			<circle r="35" fill="none" stroke={cyan} stroke-opacity="0.3" stroke-dasharray="2 2">
				<animate attributeName="r" values="35;38;35" dur="3s" repeatCount="indefinite" />
			</circle>
		</g>

		<!-- Inference Node -->
		<g transform="translate(450, 300)">
			<circle r="30" fill="hsl(var(--background))" stroke={cyan} stroke-width="2" />
			<text x="0" y="5" text-anchor="middle" fill={cyan} class="text-[10px] font-mono">MODEL</text>
			<path
				d="M-40 0 A 40 40 0 0 1 40 0"
				fill="none"
				stroke={cyan}
				stroke-opacity="0.3"
				stroke-dasharray="5 5"
				class="origin-center"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0"
					to="360"
					dur="4s"
					repeatCount="indefinite"
				/>
			</path>
			<path
				d="M-40 0 A 40 40 0 0 0 40 0"
				fill="none"
				stroke={cyan}
				stroke-opacity="0.3"
				stroke-dasharray="5 5"
				class="origin-center"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0"
					to="-360"
					dur="4s"
					repeatCount="indefinite"
				/>
			</path>
		</g>

		<!-- Central Core -->
		<g transform="translate(300, 200)">
			<circle
				r="40"
				fill="hsl(var(--background))"
				stroke="hsl(var(--foreground))"
				stroke-width="2"
				filter="url(#glow-cyan)"
			/>
			<text
				x="0"
				y="5"
				text-anchor="middle"
				fill="hsl(var(--foreground))"
				class="text-xs font-bold tracking-widest font-mono"
			>
				CORE
			</text>
			<circle r="45" fill="none" stroke="hsl(var(--foreground))" stroke-opacity="0.2" stroke-width="1" />
			<circle
				r="50"
				fill="none"
				stroke="hsl(var(--foreground))"
				stroke-opacity="0.1"
				stroke-width="1"
				stroke-dasharray="10 5"
				class="origin-center"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 0 0"
					to="360 0 0"
					dur="20s"
					repeatCount="indefinite"
				/>
			</circle>
		</g>
	</svg>
</div>
