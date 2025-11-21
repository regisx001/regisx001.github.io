
import { Project, Experience } from './types';

export const WELCOME_MESSAGE = `
CONNECTED TO HOST [PORTFOLIO_MAIN]
ENCRYPTION: ACTIVATED (2048-bit)
USER: GUEST_ACCESS
----------------------------------------
Welcome to the terminal. 
Type 'help' to view available commands.
Type 'ai <query>' to ask the Neural Core.
`;

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Neuro-Link Interface',
    description: 'Brain-Computer Interface visualization dashboard built with WebGL.',
    longDescription: 'A high-fidelity dashboard designed to visualize real-time neural activity data. This system processes massive data streams via WebSockets and renders them as interactive 3D point clouds. The interface includes controls for filtering frequency bands and isolating specific cortical regions.',
    features: [
      'Real-time WebGL Point Cloud Rendering',
      'WebSocket Data Streaming (50ms latency)',
      'Custom Shader Material Library',
      'React-Three-Fiber Integration'
    ],
    tech: ['React', 'Three.js', 'WebSockets', 'GLSL'],
    status: 'beta',
    link: '#',
    repoLink: 'https://github.com',
    demoLink: 'https://demo.com'
  },
  {
    id: '2',
    name: 'Cipher_Stream',
    description: 'End-to-end encrypted real-time chat protocol using ratcheting algorithms.',
    longDescription: 'An experimental secure messaging platform that implements the Double Ratchet algorithm for forward secrecy. Designed for high-risk environments, it features self-destructing messages, zero-knowledge architecture, and a minimalist terminal-inspired UI.',
    features: [
      'Double Ratchet Encryption Protocol',
      'Zero-Knowledge Server Architecture',
      'Ephemeral Message Storage',
      'PWA with Offline Capability'
    ],
    tech: ['TypeScript', 'Node.js', 'Sodium', 'Socket.io'],
    status: 'live',
    link: '#',
    repoLink: 'https://github.com',
    demoLink: 'https://demo.com'
  },
  {
    id: '3',
    name: 'Void_Walker',
    description: 'Procedurally generated dungeon crawler running entirely in the browser DOM.',
    longDescription: 'A rogue-like dungeon crawler that pushes the limits of DOM manipulation. Levels are generated procedurally using a modified cellular automata algorithm. The game features a unique ASCII-art aesthetic rendered with CSS grid and custom text shaders.',
    features: [
      'Cellular Automata Level Generation',
      'Entity Component System (ECS) Architecture',
      'Custom CSS Text Shaders',
      'WASM-powered Pathfinding'
    ],
    tech: ['Vue', 'Tailwind', 'Rust (WASM)'],
    status: 'archived',
    link: '#',
    repoLink: 'https://github.com',
    demoLink: 'https://demo.com'
  }
];

// Legacy Flat List for CLI
export const SKILLS = [
  "Frontend Architecture",
  "React / Next.js Ecosystems",
  "TypeScript / Node.js",
  "WebGL / Three.js",
  "System Design",
  "AI Integration (Gemini API)"
];

// Categorized Skills for GUI
export const SKILL_CATEGORIES = [
  {
    title: "Frontend Engineering",
    icon: "layout",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    title: "Backend Systems",
    icon: "server",
    skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "Docker", "AWS Lambda"]
  },
  {
    title: "Core Concepts",
    icon: "cpu",
    skills: ["System Architecture", "WebSockets", "CI/CD Pipelines", "REST APIs", "Web Security"]
  },
  {
    title: "AI & Emerging Tech",
    icon: "bot",
    skills: ["Gemini API", "OpenAI SDK", "WebAssembly", "WebGL Shaders"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Senior System Architect',
    company: 'Cyberdyne_Systems',
    period: '2023 - PRESENT',
    description: 'Architecting next-generation neural interfaces. Leading a squad of 8 engineers in developing low-latency visualization tools for BCI data.',
    tech: ['React', 'Rust', 'WebGL', 'gRPC']
  },
  {
    id: '2',
    role: 'Full Stack Operative',
    company: 'Tyrell_Corp',
    period: '2021 - 2023',
    description: 'Developed internal surveillance dashboards and replicant tracking databases. Optimized database queries reducing load times by 60%.',
    tech: ['Next.js', 'PostgreSQL', 'Node.js', 'Redis']
  },
  {
    id: '3',
    role: 'Frontend Engineer',
    company: 'Massive_Dynamic',
    period: '2019 - 2021',
    description: 'Built responsive interfaces for consumer-grade robotics. Implemented a custom design system used across 12 different product lines.',
    tech: ['Vue.js', 'SCSS', 'Jest', 'Storybook']
  }
];