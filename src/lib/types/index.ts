export interface Project {
	id: string;
	title: string;
	description: string;
	tech: string[];
	type: 'dev' | 'ml' | 'hybrid';
	metrics: string;
	status: 'online' | 'training' | 'archived' | 'optimized';
}

export interface SystemLog {
	id: number;
	timestamp: string;
	message: string;
	type: 'info' | 'warn' | 'success' | 'error';
}

export interface ChatMessage {
	role: 'user' | 'model';
	text: string;
	timestamp: number;
}

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

export enum SystemStatus {
	IDLE = 'IDLE',
	PROCESSING = 'PROCESSING',
	OPTIMIZED = 'OPTIMIZED',
	ERROR = 'ERROR'
}
