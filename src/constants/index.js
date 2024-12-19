import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	anime_website,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mazegame,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	svelte,
	django,
	cpp,
	photographer_website,
	django_docme,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Svelte/kit Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "C++ Developer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "Svelte/kit",
		icon: svelte,
	},
	{
		name: "Django",
		icon: django,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "C++",
		icon: cpp,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	// {
	// 	title: "React.js Developer",
	// 	company_name: "Starbucks",
	// 	icon: starbucks,
	// 	iconBg: "#383E56",
	// 	date: "March 2020 - April 2021",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// },
];

const testimonials = [
	// {
	// 	testimonial:
	// 		"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
	// 	name: "Sara Lee",
	// 	designation: "CFO",
	// 	company: "Acme Co",
	// 	image: "https://randomuser.me/api/portraits/women/4.jpg",
	// },
];

const projects = [
	{
		name: "Maze Game",
		description:
			"Maze Game is a 2D puzzle game where players navigate procedurally generated mazes, solving challenges to reach the exit. Built with C++ and Raylib, it features dynamic difficulties and smooth gameplay.",
		tags: [
			{
				name: "RAYLib",
				color: "blue-text-gradient",
			},
			{
				name: "C++",
				color: "green-text-gradient",
			},
			{
				name: "OOP",
				color: "pink-text-gradient",
			},
		],
		image: mazegame,
		source_code_link: "https://github.com/regisx001/maze_game",
	},
	{
		name: "Anime Website",
		description:
			"An elegant anime platform combining modern technologies for a responsive, fast, and visually stunning experience—stream the latest episodes and explore timeless classics effortlessly.",
		tags: [
			{
				name: "Svelte",
				color: "orange-text-gradient",
			},
			{
				name: "typescript",
				color: "blue-text-gradient",
			},
			{
				name: "Tailwindcss",
				color: "pink-text-gradient",
			},
			{
				name: "Anime",
				color: "indigo-text-gradient",
			},
		],
		image: anime_website,
		source_code_link: "https://github.com/regisx001/animes",
	},
	{
		name: "Photographer Portfolio",
		description:
			"A visual journey through my lens—featuring a collection of stunning photos, all displayed with a clean, responsive design powered by Svelte and Tailwind.",
		tags: [
			{
				name: "Svelte",
				color: "orange-text-gradient",
			},
			{
				name: "typescript",
				color: "blue-text-gradient",
			},
			{
				name: "Tailwindcss",
				color: "pink-text-gradient",
			},
			{
				name: "Camera",
				color: "green-text-gradient",
			},
		],
		image: photographer_website,
		source_code_link: "https://github.com/regisx001/h1roune",
	},
	{
		name: "Django Package",
		description:
			"A Django package that simplified the process of making documentation for Django Api  from the admin panel directly.",
		tags: [
			{
				name: "Django",
				color: "green-text-gradient",
			},
			{
				name: "svelte",
				color: "orange-text-gradient",
			},
			{
				name: "Tailwindcss",
				color: "blue-text-gradient",
			},
		],
		image: django_docme,
		source_code_link: "https://github.com/regisx001/django-docme",
	},
	{
		name: "Django Package",
		description:
			"A Django package that simplified the process of making documentation for Django Api  from the admin panel directly.",
		tags: [
			{
				name: "Django",
				color: "green-text-gradient",
			},
			{
				name: "svelte",
				color: "orange-text-gradient",
			},
			{
				name: "Tailwindcss",
				color: "blue-text-gradient",
			},
		],
		image: django_docme,
		source_code_link: "https://github.com/regisx001/django-docme",
	},
	// {
	// 	name: "Job IT",
	// 	description:
	// 		"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "restapi",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "scss",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: jobit,
	// 	source_code_link: "https://github.com/",
	// },
	// {
	// 	name: "Trip Guide",
	// 	description:
	// 		"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
	// 	tags: [
	// 		{
	// 			name: "nextjs",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "supabase",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: tripguide,
	// 	source_code_link: "https://github.com/",
	// },
];

export { services, technologies, experiences, testimonials, projects };
