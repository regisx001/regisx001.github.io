<script lang="ts">
	import { onMount } from 'svelte';

	let countdown = $state({ days: 0, hours: 0, minutes: 0, seconds: 0 });
	let glitchText = $state('COMING SOON');

	onMount(() => {
		// Countdown to a future date (30 days from now)
		const targetDate = new Date();
		targetDate.setDate(targetDate.getDate() + 30);

		const updateCountdown = () => {
			const now = new Date().getTime();
			const distance = targetDate.getTime() - now;

			countdown = {
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
				minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((distance % (1000 * 60)) / 1000)
			};
		};

		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);

		// Glitch effect
		const glitchInterval = setInterval(() => {
			const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
			const original = 'COMING SOON';
			let iterations = 0;

			const glitchEffect = setInterval(() => {
				glitchText = original
					.split('')
					.map((char, index) => {
						if (index < iterations) return original[index];
						return chars[Math.floor(Math.random() * chars.length)];
					})
					.join('');

				if (iterations >= original.length) {
					clearInterval(glitchEffect);
					glitchText = original;
				}
				iterations += 1 / 3;
			}, 50);
		}, 5000);

		return () => {
			clearInterval(interval);
			clearInterval(glitchInterval);
		};
	});
</script>

<div
	class="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
>
	<!-- Animated grid background -->
	<div class="absolute inset-0 opacity-20">
		<div class="grid-background"></div>
	</div>

	<!-- Scanline effect -->
	<div class="scanline"></div>

	<!-- Main content -->
	<div class="relative z-10 text-center">
		<!-- Logo/Title -->
		<div class="mb-8">
			<h1
				class="glitch mb-4 font-mono text-6xl font-bold tracking-wider text-primary md:text-8xl"
				data-text={glitchText}
			>
				{glitchText}
			</h1>
			<div class="mx-auto h-1 w-32 bg-linear-to-r from-transparent via-accent to-transparent">
			</div>
		</div>

		<!-- Subtitle -->
		<p class="mb-12 font-mono text-lg text-muted-foreground md:text-xl">
			Something <span class="text-primary">extraordinary</span> is being built...
		</p>

		<!-- Countdown -->
		<div class="mb-12 grid grid-cols-4 gap-4 md:gap-8">
			{#each Object.entries(countdown) as [label, value]}
				<div class="countdown-box">
					<div
						class="relative mb-2 overflow-hidden rounded-lg border border-primary/30 bg-background/50 p-4 backdrop-blur-sm md:p-6"
					>
						<div
							class="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"
						></div>
						<div class="relative font-mono text-3xl font-bold text-primary md:text-5xl">
							{value.toString().padStart(2, '0')}
						</div>
					</div>
					<div class="text-xs uppercase tracking-widest text-muted-foreground md:text-sm">
						{label}
					</div>
				</div>
			{/each}
		</div>

		<!-- Status indicators -->
		<div class="mb-8 flex items-center justify-center gap-6 font-mono text-sm">
			<div class="flex items-center gap-2">
				<div class="h-2 w-2 animate-pulse rounded-full bg-accent shadow-[0_0_10px_currentColor]">
				</div>
				<span class="text-muted-foreground">SYSTEMS ONLINE</span>
			</div>
			<div class="h-4 w-px bg-border"></div>
			<div class="flex items-center gap-2">
				<div class="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_10px_currentColor]">
				</div>
				<span class="text-muted-foreground">DEVELOPMENT MODE</span>
			</div>
		</div>

		<!-- Email notification -->
		<div class="mx-auto max-w-md">
			<form class="flex gap-2">
				<input
					type="email"
					placeholder="Enter your email"
					class="flex-1 rounded-lg border border-primary/30 bg-background/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
				/>
				<button
					type="submit"
					class="rounded-lg border border-primary bg-primary/10 px-6 py-3 font-mono text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-background"
				>
					NOTIFY ME
				</button>
			</form>
		</div>

		<!-- Footer -->
		<div class="mt-12 font-mono text-xs text-muted-foreground">
			<p>© 2025 - ALL SYSTEMS INITIALIZING</p>
		</div>
	</div>

	<!-- Floating particles -->
	<div class="particles">
		{#each Array(20) as _, i}
			<div
				class="particle"
				style="--delay: {i * 0.5}s; --duration: {15 + Math.random() * 10}s; --x: {Math.random() * 100}%"
			></div>
		{/each}
	</div>
</div>

<style>
	.grid-background {
		background-image: linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
			linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px);
		background-size: 50px 50px;
		animation: grid-move 20s linear infinite;
		height: 200%;
		width: 200%;
	}

	@keyframes grid-move {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(-50px, -50px);
		}
	}

	.scanline {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to bottom,
			transparent 50%,
			hsl(var(--primary) / 0.02) 50%,
			transparent 51%
		);
		background-size: 100% 4px;
		animation: scanline 8s linear infinite;
		pointer-events: none;
	}

	@keyframes scanline {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(100%);
		}
	}

	.glitch {
		position: relative;
		text-shadow:
			0 0 10px hsl(var(--primary)),
			0 0 20px hsl(var(--primary)),
			0 0 30px hsl(var(--primary));
	}

	.glitch::before,
	.glitch::after {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.8;
	}

	.glitch::before {
		animation: glitch-1 2.5s infinite;
		color: hsl(var(--accent));
		z-index: -1;
	}

	.glitch::after {
		animation: glitch-2 3s infinite;
		color: hsl(var(--primary));
		z-index: -2;
	}

	@keyframes glitch-1 {
		0%,
		100% {
			transform: translate(0);
		}
		20% {
			transform: translate(-2px, 2px);
		}
		40% {
			transform: translate(-2px, -2px);
		}
		60% {
			transform: translate(2px, 2px);
		}
		80% {
			transform: translate(2px, -2px);
		}
	}

	@keyframes glitch-2 {
		0%,
		100% {
			transform: translate(0);
		}
		20% {
			transform: translate(2px, -2px);
		}
		40% {
			transform: translate(2px, 2px);
		}
		60% {
			transform: translate(-2px, -2px);
		}
		80% {
			transform: translate(-2px, 2px);
		}
	}

	.countdown-box {
		animation: float 3s ease-in-out infinite;
	}

	.countdown-box:nth-child(1) {
		animation-delay: 0s;
	}
	.countdown-box:nth-child(2) {
		animation-delay: 0.2s;
	}
	.countdown-box:nth-child(3) {
		animation-delay: 0.4s;
	}
	.countdown-box:nth-child(4) {
		animation-delay: 0.6s;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.particles {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
	}

	.particle {
		position: absolute;
		width: 2px;
		height: 2px;
		background: hsl(var(--primary));
		border-radius: 50%;
		bottom: -10px;
		left: var(--x);
		animation: particle-rise var(--duration) linear infinite;
		animation-delay: var(--delay);
		box-shadow: 0 0 10px hsl(var(--primary));
		opacity: 0.6;
	}

	@keyframes particle-rise {
		0% {
			transform: translateY(0) translateX(0);
			opacity: 0;
		}
		10% {
			opacity: 0.6;
		}
		90% {
			opacity: 0.6;
		}
		100% {
			transform: translateY(-100vh) translateX(50px);
			opacity: 0;
		}
	}
</style>
