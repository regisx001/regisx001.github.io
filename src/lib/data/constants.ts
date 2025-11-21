import type { Project } from '$lib/types';

export const WELCOME_MESSAGE = `
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║   ███████╗ █████╗ ██████╗  ██████╗ ██╗                                        ║
║   ╚══███╔╝██╔══██╗██╔══██╗██╔═══██╗██║                                        ║
║     ███╔╝ ███████║██████╔╝██║   ██║██║                                        ║
║    ███╔╝  ██╔══██║██╔══██╗██║▄▄ ██║██║                                        ║
║   ███████╗██║  ██║██║  ██║╚██████╔╝██║                                        ║
║   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚══▀▀═╝ ╚═╝                                        ║
║                                                                               ║
║   ███████╗███████╗███████╗ ██████╗ ██╗   ██╗██████╗  █████╗  ██╗ ██████╗      ║
║   ██╔════╝╚══███╔╝╚══███╔╝██╔═══██╗██║   ██║██╔══██╗██╔══██╗ ██║ ██╔══██╗     ║
║   █████╗    ███╔╝   ███╔╝ ██║   ██║██║   ██║██████╔╝███████║ ██║ ██████╔╝     ║
║   ██╔══╝   ███╔╝   ███╔╝  ██║   ██║██║   ██║██╔══██╗██╔══██║ ██║ ██╔══██╗     ║
║   ███████╗███████╗███████╗╚██████╔╝╚██████╔╝██████╔╝██║  ██║ ██║ ██║  ██║     ║
║   ╚══════╝╚══════╝╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═╝ ╚═╝  ╚═╝     ║
║                                                                               ║
║   ACCESS GRANTED - TERMINAL v3.1.4                                            ║
║   Secure Shell Protocol Established                                           ║
║   CONNECTED TO HOST [ZARQI_EZZOUBAIR]                                         ║
║   ENCRYPTION: ACTIVATED (2048-bit)                                            ║
║   USER: GUEST_ACCESS                                                          ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝

Type 'help' to view available commands.
`;

// Commands list for help view
export const COMMANDS = [
	{ cmd: 'help', desc: 'Display available commands' },
	{ cmd: 'about', desc: 'Show information about the operator' },
	{ cmd: 'projects', desc: 'List deployed systems' },
	{ cmd: 'contact', desc: 'Display contact information' },
	{ cmd: 'clear', desc: 'Clear the terminal screen' },
	{ cmd: 'date', desc: 'Display current system time' },
	{ cmd: 'gui', desc: 'Switch to GUI mode' },
	{ cmd: 'cli', desc: 'Switch to terminal mode' }
];

// Skills list for About view
export const SKILLS = [
	'SvelteKit',
	'TypeScript',
	'Django',
	'C++',
	'Tailwind CSS',
	'MongoDB',
	'Node.js',
	'Game Development'
];

// Contact information
export const CONTACT_INFO = {
	email: 'ezzoubairzarqi@gmail.com',
	github: 'https://github.com/regisx001',
	linkedin: 'https://linkedin.com/in/zarqi-ezzoubair',
	matrix: '@zarqi:matrix.org'
};

// Projects with enhanced details for GUI modal
export const PROJECTS: Project[] = [
	{
		id: '1',
		name: 'Maze Game',
		description: 'Maze Game is a 2D puzzle game where players navigate procedurally generated mazes, solving challenges to reach the exit.',
		longDescription: 'A sophisticated 2D puzzle game built with C++ and Raylib, featuring procedurally generated mazes with dynamic difficulty scaling. The game implements smooth gameplay mechanics, efficient rendering, and object-oriented design patterns for maintainability and extensibility.',
		features: [
			'Procedural maze generation using recursive backtracking',
			'Dynamic difficulty adjustment based on player performance',
			'Smooth 60 FPS gameplay with Raylib engine',
			'Object-oriented architecture for clean, maintainable code'
		],
		tech: ['C++', 'Raylib', 'OOP', 'Game Development'],
		status: 'ACTIVE',
		github: 'https://github.com/regisx001',
		demo: '#'
	},
	{
		id: '2',
		name: 'Anime Website',
		description: 'An elegant anime platform combining modern technologies for a responsive, fast, and visually stunning experience.',
		longDescription: 'A modern anime streaming platform built with SvelteKit, featuring real-time episode updates, responsive design, and seamless user experience. The platform integrates with anime APIs to provide up-to-date content while maintaining excellent performance and accessibility.',
		features: [
			'Real-time anime episode streaming',
			'Responsive design for all device sizes',
			'Integration with multiple anime APIs',
			'Fast loading with SvelteKit optimizations'
		],
		tech: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Anime API'],
		status: 'ACTIVE',
		github: 'https://github.com/regisx001',
		demo: '#'
	},
	{
		id: '3',
		name: 'Photographer Portfolio',
		description: 'A visual journey through my lens—featuring a collection of stunning photos with clean, responsive design.',
		longDescription: 'An elegant photography portfolio showcasing professional work through a minimalist, image-focused interface. Built with Svelte and Tailwind CSS, the site features optimized image loading, smooth transitions, and a gallery system designed to highlight the photography.',
		features: [
			'Optimized image loading with lazy loading',
			'Responsive grid gallery layout',
			'Lightbox viewer with keyboard navigation',
			'Clean, minimal UI to highlight photography'
		],
		tech: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Photography'],
		status: 'ACTIVE',
		github: 'https://github.com/regisx001',
		demo: '#'
	},
	{
		id: '4',
		name: 'Django DocMe',
		description: 'A Django package that simplified the process of making documentation for Django API from the admin panel.',
		longDescription: 'A powerful Django package that automates API documentation generation directly from the Django admin panel. DocMe analyzes your models, serializers, and views to create comprehensive, interactive documentation with zero configuration required.',
		features: [
			'Auto-generate API documentation from Django models',
			'Interactive documentation interface',
			'Zero-configuration setup',
			'Integration with Django admin panel'
		],
		tech: ['Django', 'Python', 'Svelte', 'Tailwind CSS'],
		status: 'ACTIVE',
		github: 'https://github.com/regisx001',
		demo: '#'
	},
	{
		id: '5',
		name: 'Science Week 2025',
		description: 'Official Event Web Platform for managing and showcasing science events and activities.',
		longDescription: 'A comprehensive event management platform built for Science Week 2025, featuring event scheduling, participant registration, and information display. The platform uses ShadCN/UI components for a polished interface and handles high traffic during event periods.',
		features: [
			'Event scheduling and management system',
			'Participant registration with form validation',
			'Responsive design with ShadCN/UI components',
			'Performance optimized for high traffic'
		],
		tech: ['SvelteKit', 'ShadCN/UI', 'Tailwind CSS', 'TypeScript'],
		status: 'ACTIVE',
		github: 'https://github.com/regisx001',
		demo: '#'
	}
];

// Categorized skills for GUI view
export const SKILL_CATEGORIES = [
	{
		name: 'Frontend Engineering',
		skills: [
			{ name: 'SvelteKit', level: 'expert' as const },
			{ name: 'TypeScript', level: 'expert' as const },
			{ name: 'Tailwind CSS', level: 'expert' as const },
			{ name: 'Svelte', level: 'expert' as const },
			{ name: 'HTML5', level: 'expert' as const },
			{ name: 'CSS3', level: 'expert' as const }
		]
	},
	{
		name: 'Backend Systems',
		skills: [
			{ name: 'Django', level: 'advanced' as const },
			{ name: 'Python', level: 'advanced' as const },
			{ name: 'Node.js', level: 'advanced' as const },
			{ name: 'MongoDB', level: 'intermediate' as const },
			{ name: 'REST APIs', level: 'expert' as const },
			{ name: 'Docker', level: 'intermediate' as const }
		]
	},
	{
		name: 'Core Concepts',
		skills: [
			{ name: 'Game Development', level: 'advanced' as const },
			{ name: 'C++', level: 'advanced' as const },
			{ name: 'OOP', level: 'expert' as const },
			{ name: 'System Design', level: 'advanced' as const },
			{ name: 'Git', level: 'expert' as const },
			{ name: 'Figma', level: 'intermediate' as const }
		]
	},
	{
		name: 'Tools & Frameworks',
		skills: [
			{ name: 'Raylib', level: 'advanced' as const },
			{ name: 'ShadCN/UI', level: 'expert' as const },
			{ name: 'Anime APIs', level: 'intermediate' as const },
			{ name: 'Package Development', level: 'advanced' as const }
		]
	}
];

// Experience/Career data for GUI view
export const EXPERIENCE = [
	{
		id: '1',
		title: 'Full Stack Developer',
		company: 'Freelance',
		period: '2023 - Present',
		description: 'Building modern web applications and platforms using cutting-edge technologies, focusing on clean architecture and exceptional user experiences.',
		achievements: [
			'Developed 5+ production-ready web applications using SvelteKit and TypeScript',
			'Created Django package for automated API documentation (django-docme)',
			'Built high-performance game engine using C++ and Raylib'
		]
	},
	{
		id: '2',
		title: 'Web Developer',
		company: 'Science Week 2025',
		period: '2024 - 2025',
		description: 'Developed official event web platform for Science Week 2025, managing event information and participant engagement.',
		achievements: [
			'Architected event management system with SvelteKit',
			'Implemented responsive UI with ShadCN/UI components',
			'Optimized performance for high-traffic event periods'
		]
	},
	{
		id: '3',
		title: 'Backend Developer',
		company: 'Personal Projects',
		period: '2022 - 2023',
		description: 'Focused on backend development and API design, creating robust and scalable server-side applications.',
		achievements: [
			'Built Django REST APIs with comprehensive documentation',
			'Developed custom Django packages for code reusability',
			'Implemented database optimization strategies'
		]
	},
	{
		id: '4',
		title: 'Game Developer',
		company: 'Independent',
		period: '2021 - 2022',
		description: 'Developed 2D puzzle game with procedurally generated mazes using C++ and Raylib framework.',
		achievements: [
			'Implemented procedural maze generation algorithms',
			'Created smooth gameplay mechanics with Raylib',
			'Applied OOP principles for clean, maintainable code'
		]
	}
];
