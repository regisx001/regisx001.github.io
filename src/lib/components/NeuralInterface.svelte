<script lang="ts">
	import { onMount } from 'svelte';
	import type { ChatMessage } from '$lib/types';
	import { SystemStatus } from '$lib/types';
	import { Send, Terminal, Cpu } from '@lucide/svelte';
	import { cn } from '$lib/utils';

	let messages = $state<ChatMessage[]>([
		{
			role: 'model',
			text: 'SYSTEM_ONLINE. Interface ready. Query the architecture.',
			timestamp: Date.now()
		}
	]);
	let input = $state('');
	let status = $state<SystemStatus>(SystemStatus.IDLE);
	let scrollContainer: HTMLDivElement;

	$effect(() => {
		if (messages.length && scrollContainer) {
			scrollContainer.scrollTop = scrollContainer.scrollHeight;
		}
	});

	async function sendMessageToSystem(message: string): Promise<string> {
		// Mock response - replace with actual API call
		await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000));

		const responses = [
			'Processing query through neural layers...',
			'System architecture optimized for hybrid ML/Dev workflows.',
			'Training pipeline: Data → Preprocessing → Model → Inference.',
			'Frontend leverages React/Svelte with real-time state management.',
			'Backend APIs built with FastAPI and distributed computing frameworks.',
			'Vector databases enable semantic search at scale.',
			'CUDA kernels accelerate tensor operations on GPU clusters.'
		];

		return responses[Math.floor(Math.random() * responses.length)];
	}

	async function handleSend() {
		if (!input.trim() || status === SystemStatus.PROCESSING) return;

		const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
		messages = [...messages, userMsg];
		input = '';
		status = SystemStatus.PROCESSING;

		const responseText = await sendMessageToSystem(userMsg.text);

		const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
		messages = [...messages, modelMsg];
		status = SystemStatus.IDLE;
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			handleSend();
		}
	}
</script>

<div
	class="flex h-[500px] w-full max-w-md flex-col overflow-hidden rounded-lg border border-border bg-background shadow-2xl"
>
	<!-- Header -->
	<div class="flex items-center justify-between border-b border-accent/20 bg-card p-3">
		<div class="flex items-center space-x-2 text-accent">
			<Terminal size={16} />
			<span class="font-mono text-sm tracking-widest">NEURAL_INTERFACE</span>
		</div>
		<div class="flex items-center space-x-2">
			<span
				class={cn(
					'h-2 w-2 rounded-full',
					status === SystemStatus.PROCESSING ? 'animate-pulse bg-yellow-500' : 'bg-green-500'
				)}
			></span>
			<span class="font-mono text-[10px] text-muted-foreground">{status}</span>
		</div>
	</div>

	<!-- Chat Area -->
	<div
		bind:this={scrollContainer}
		class="relative flex-1 space-y-4 overflow-y-auto bg-background p-4 font-mono text-sm"
	>
		<div
			class="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,hsl(var(--accent))_25%,hsl(var(--accent))_26%,transparent_27%,transparent_74%,hsl(var(--accent))_75%,hsl(var(--accent))_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,hsl(var(--accent))_25%,hsl(var(--accent))_26%,transparent_27%,transparent_74%,hsl(var(--accent))_75%,hsl(var(--accent))_76%,transparent_77%,transparent)] bg-size-[30px_30px] opacity-5"
		></div>

		{#each messages as msg}
			<div class={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
				<div
					class={cn(
						'max-w-[85%] rounded-sm border p-3',
						msg.role === 'user'
							? 'border-primary/30 bg-primary/10 text-foreground'
							: 'border-accent/30 bg-accent/5 text-accent'
					)}
				>
					<p class="whitespace-pre-wrap">{msg.text}</p>
					<span class="mt-2 block text-[10px] opacity-50">
						{msg.role === 'user' ? '>> INPUT' : '>> OUTPUT'}
					</span>
				</div>
			</div>
		{/each}
		{#if status === SystemStatus.PROCESSING}
			<div class="flex justify-start">
				<div class="flex animate-pulse items-center gap-2 text-xs text-accent">
					<Cpu size={14} /> CALCULATING TENSORS...
				</div>
			</div>
		{/if}
	</div>

	<!-- Input -->
	<div class="flex items-center gap-2 border-t border-accent/20 bg-card p-3">
		<input
			type="text"
			bind:value={input}
			onkeydown={handleKeyDown}
			placeholder="Enter system query..."
			class="flex-1 border border-border bg-background p-2 font-mono text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-accent focus:outline-none"
		/>
		<button
			onclick={handleSend}
			class="border border-accent/50 bg-accent/10 p-2 text-accent transition-colors hover:bg-accent/20"
		>
			<Send size={16} />
		</button>
	</div>
</div>
