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

export enum SystemStatus {
	IDLE = 'IDLE',
	PROCESSING = 'PROCESSING',
	OPTIMIZED = 'OPTIMIZED',
	ERROR = 'ERROR'
}
