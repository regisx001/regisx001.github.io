export interface CareerEntry {
	id: string;
	role: string;
	company: string;
	period: string;
	location: string;
	type: 'ml' | 'dev' | 'hybrid';
	description: string;
	achievements: string[];
	tech: string[];
}

export const CAREER_DATA: CareerEntry[] = [
	{
		id: '1',
		role: 'Full Stack Developer',
		company: 'Freelance',
		period: '2023 - Present',
		location: 'Remote',
		type: 'dev',
		description:
			'Building modern web applications and platforms using cutting-edge technologies, focusing on clean architecture and exceptional user experiences.',
		achievements: [
			'Developed 5+ production-ready web applications using SvelteKit and TypeScript',
			'Created Django package for automated API documentation (django-docme)',
			'Built high-performance game engine using C++ and Raylib'
		],
		tech: ['SvelteKit', 'TypeScript', 'Django', 'C++', 'Tailwind CSS', 'MongoDB']
	},
	{
		id: '2',
		role: 'Web Developer',
		company: 'Science Week 2025',
		period: '2024 - 2025',
		location: 'Event Project',
		type: 'dev',
		description:
			'Developed official event web platform for Science Week 2025, managing event information and participant engagement.',
		achievements: [
			'Architected event management system with SvelteKit',
			'Implemented responsive UI with ShadCN/UI components',
			'Optimized performance for high-traffic event periods'
		],
		tech: ['SvelteKit', 'ShadCN/UI', 'TypeScript', 'Tailwind CSS']
	},
	{
		id: '3',
		role: 'Backend Developer',
		company: 'Personal Projects',
		period: '2022 - 2023',
		location: 'Remote',
		type: 'hybrid',
		description:
			'Focused on backend development and API design, creating robust and scalable server-side applications.',
		achievements: [
			'Built Django REST APIs with comprehensive documentation',
			'Developed custom Django packages for code reusability',
			'Implemented database optimization strategies'
		],
		tech: ['Django', 'Python', 'MongoDB', 'Node.js', 'Docker']
	},
	{
		id: '4',
		role: 'Game Developer',
		company: 'Independent',
		period: '2021 - 2022',
		location: 'Personal Project',
		type: 'dev',
		description:
			'Developed 2D puzzle game with procedurally generated mazes using C++ and Raylib framework.',
		achievements: [
			'Implemented procedural maze generation algorithms',
			'Created smooth gameplay mechanics with Raylib',
			'Applied OOP principles for clean, maintainable code'
		],
		tech: ['C++', 'Raylib', 'OOP', 'Game Development']
	}
];
