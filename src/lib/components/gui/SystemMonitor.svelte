<script lang="ts">
	import { onMount } from 'svelte';
	import { Activity, Cpu, Wifi, HardDrive, Server, ShieldCheck } from '@lucide/svelte';

	let stats = $state({
		cpu: 42,
		ram: 36,
		temp: 45,
		upload: 1.2,
		download: 4.5
	});

	let graphData = $state<number[]>(Array(30).fill(20));
	let downloadData = $state<number[]>(Array(30).fill(30));

	const uploadPath = $derived.by(() => {
		if (graphData.length === 0) return '';
		const max = 60;
		const stepX = 100 / (graphData.length - 1);

		let d = `M 0 ${max - graphData[0]}`;
		graphData.forEach((val, i) => {
			if (i === 0) return;
			d += ` L ${i * stepX} ${max - val}`;
		});
		return d;
	});

	const downloadPath = $derived.by(() => {
		if (downloadData.length === 0) return '';
		const max = 60;
		const stepX = 100 / (downloadData.length - 1);

		let d = `M 0 ${max - downloadData[0]}`;
		downloadData.forEach((val, i) => {
			if (i === 0) return;
			d += ` L ${i * stepX} ${max - val}`;
		});
		return d;
	});

	onMount(() => {
		const interval = setInterval(() => {
			stats = {
				cpu: Math.min(98, Math.max(10, stats.cpu + (Math.random() * 16 - 8))),
				ram: Math.min(90, Math.max(20, stats.ram + (Math.random() * 6 - 3))),
				temp: Math.min(85, Math.max(40, stats.temp + (Math.random() * 4 - 2))),
				upload: Math.max(0.1, stats.upload + (Math.random() * 2 - 1)),
				download: Math.max(1.0, stats.download + (Math.random() * 5 - 2.5))
			};

			const newUploadValue = Math.random() * 25 + 10;
			const newDownloadValue = Math.random() * 40 + 15;
			graphData = [...graphData.slice(1), newUploadValue];
			downloadData = [...downloadData.slice(1), newDownloadValue];
		}, 800);

		return () => clearInterval(interval);
	});
</script>

<div
	class="w-full max-w-2xl bg-dim/90 border border-graphite rounded-lg p-6 font-mono text-xs relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] backdrop-blur-md group hover:border-primary/30 transition-colors"
>
	<!-- Decorative corner accents -->
	<div
		class="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50 group-hover:border-primary transition-colors"
	></div>
	<div
		class="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50 group-hover:border-primary transition-colors"
	></div>
	<div
		class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50 group-hover:border-primary transition-colors"
	></div>
	<div
		class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50 group-hover:border-primary transition-colors"
	></div>

	<div class="flex items-center justify-between mb-6 border-b border-graphite pb-3">
		<div class="flex items-center gap-2 text-primary font-bold tracking-wider">
			<Activity size={14} />
			SYSTEM_MONITOR
		</div>
		<div class="flex items-center gap-2 bg-black/40 px-2 py-1 rounded border border-white/5">
			<div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
			<span class="text-muted-foreground text-[10px]">ONLINE</span>
		</div>
	</div>

	<!-- CPU & Memory Grid -->
	<div class="grid grid-cols-2 gap-4 mb-5">
		<!-- CPU Block -->
		<div
			class="bg-black/40 p-4 rounded border border-white/5 hover:border-white/10 transition-colors"
		>
			<div class="flex justify-between items-center mb-2 text-muted-foreground">
				<span class="flex items-center gap-2"
					><Cpu size={12} class="text-primary" /> CPU_LOAD</span
				>
				<span class="text-primary font-bold">{stats.cpu.toFixed(0)}%</span>
			</div>
			<div class="h-1.5 w-full bg-graphite rounded-full overflow-hidden">
				<div
					class="h-full bg-primary transition-all duration-500 ease-out shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
					style="width: {stats.cpu}%"
				></div>
			</div>
			<div class="mt-2 flex justify-between text-[10px] text-muted-foreground/60">
				<span>CORES: 12</span>
				<span>{stats.temp.toFixed(0)}°C</span>
			</div>
		</div>

		<!-- RAM Block -->
		<div
			class="bg-black/40 p-4 rounded border border-white/5 hover:border-white/10 transition-colors"
		>
			<div class="flex justify-between items-center mb-2 text-muted-foreground">
				<span class="flex items-center gap-2"
					><HardDrive size={12} class="text-warning" /> MEMORY</span
				>
				<span class="text-warning font-bold">{stats.ram.toFixed(0)}%</span>
			</div>
			<div class="h-1.5 w-full bg-graphite rounded-full overflow-hidden">
				<div
					class="h-full bg-warning transition-all duration-500 ease-out shadow-[0_0_8px_hsl(var(--warning)/0.5)]"
					style="width: {stats.ram}%"
				></div>
			</div>
			<div class="mt-2 flex justify-between text-[10px] text-muted-foreground/60">
				<span>TOTAL: 64GB</span>
				<span>USED: 23GB</span>
			</div>
		</div>
	</div>

	<!-- Network Graph -->
	<div
		class="bg-black/40 p-4 rounded border border-white/5 mb-4 relative hover:border-white/10 transition-colors"
	>
		<div class="flex justify-between items-center mb-3 text-muted-foreground z-10 relative">
			<span class="flex items-center gap-2"
				><Wifi size={12} class="text-blue-400" /> NET_TRAFFIC</span
			>
			<div class="flex gap-3 text-[10px]">
				<span class="text-blue-400">▼ {stats.download.toFixed(1)} MB/s</span>
				<span class="text-green-400">▲ {stats.upload.toFixed(1)} MB/s</span>
			</div>
		</div>

		<div class="h-20 w-full relative overflow-hidden border-b border-white/5">
			<!-- Grid lines -->
			<div
				class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[10px_10px]"
			></div>

			<svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 60">
				<defs>
					<linearGradient id="gradientUpload" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stop-color="#00ff9c" />
						<stop offset="100%" stop-color="transparent" />
					</linearGradient>
					<linearGradient id="gradientDownload" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stop-color="#3b82f6" />
						<stop offset="100%" stop-color="transparent" />
					</linearGradient>
				</defs>
				<!-- Download line (blue) -->
				<path
					d={downloadPath}
					fill="none"
					stroke="#3b82f6"
					stroke-width="2"
					vector-effect="non-scaling-stroke"
					opacity="0.7"
				/>
				<path
					d={`${downloadPath} V 60 H 0 Z`}
					fill="url(#gradientDownload)"
					opacity="0.1"
				/>
				<!-- Upload line (green) -->
				<path
					d={uploadPath}
					fill="none"
					stroke="#00ff9c"
					stroke-width="2"
					vector-effect="non-scaling-stroke"
					opacity="0.8"
				/>
				<path
					d={`${uploadPath} V 60 H 0 Z`}
					fill="url(#gradientUpload)"
					opacity="0.15"
				/>
			</svg>
		</div>
	</div>

	<!-- Active Processes -->
	<div class="bg-black/40 p-4 rounded border border-white/5">
		<div class="flex items-center gap-2 text-muted-foreground mb-3">
			<Server size={12} class="text-purple-400" /> ACTIVE_PROCESSES
		</div>
		<div class="space-y-1.5 text-[10px] font-mono text-muted-foreground/80">
			<div class="flex justify-between hover:bg-white/5 px-1 rounded cursor-default">
				<span class="text-muted-foreground"> kernel_task</span>
				<span class="text-green-500">RUNNING</span>
			</div>
			<div class="flex justify-between hover:bg-white/5 px-1 rounded cursor-default">
				<span class="text-muted-foreground"> svelte_renderer</span>
				<span class="text-green-500">RUNNING</span>
			</div>
			<div class="flex justify-between hover:bg-white/5 px-1 rounded cursor-default">
				<span class="text-muted-foreground"> neural_link_svc</span>
				<span class="text-yellow-500">STANDBY</span>
			</div>
		</div>
	</div>

	<div
		class="mt-4 pt-3 border-t border-graphite flex justify-between text-[10px] text-muted-foreground/60"
	>
		<div class="flex items-center gap-1.5">
			<ShieldCheck size={10} class="text-green-500" /> FIREWALL: ACTIVE
		</div>
		<div class="font-mono text-muted-foreground/50">UPTIME: 14:22:09</div>
	</div>
</div>
