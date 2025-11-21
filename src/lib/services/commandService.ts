import type { CommandResponse } from '$lib/types';
import { CONTACT_INFO } from '$lib/data/constants';
import HelpView from '$lib/components/views/HelpView.svelte';
import AboutView from '$lib/components/views/AboutView.svelte';
import ProjectsView from '$lib/components/views/ProjectsView.svelte';

export function executeCommand(input: string): CommandResponse {
	const args = input.trim().split(/\s+/);
	const command = args[0].toLowerCase();
	
	switch (command) {
		case 'help':
			return {
				type: 'component',
				content: HelpView
			};
		
		case 'clear':
		case 'cls':
			return {
				type: 'text',
				content: '',
				action: 'clear'
			};
		
		case 'about':
		case 'whoami':
			return {
				type: 'component',
				content: AboutView
			};
		
		case 'projects':
		case 'ls':
			return {
				type: 'component',
				content: ProjectsView
			};
		
		case 'contact':
			return {
				type: 'info',
				content: `
Communicate via secure channels:

Email:    ${CONTACT_INFO.email}
GitHub:   ${CONTACT_INFO.github}
LinkedIn: ${CONTACT_INFO.linkedin}
Matrix:   ${CONTACT_INFO.matrix}
				`.trim()
			};
		
		case 'date':
			return {
				type: 'info',
				content: new Date().toString()
			};
		
		case 'gui':
			return {
				type: 'success',
				content: 'Switching to GUI mode...',
				action: 'gui'
			};
		
		case 'cli':
			return {
				type: 'success',
				content: 'Already in CLI mode.'
			};
		
		default:
			return {
				type: 'error',
				content: `Command not found: ${command}. Type 'help' for available commands.`
			};
	}
}
