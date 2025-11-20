import React, { useState, useEffect } from 'react';
import SystemVisualizer from './components/SystemVisualizer';
import NeuralInterface from './components/NeuralInterface';
import ModuleCard from './components/ModuleCard';
import { Project, SystemLog } from './types';
import { Cpu, Layers, Zap, GitBranch, Terminal as TerminalIcon, Activity } from 'lucide-react';

// Mock Data
const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Distributed Tensor Engine',
    description: 'A custom distributed training framework capable of handling 10B+ parameter models across varied hardware configurations.',
    tech: ['Python', 'PyTorch', 'CUDA', 'gRPC'],
    type: 'ml',
    metrics: '40% Faster Training',
    status: 'online'
  },
  {
    id: '2',
    title: 'Reactive Dashboard Core',
    description: 'High-performance frontend architecture for real-time analytics, utilizing WebWorkers and OffscreenCanvas.',
    tech: ['React', 'TypeScript', 'WASM', 'WebGL'],
    type: 'dev',
    metrics: '< 16ms Frame Time',
    status: 'optimized'
  },
  {
    id: '3',
    title: 'Semantic Code Search',
    description: 'Hybrid search engine combining BM25 sparse vectors with dense embedding retrieval for large codebases.',
    tech: ['Vector DB', 'FastAPI', 'Transformers', 'React'],
    type: 'hybrid',
    metrics: '95% Recall @ 10',
    status: 'online'
  }
];

const LOGS: SystemLog[] = [
  { id: 1, timestamp: '00:01:22', message: 'System Kernel initialized.', type: 'info' },
  { id: 2, timestamp: '00:01:24', message: 'Neural weights loaded [Vision_V4].', type: 'success' },
  { id: 3, timestamp: '00:01:45', message: 'Dev modules mounting...', type: 'info' },
  { id: 4, timestamp: '00:02:10', message: 'Optimization pass complete.', type: 'success' }
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'overview' | 'modules' | 'interface'>('overview');
  const [logs, setLogs] = useState<SystemLog[]>(LOGS);

  // Simulate streaming logs
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newLog: SystemLog = {
            id: Date.now(),
            timestamp: new Date().toISOString().split('T')[1].split('.')[0],
            message: `Heartbeat signal: Active threads ${Math.floor(Math.random() * 12) + 4}`,
            type: 'info'
        };
        setLogs(prev => [newLog, ...prev].slice(0, 6));
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E16] text-[#F2F5F7] font-sans selection:bg-[#FF5733] selection:text-white grid-bg overflow-x-hidden flex flex-col">
      
      {/* Navigation Bar (HUD Style) */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0E16]/90 backdrop-blur-md border-b border-[#1C1F26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                 <Cpu className="text-[#FF5733]" size={24} />
                 <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#21F6FF] rounded-full animate-pulse"></div>
              </div>
              <span className="font-display font-bold tracking-wider text-lg">
                DEV<span className="text-[#FF5733]">_</span>SYS<span className="text-[#21F6FF]">.AI</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8 font-code text-sm">
                <button 
                    onClick={() => setActiveSection('overview')} 
                    className={`${activeSection === 'overview' ? 'text-[#FF5733]' : 'text-gray-400 hover:text-white'} transition-colors`}
                >
                  /OVERVIEW
                </button>
                <button 
                    onClick={() => setActiveSection('modules')} 
                    className={`${activeSection === 'modules' ? 'text-[#21F6FF]' : 'text-gray-400 hover:text-white'} transition-colors`}
                >
                  /MODULES
                </button>
                <button 
                    onClick={() => setActiveSection('interface')} 
                    className={`${activeSection === 'interface' ? 'text-white shadow-glow' : 'text-gray-400 hover:text-white'} transition-colors`}
                >
                  /INTERFACE
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24 px-4 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Dashboard / Content */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Hero Section */}
          <section className={`transition-opacity duration-500 ${activeSection === 'overview' ? 'block' : 'hidden md:block'}`}>
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight">
                Where Code Becomes <span className="text-[#21F6FF]">Intelligence</span>.
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed border-l-2 border-[#FF5733] pl-4">
                I architect hybrid systems—fusing robust <span className="text-[#FF5733]">software engineering</span> with advanced <span className="text-[#21F6FF]">machine learning</span> pipelines.
              </p>
            </div>
            
            {/* System Visualizer */}
            <div className="w-full mb-8">
               <SystemVisualizer />
            </div>
          </section>

          {/* Projects / Modules Grid */}
          <section id="modules" className={`space-y-6 ${activeSection === 'modules' || activeSection === 'overview' ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-between border-b border-[#1C1F26] pb-2 mb-6">
              <h2 className="font-display text-2xl flex items-center gap-2">
                <Layers size={20} className="text-gray-500" />
                INSTALLED_MODULES
              </h2>
              <span className="font-code text-xs text-[#FF5733]">STATUS: ONLINE</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map(p => (
                <ModuleCard key={p.id} project={p} />
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Sidebar / Interface */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* System Status Panel */}
          <div className="bg-[#0A0E16] border border-[#1C1F26] p-4 rounded font-code text-xs">
            <h3 className="text-gray-500 border-b border-[#1C1F26] pb-2 mb-2 flex items-center gap-2">
              <Activity size={14} /> SYSTEM_LOGS
            </h3>
            <ul className="space-y-2 max-h-48 overflow-hidden relative">
               {logs.map((log) => (
                 <li key={log.id} className="flex gap-2 opacity-80">
                   <span className="text-gray-600">[{log.timestamp}]</span>
                   <span className={`${log.type === 'success' ? 'text-green-400' : log.type === 'info' ? 'text-blue-400' : 'text-red-400'}`}>
                     {log.message}
                   </span>
                 </li>
               ))}
               <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-[#0A0E16] to-transparent"></div>
            </ul>
          </div>

          {/* Neural Interface Chat */}
          <div className={`${activeSection === 'interface' ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 lg:static lg:block lg:bg-transparent' : 'block'}`}>
             <div className={activeSection === 'interface' ? 'w-full max-w-2xl px-4' : ''}>
                <div className="flex items-center justify-between mb-2 lg:hidden">
                    {activeSection === 'interface' && (
                        <button onClick={() => setActiveSection('overview')} className="text-white mb-4 font-code text-xs">[ ESCAPE TERMINAL ]</button>
                    )}
                </div>
                <NeuralInterface />
             </div>
          </div>

          {/* Tech Stack Mini-Viz */}
          <div className="hidden lg:block p-4 border border-[#1C1F26] bg-[#1C1F26]/30 rounded">
            <h3 className="font-display text-sm text-gray-400 mb-4">DEPENDENCIES</h3>
            <div className="flex flex-wrap gap-2">
              {['React 18', 'TypeScript', 'Tailwind', 'TensorFlow.js', 'Node.js', 'Python', 'Docker'].map(t => (
                <span key={t} className="text-[10px] font-code px-2 py-1 bg-[#0A0E16] border border-[#333] text-gray-400 rounded hover:border-[#FF5733] hover:text-[#FF5733] transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </aside>
      </main>
      
      <footer className="border-t border-[#1C1F26] mt-12 py-8 bg-[#0A0E16]">
         <div className="max-w-7xl mx-auto px-4 text-center font-code text-xs text-gray-600">
            <p>SYSTEM VERSION 1.0.4 // BUILD 2023.10.25</p>
            <p className="mt-2">INITIATED BY [YOUR NAME]</p>
         </div>
      </footer>
    </div>
  );
};

export default App;