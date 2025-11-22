import type { CommandResponse } from '$lib/types';
import { CONTACT_INFO, PROJECTS } from '$lib/data/constants';
import HelpView from '$lib/components/views/HelpView.svelte';
import AboutView from '$lib/components/views/AboutView.svelte';
import ProjectsView from '$lib/components/views/ProjectsView.svelte';

export function executeCommand(input: string, currentPath: string = '~'): CommandResponse {
	const args = input.trim().split(/\s+/);
	const command = args[0].toLowerCase();
	
	switch (command) {
		case 'cd': {
			const target = args[1] || '~';
			
			// Handle going back to home
			if (target === '~' || target === '/') {
				return {
					type: 'success',
					content: '',
					action: 'cd',
					path: '~'
				};
			}
			
			// Handle going back
			if (target === '..' || target === '../') {
				if (currentPath.includes('/')) {
					const parentPath = currentPath.split('/').slice(0, -1).join('/') || '~';
					return {
						type: 'success',
						content: '',
						action: 'cd',
						path: parentPath
					};
				} else {
					return {
						type: 'success',
						content: '',
						action: 'cd',
						path: '~'
					};
				}
			}
			
			// Handle entering projects directory
			if ((target === 'projects' || target === 'project') && currentPath === '~') {
				return {
					type: 'success',
					content: '',
					action: 'cd',
					path: '~/projects'
				};
			}
			
			// Handle entering specific project
			if (currentPath === '~/projects') {
				const project = PROJECTS.find(p => 
					p.name.toLowerCase().replaceAll(/\s+/g, '-') === target.toLowerCase() ||
					p.id === target
				);
				
				if (project) {
					const projectSlug = project.name.toLowerCase().replaceAll(/\s+/g, '-');
					return {
						type: 'success',
						content: '',
						action: 'cd',
						path: `~/projects/${projectSlug}`
					};
				}
			}
			
			return {
				type: 'error',
				content: `cd: ${target}: No such file or directory`
			};
		}
		
		case 'ls': {
			// List contents based on current directory
			if (currentPath === '~') {
				return {
					type: 'info',
					content: `
about.txt
contact.txt
projects/
					`.trim()
				};
			}
			
			if (currentPath === '~/projects') {
				const projectList = PROJECTS.map(p => {
					const slug = p.name.toLowerCase().replaceAll(/\s+/g, '-');
					const status = p.status === 'ACTIVE' ? '🟢' : '🔴';
					return `${status} ${slug}/`;
				}).join('\n');
				
				return {
					type: 'info',
					content: `\n${projectList}`
				};
			}
			
		if (currentPath.startsWith('~/projects/')) {
			const projectSlug = currentPath.split('/').pop();
			const project = PROJECTS.find(p => 
				p.name.toLowerCase().replaceAll(/\s+/g, '-') === projectSlug
			);
			
			if (project) {
				return {
					type: 'info',
					content: `
README.md
info.txt
technologies.txt
links.txt
					`.trim()
				};
			}
		}			return {
				type: 'info',
				content: ''
			};
		}
		
		case 'cat':
		case 'view':
		case 'read': {
			const filename = args[1];
			
			if (!filename) {
				return {
					type: 'error',
					content: `${command}: missing file operand`
				};
			}
			
			// Handle files in home directory
			if (currentPath === '~') {
				if (filename === 'about.txt' || filename === 'about') {
					return {
						type: 'component',
						content: AboutView
					};
				}
				
				if (filename === 'contact.txt' || filename === 'contact') {
					return {
						type: 'info',
						content: `
Contact Information
===================

Email:    ${CONTACT_INFO.email}
GitHub:   ${CONTACT_INFO.github}
LinkedIn: ${CONTACT_INFO.linkedin}
Matrix:   ${CONTACT_INFO.matrix}

Feel free to reach out through any of these channels!
						`.trim()
					};
				}
			}
			
			// Handle files in project directory
			if (currentPath.startsWith('~/projects/')) {
				const projectSlug = currentPath.split('/').pop();
				const project = PROJECTS.find(p => 
					p.name.toLowerCase().replaceAll(/\s+/g, '-') === projectSlug
				);
				
				if (project) {
					if (filename === 'README.md' || filename === 'readme') {
						return {
							type: 'info',
							content: `
# ${project.name}

${project.longDescription || project.description}

## Features
${project.features?.map(f => `- ${f}`).join('\n') || 'No features listed'}

## Status
${project.status}
							`.trim()
						};
					}
					
					if (filename === 'info.txt' || filename === 'info') {
						return {
							type: 'info',
							content: `
Project: ${project.name}
Status: ${project.status}
Description: ${project.description}
							`.trim()
						};
					}
					
					if (filename === 'technologies.txt' || filename === 'tech') {
						return {
							type: 'info',
							content: `
Technologies Used:
${project.tech.map(t => `  • ${t}`).join('\n')}
							`.trim()
						};
					}
					
					if (filename === 'links.txt' || filename === 'links') {
						const links = [];
						if (project.github) links.push(`GitHub: ${project.github}`);
						if (project.demo && project.demo !== '#') links.push(`Demo: ${project.demo}`);
						
						return {
							type: 'info',
							content: links.length > 0 ? `\n${links.join('\n')}` : 'No links available'
						};
					}
				}
			}
			
			return {
				type: 'error',
				content: `${command}: ${filename}: No such file or directory`
			};
		}
		
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
		case 'terminal':
			return {
				type: 'success',
				content: 'Already in terminal mode.'
			};
		
		default:
			return {
				type: 'error',
				content: `Command not found: ${command}. Type 'help' for available commands.`
			};
	}
}
