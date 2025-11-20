import type { Project } from '$lib/types';

export const PROJECTS: Project[] = [
	{
		id: '1',
		title: 'Maze Game',
		description:
			'Maze Game is a 2D puzzle game where players navigate procedurally generated mazes, solving challenges to reach the exit. Built with C++ and Raylib, it features dynamic difficulties and smooth gameplay.',
		tech: ['C++', 'RAYLib', 'OOP', 'Game Dev'],
		type: 'dev',
		metrics: 'Procedural Generation',
		status: 'online'
	},
	{
		id: '2',
		title: 'Anime Website',
		description:
			'An elegant anime platform combining modern technologies for a responsive, fast, and visually stunning experience—stream the latest episodes and explore timeless classics effortlessly.',
		tech: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Anime API'],
		type: 'dev',
		metrics: 'Real-time Streaming',
		status: 'online'
	},
	{
		id: '3',
		title: 'Photographer Portfolio',
		description:
			'A visual journey through my lens—featuring a collection of stunning photos, all displayed with a clean, responsive design powered by Svelte and Tailwind.',
		tech: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Photography'],
		type: 'dev',
		metrics: 'Image Optimized',
		status: 'online'
	},
	{
		id: '4',
		title: 'Django DocMe',
		description:
			'A Django package that simplified the process of making documentation for Django API from the admin panel directly.',
		tech: ['Django', 'Python', 'Svelte', 'Tailwind CSS'],
		type: 'hybrid',
		metrics: 'Auto-documentation',
		status: 'online'
	},
	{
		id: '5',
		title: 'Science Week 2025',
		description:
			'Science Week 2025 – Official Event Web Platform for managing and showcasing science events and activities.',
		tech: ['SvelteKit', 'ShadCN/UI', 'Tailwind CSS', 'TypeScript'],
		type: 'dev',
		metrics: 'Event Management',
		status: 'online'
	}
];
