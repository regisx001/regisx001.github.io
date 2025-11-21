
import React, { useState } from 'react';
import { PROJECTS, SKILL_CATEGORIES, EXPERIENCE } from '../constants';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { SystemMonitor } from './SystemMonitor';
import { Github, Mail, ExternalLink, Terminal, Cpu, Code2, Layers, Monitor, Briefcase, Server, Shield, Database } from 'lucide-react';

interface GuiShellProps {
  onSwitchToTerminal: () => void;
}

export const GuiShell: React.FC<GuiShellProps> = ({ onSwitchToTerminal }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getIconForCategory = (iconName: string) => {
    switch(iconName) {
        case 'layout': return <Monitor size={20} />;
        case 'server': return <Server size={20} />;
        case 'bot': return <Cpu size={20} />;
        default: return <Code2 size={20} />;
    }
  };

  return (
    <div className="h-full w-full overflow-y-auto custom-scrollbar bg-console text-gray-300 pb-10 relative scroll-smooth">
      
      {/* Detail Modal Overlay */}
      {selectedProject && (
        <ProjectDetailModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-20 relative overflow-hidden border-b border-graphite bg-[radial-gradient(circle_at_top_right,rgba(0,255,156,0.05),transparent_40%)]">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
           <Code2 size={400} />
        </div>
        
        <div className="z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10">
          
          {/* Left Column: Introduction */}
          <div>
            <div className="flex items-center gap-2 text-matrix mb-6 animate-flicker">
              <span className="w-2 h-2 bg-matrix rounded-full animate-pulse"/>
              <span className="font-mono text-sm tracking-widest uppercase">System Online // Visual Mode</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix to-blue-500">ARCHITECT</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-12 border-l-2 border-matrix/50 pl-6">
              Senior Frontend Engineer specializing in high-performance web systems, 
              immersive interactions, and AI integration.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onSwitchToTerminal}
                className="px-8 py-4 bg-matrix text-console font-bold rounded hover:bg-matrix/90 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,156,0.3)] group"
              >
                <Terminal size={20} className="group-hover:animate-pulse" />
                INIT TERMINAL
              </button>
              <button className="px-8 py-4 border border-graphite bg-dim text-white font-bold rounded hover:border-matrix hover:text-matrix transition-all flex items-center gap-2">
                <Mail size={20} />
                CONTACT
              </button>
            </div>
          </div>

          {/* Right Column: System Monitor */}
          <div className="hidden lg:flex justify-center animate-in fade-in slide-in-from-right duration-700 delay-300">
             <SystemMonitor />
          </div>

        </div>
      </section>

      {/* Experience / Careers Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto border-b border-graphite/50">
         <div className="flex items-center gap-4 mb-16">
           <Briefcase className="text-matrix" size={32} />
           <h2 className="text-3xl font-bold text-white tracking-wide">CAREER_LOGS</h2>
        </div>

        <div className="relative border-l border-graphite ml-4 md:ml-6 space-y-12">
            {EXPERIENCE.map((job) => (
                <div key={job.id} className="relative pl-8 md:pl-12 group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-graphite rounded-full border border-gray-500 group-hover:bg-matrix group-hover:border-matrix transition-colors shadow-[0_0_0_4px_rgba(10,15,10,1)]" />
                    
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                        <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-matrix transition-colors">{job.role}</h3>
                            <div className="text-blue-400 font-mono text-sm mb-2">{job.company}</div>
                        </div>
                        <div className="text-xs font-mono py-1 px-3 bg-graphite/30 border border-graphite rounded text-gray-400 whitespace-nowrap">
                            {job.period}
                        </div>
                    </div>
                    
                    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-4">
                        {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                        {job.tech.map(t => (
                            <span key={t} className="text-xs text-gray-500 font-mono">
                                #{t}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto border-b border-graphite/50">
        <div className="flex items-center gap-4 mb-16">
           <Layers className="text-matrix" size={32} />
           <h2 className="text-3xl font-bold text-white tracking-wide">DEPLOYED_SYSTEMS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="group bg-dim border border-graphite rounded-lg overflow-hidden hover:border-matrix/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,255,156,0.1)] flex flex-col cursor-pointer relative"
            >
              <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 relative p-6 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,156,0.2),transparent_70%)] group-hover:opacity-30 transition-opacity"/>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

                <div className="flex justify-between items-start z-10">
                  <div className="p-2 bg-black/50 rounded-lg backdrop-blur border border-white/10 text-white group-hover:text-matrix transition-colors">
                    <Code2 size={24} />
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-mono uppercase font-bold backdrop-blur-md ${
                    project.status === 'live' ? 'bg-green-900/30 text-green-400 border border-green-500/30' : 
                    project.status === 'beta' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/30' :
                    'bg-gray-800 text-gray-500 border border-gray-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col bg-dim">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-matrix transition-colors">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-xs text-gray-500 bg-console px-2 py-1 rounded border border-graphite/50">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                     <span className="text-xs text-gray-500 bg-console px-2 py-1 rounded border border-graphite/50">+{project.tech.length - 3}</span>
                  )}
                </div>

                <div className="inline-flex items-center gap-2 text-sm text-white group-hover:text-matrix transition-colors font-medium mt-auto border-t border-graphite/50 pt-4 w-full">
                  ACCESS DATA <ExternalLink size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
           <Cpu className="text-matrix" size={32} />
           <h2 className="text-3xl font-bold text-white tracking-wide">INSTALLED_MODULES</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((category, idx) => (
                <div key={idx} className="bg-dim/50 border border-graphite p-6 rounded-lg hover:bg-dim hover:border-gray-600 transition-colors hover:shadow-lg hover:shadow-black/50 group">
                    <div className="text-matrix mb-4 p-3 bg-matrix/10 rounded-lg w-fit group-hover:bg-matrix group-hover:text-console transition-all">
                        {getIconForCategory(category.icon)}
                    </div>
                    <h3 className="text-white font-bold mb-4 group-hover:text-matrix transition-colors">{category.title}</h3>
                    <ul className="space-y-2">
                        {category.skills.map(skill => (
                            <li key={skill} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                <div className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-matrix transition-colors" />
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-graphite bg-black/40 mt-12">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-white mb-2 tracking-tighter">
                    SYSTEM_<span className="text-matrix">OS</span>
                </div>
                <p className="text-gray-600 text-sm max-w-xs">
                    Advanced portfolio interface designed for the modern web. 
                    Built with React 19, Tailwind, and Cyberpunk aesthetics.
                </p>
            </div>

            <div className="flex gap-6">
                 <a href="#" className="w-10 h-10 rounded bg-graphite/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-matrix/20 transition-all">
                    <Github size={20} />
                 </a>
                 <a href="#" className="w-10 h-10 rounded bg-graphite/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-matrix/20 transition-all">
                    <Mail size={20} />
                 </a>
                 <a href="#" className="w-10 h-10 rounded bg-graphite/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-matrix/20 transition-all">
                    <ExternalLink size={20} />
                 </a>
            </div>
         </div>
         
         <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-graphite/30 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600">
            <div>ID: 0x84F2A // SESSION: ACTIVE</div>
            <div className="mt-2 md:mt-0">&copy; {new Date().getFullYear()} SYSTEM_OS. ALL SYSTEMS OPERATIONAL.</div>
         </div>
      </footer>
    </div>
  );
};