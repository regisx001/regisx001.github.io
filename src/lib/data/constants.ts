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
	{ cmd: 'ls', desc: 'List directory contents' },
	{ cmd: 'cd <dir>', desc: 'Change directory (projects, .., ~)' },
	{ cmd: 'cat <file>', desc: 'View file contents (README.md, info.txt, etc)' },
	{ cmd: 'clear', desc: 'Clear the terminal screen' },
	{ cmd: 'date', desc: 'Display current system time' },
	{ cmd: 'gui', desc: 'Switch to GUI mode' }
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
	email: 'zarqi.ezzoubair@gmail.com',
	github: 'https://github.com/regisx001',
	linkedin: 'https://linkedin.com/in/ezzoubair-zarqi',
	phone: '+212 640 892055',
	location: 'Ouezzane, Morocco'
};

// Projects with enhanced details for GUI modal
export const PROJECTS: Project[] = [
	{
		id: '1',
		name: 'Cyberforce Website',
		description: 'CyberForce — FSTT’s cybersecurity club website (est. 2025) for events, resources, and member management; built with Svelte and PocketBase.',
		longDescription: 'CyberForce — the official cybersecurity club of FSTT (Faculté des Sciences et Techniques de Tanger), established in 2025. This repo hosts the club website and member hub to announce events, share learning resources, showcase projects, and manage memberships. Built with Svelte/SvelteKit and TypeScript on the frontend (shadcn-svelte, Tailwind) with PocketBase powering auth and lightweight data storage.',
		features : [ 'Responsive SvelteKit frontend with accessible shadcn-svelte UI components', 'PocketBase-powered authentication and role-based admin management', 'Event listing, RSVP, and calendar integration for workshops and meetups', 'Resource library with categories, search, and downloadable materials', 'Project showcases with Markdown support and image galleries', 'Admin dashboard for managing members, events, and resources', 'Real-time announcements and notifications for members', 'Dark mode and theme customization via TailwindCSS', 'Performance optimizations: SSR, code-splitting, and fast page transitions', 'i18n-ready structure for multilingual support' ],
		tech: ['Sveltekit', 'Shadcn/Svelte', 'Pocketbase', 'Web Developement'],
		status: 'ACTIVE',
		github: 'https://github.com/regisx001/maze_game',
		demo: 'https://private-user-images.githubusercontent.com/98271602/397057605-94b07585-b81d-4ecb-b276-f338f212434f.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM4MjE1NjksIm5iZiI6MTc2MzgyMTI2OSwicGF0aCI6Ii85ODI3MTYwMi8zOTcwNTc2MDUtOTRiMDc1ODUtYjgxZC00ZWNiLWIyNzYtZjMzOGYyMTI0MzRmLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTIyVDE0MjEwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFlZGZkYzU5MzMwY2ZiN2M0N2EwNzY4MmViZDljODExYjc2MGUzYWIwNjZjYTkxYTVmMjBiN2Y5OWY0YTY1ZWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.AHTQNwGbw2mKRtDQIIpAstMBRXZplOUdTrDPum9-3Bo',
		featuredImage: '/projects/cyberforce/featured-cyberforce.png',
		screenshots: [
			'/projects/cyberforce/featured-cyberforce.png',
			'/projects/cyberforce/cyberforce-screenshot-1.png',
			'/projects/cyberforce/cyberforce-screenshot-2.png',
			'/projects/cyberforce/cyberforce-screenshot-3.png',
			'/projects/cyberforce/cyberforce-screenshot-4.png',
			'/projects/cyberforce/cyberforce-screenshot-5.png',
			'/projects/cyberforce/cyberforce-screenshot-6.png',
			'/projects/cyberforce/cyberforce-screenshot-7.png',
			'/projects/cyberforce/cyberforce-screenshot-8.png',
			'/projects/cyberforce/cyberforce-screenshot-9.png',
			'/projects/cyberforce/cyberforce-screenshot-10.png',
			'/projects/cyberforce/cyberforce-screenshot-11.png',
		]
	},
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
		github: 'https://github.com/regisx001/maze_game',
		demo: 'https://private-user-images.githubusercontent.com/98271602/397057605-94b07585-b81d-4ecb-b276-f338f212434f.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM4MjE1NjksIm5iZiI6MTc2MzgyMTI2OSwicGF0aCI6Ii85ODI3MTYwMi8zOTcwNTc2MDUtOTRiMDc1ODUtYjgxZC00ZWNiLWIyNzYtZjMzOGYyMTI0MzRmLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTIyVDE0MjEwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFlZGZkYzU5MzMwY2ZiN2M0N2EwNzY4MmViZDljODExYjc2MGUzYWIwNjZjYTkxYTVmMjBiN2Y5OWY0YTY1ZWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.AHTQNwGbw2mKRtDQIIpAstMBRXZplOUdTrDPum9-3Bo',
		featuredImage: '/projects/maze-game/featured-maze-game.png',
		screenshots: [
			'/projects/maze-game/featured-maze-game.png',
			'/projects/maze-game/maze-game-screenshot-1.png',
			'/projects/maze-game/maze-game-screenshot-2.png',
			'/projects/maze-game/maze-game-screenshot-3.png',
			'/projects/maze-game/maze-game-screenshot-4.png',
			'/projects/maze-game/maze-game-screenshot-5.png'
		]
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
		status: 'ARCHIVED',
		github: 'https://github.com/regisx001/animes',
		demo: '#',
		featuredImage: '/projects/anime-website/featured-anime-website.png',
		screenshots: [
			'/projects/anime-website/featured-anime-website.png'
		]
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
		status: 'ARCHIVED',
		github: 'https://github.com/regisx001',
		demo: '#',
		featuredImage: '/projects/photographer-portfolio/featured-photographer-portfolio.png',
		screenshots: [
			'/projects/photographer-portfolio/featured-photographer-portfolio.png'
		]
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
		status: 'ARCHIVED',
		github: 'https://github.com/regisx001',
		demo: '#',
		featuredImage: '/projects/django-docme/featured-dajngo-docme.png',
		screenshots: [
		'/projects/django-docme/featured-dajngo-docme.png'
		]
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
		github: 'https://github.com/regisx001/scienceweek',
		demo: 'https://regisx001.github.io/scienceweek/',
		featuredImage: '/projects/science-week-2025/featured-scienceweek.png',
		screenshots: [
			'/projects/science-week-2025/featured-scienceweek.png',
			'/projects/science-week-2025/scienceweek-screenshot-1.png',
			'/projects/science-week-2025/scienceweek-screenshot-2.png',
			'/projects/science-week-2025/scienceweek-screenshot-3.png',
			'/projects/science-week-2025/scienceweek-screenshot-4.png',
		]
	}
];

// Categorized skills for GUI view
export const SKILL_CATEGORIES = [
	{
		name: 'Languages',
		skills: [
			{ name: 'Java', level: 'expert' as const },
			{ name: 'JavaScript/TypeScript', level: 'expert' as const },
			{ name: 'Python', level: 'advanced' as const },
			{ name: 'C++', level: 'advanced' as const },
			{ name: 'SQL', level: 'advanced' as const }
		]
	},
	{
		name: 'Frameworks & Technologies',
		skills: [
			{ name: 'Spring Boot', level: 'expert' as const },
			{ name: 'SvelteKit', level: 'expert' as const },
			{ name: 'React', level: 'advanced' as const },
			{ name: 'Django', level: 'advanced' as const },
			{ name: 'Node.js', level: 'advanced' as const }
		]
	},
	{
		name: 'Developer Tools',
		skills: [
			{ name: 'Git', level: 'expert' as const },
			{ name: 'VS Code', level: 'expert' as const },
			{ name: 'Docker', level: 'advanced' as const },
			{ name: 'Postman', level: 'advanced' as const },
			{ name: 'Github Actions', level: 'intermediate' as const }
		]
	},
	{
		name: 'Databases & AI',
		skills: [
			{ name: 'MySQL', level: 'advanced' as const },
			{ name: 'PostgreSQL', level: 'advanced' as const },
			{ name: 'ChromaDB', level: 'intermediate' as const },
			{ name: 'RAG', level: 'advanced' as const },
			{ name: 'LangChain', level: 'advanced' as const }
		]
	}
];

// Experience/Career data for GUI view
export const EXPERIENCE = [
	{
		id: '1',
		title: 'MEAN Stack Developer',
		company: 'Smart Automation Technologies',
		period: 'Apr. 2025 - Sep. 2025',
		description: 'Tangier, Morocco - Developed complete web platform using MEAN stack with intelligent chatbot integration.',
		achievements: [
			'Analyzed functional requirements and conducted comparative study of competing platforms',
			'Modeled platform architecture using UML diagrams and designed mockups for user interface',
			'Complete development of the platform using MEAN stack',
			'Created intelligent chatbot based on RAG (Retrieval-Augmented Generation) method to assist users'
		]
	},
	{
		id: '2',
		title: 'Full Stack Developer',
		company: 'Freelance Projects',
		period: '2024 - Present',
		description: 'Junior full stack developer specializing in SvelteKit, Java Spring Boot and Artificial Intelligence.',
		achievements: [
			'Developed complete web platforms with modern architectures and interfaces',
			'Integrated RAG chatbots for intelligent user assistance',
			'Portfolio including e-commerce, intelligent blogs and data processing applications'
		]
	}
];

// Education data for CV section
export const EDUCATION = [
	{
		id: '1',
		degree: 'Master in Artificial Intelligence and Data Science (IASD)',
		institution: 'Faculty of Science and Technology',
		period: 'Sep. 2025 - Present',
		description: 'Tangier, Morocco',
		achievements: [
			'Specialized training in Artificial Intelligence and Data Science',
			'Advanced skills in machine learning and deep learning',
			'Big data processing and development of innovative AI solutions'
		]
	},
	{
		id: '2',
		degree: 'Bachelor in Science and Technology',
		institution: 'Faculty of Science and Technology',
		period: 'Sep. 2024 - Jun. 2025',
		description: 'IDAI Track - Software Application Development Engineering, Tangier, Morocco',
		achievements: [
			'Training focused on design, development and management of innovative IT solutions',
			'Specialization in Software Application Development Engineering'
		]
	},
	{
		id: '3',
		degree: 'DEUST in Science and Technology',
		institution: 'Faculty of Science and Technology',
		period: 'Sep. 2021 - Jun. 2024',
		description: 'Common Core GE-GM, Tangier, Morocco',
		achievements: [
			'Solid foundational training in fundamental sciences',
			'General engineering and mechanical techniques'
		]
	}
];

// Certifications & Relevant Coursework
export const CERTIFICATIONS = [
	{
		id: '1',
		name: 'Design Patterns',
		issuer: 'Faculty of Science and Technology',
		date: '2024-2025',
		credential: 'Coursework'
	},
	{
		id: '2',
		name: 'Software Engineering',
		issuer: 'Faculty of Science and Technology',
		date: '2024-2025',
		credential: 'Coursework'
	},
	{
		id: '3',
		name: 'Artificial Intelligence',
		issuer: 'Faculty of Science and Technology',
		date: '2025',
		credential: 'Coursework'
	},
	{
		id: '4',
		name: 'Database Management Systems',
		issuer: 'Faculty of Science and Technology',
		date: '2024',
		credential: 'Coursework'
	},
	{
		id: '5',
		name: 'Algorithm Analysis',
		issuer: 'Faculty of Science and Technology',
		date: '2024',
		credential: 'Coursework'
	},
	{
		id: '6',
		name: 'UML Modeling',
		issuer: 'Faculty of Science and Technology',
		date: '2024',
		credential: 'Coursework'
	}
];
