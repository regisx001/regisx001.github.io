import React from 'react';
import { CommandResponse } from '../types';
import { WELCOME_MESSAGE, PROJECTS, SKILLS } from '../constants';
import { GoogleGenAI } from "@google/genai";
import { ProjectsView } from '../components/Views/ProjectsView';
import { AboutView } from '../components/Views/AboutView';
import { HelpView } from '../components/Views/HelpView';
import { AiResponseView } from '../components/Views/AiResponseView';

export class CommandService {
  private genAi: GoogleGenAI | null = null;

  constructor() {
    try {
        if (process.env.API_KEY) {
            this.genAi = new GoogleGenAI({ apiKey: process.env.API_KEY });
        } else {
            console.warn("Gemini API Key missing. AI features disabled.");
        }
    } catch (e) {
        console.error("Failed to initialize Gemini", e);
    }
  }

  async execute(input: string): Promise<CommandResponse> {
    const args = input.trim().split(/\s+/);
    const command = args[0].toLowerCase();
    const params = args.slice(1).join(' ');

    switch (command) {
      case 'help':
        return {
          type: 'component',
          content: <HelpView />
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
          content: <AboutView skills={SKILLS} />
        };

      case 'projects':
      case 'ls':
        return {
          type: 'component',
          content: <ProjectsView projects={PROJECTS} />
        };
      
      case 'contact':
        return {
          type: 'info',
          content: (
            <div className="border-l-2 border-matrix pl-4 py-2">
              <div className="text-gray-400 mb-1">Communicate via secure channels:</div>
              <div><span className="text-warning">Email:</span> dev@system.local</div>
              <div><span className="text-warning">GitHub:</span> github.com/user</div>
              <div><span className="text-warning">Matrix:</span> @user:matrix.org</div>
            </div>
          )
        };
        
      case 'date':
        return {
          type: 'info',
          content: new Date().toString()
        };

      case 'ai':
      case 'ask':
        if (!params) {
          return { type: 'warning', content: 'Usage: ai <your query here>' };
        }
        return await this.handleAiRequest(params);

      default:
        return {
          type: 'error',
          content: `Command not found: ${command}. Type 'help' for available commands.`
        };
    }
  }

  private async handleAiRequest(prompt: string): Promise<CommandResponse> {
    if (!this.genAi) {
        return {
            type: 'error',
            content: 'CRITICAL: Neural Engine (API Key) not configured.'
        };
    }

    try {
      const model = this.genAi.models;
      const result = await model.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are a CLI assistant for a developer portfolio. Keep answers technical, concise, and formatted in markdown if needed. Style: Cyberpunk/Hacker. 
        
        User Query: ${prompt}`,
      });

      const text = result.text || "NO DATA RECEIVED";
      
      return {
        type: 'ai',
        content: <AiResponseView response={text} />
      };

    } catch (error) {
      return {
        type: 'error',
        content: `Neural Link Failure: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  }
}