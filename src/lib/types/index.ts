import type { Component } from 'svelte';

// Terminal Portfolio Types
export interface Project {
	id: string;
	name: string;
	description: string;
	longDescription?: string;
	tech: string[];
	status: 'ACTIVE' | 'BETA' | 'EXPERIMENTAL' | 'ARCHIVED';
	features?: string[];
	github?: string;
	demo?: string;
}

export interface Experience {
	id: string;
	title: string;
	company: string;
	period: string;
	description: string;
	achievements: string[];
}

export interface Skill {
	name: string;
	level: 'expert' | 'advanced' | 'intermediate' | 'learning';
}

export interface SkillCategory {
	name: string;
	skills: Skill[];
}

export interface HistoryItem {
	type: 'command' | 'text' | 'error' | 'success' | 'info' | 'warning' | 'ai' | 'component';
	content: string | Component<any>;
	cwd?: string;
}

export interface CommandResponse {
	type: 'text' | 'error' | 'success' | 'info' | 'warning' | 'ai' | 'component';
	content: string | Component<any>;
	action?: 'clear' | 'gui' | 'cli';
}

export enum SystemState {
	BOOTING = 'BOOTING',
	READY = 'READY',
	PROCESSING = 'PROCESSING',
	ERROR = 'ERROR'
}

export type ViewMode = 'CLI' | 'GUI';
