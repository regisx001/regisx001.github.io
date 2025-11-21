
import React from 'react';

export type OutputType = 'text' | 'success' | 'error' | 'warning' | 'info' | 'component' | 'ai';

export interface HistoryItem {
  type: 'command' | OutputType;
  content: string | React.ReactNode;
  cwd?: string;
  timestamp?: number;
}

export interface CommandResponse {
  type: OutputType;
  content: string | React.ReactNode;
  action?: 'clear' | 'none';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  features?: string[];
  tech: string[];
  status: 'live' | 'beta' | 'archived';
  link?: string;
  repoLink?: string;
  demoLink?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

export enum SystemState {
  IDLE = 'IDLE',
  PROCESSING = 'PROCESSING',
  ERROR = 'ERROR',
  BOOTING = 'BOOTING'
}