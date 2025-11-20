export interface Service {
	id: string;
	title: string;
	description: string;
	icon: string;
}

export const SERVICES: Service[] = [
	{
		id: '1',
		title: 'Web Developer',
		description: 'Building modern, responsive web applications with cutting-edge technologies',
		icon: 'web'
	},
	{
		id: '2',
		title: 'SvelteKit Developer',
		description: 'Creating high-performance applications with Svelte and SvelteKit',
		icon: 'mobile'
	},
	{
		id: '3',
		title: 'Backend Developer',
		description: 'Developing robust server-side applications and RESTful APIs',
		icon: 'backend'
	},
	{
		id: '4',
		title: 'C++ Developer',
		description: 'Building high-performance applications and game engines',
		icon: 'creator'
	}
];
