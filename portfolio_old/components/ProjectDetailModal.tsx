
import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, Terminal, Cpu, Shield, Image as ImageIcon, AlertTriangle } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop with CRT scanline effect */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
      </div>

      {/* Modal Window */}
      <div className="relative w-full max-w-5xl bg-dim border border-graphite rounded-lg shadow-[0_0_50px_rgba(0,255,156,0.15)] flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-300 ring-1 ring-white/10">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-graphite bg-graphite/20 shrink-0">
            <div className="flex items-center gap-3">
                <Terminal className="text-matrix" size={20} />
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold text-white tracking-wide uppercase leading-none">
                        {project.name}
                    </h2>
                    <span className="text-[10px] text-gray-500 font-mono mt-1 tracking-widest">PROJECT_DETAILS // ACCESS_GRANTED</span>
                </div>
            </div>
            <button 
                onClick={onClose}
                className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded transition-colors text-gray-500 group"
            >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto custom-scrollbar p-6 md:p-8">
            
            <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Left Column: Info */}
                <div className="flex-1 space-y-8">
                    
                    {/* Status & Tags */}
                    <div className="flex flex-wrap items-center gap-3">
                        <span className={`px-3 py-1 rounded border text-xs font-bold uppercase tracking-wider ${
                            project.status === 'live' ? 'bg-green-900/30 text-green-400 border-green-800' : 
                            project.status === 'beta' ? 'bg-yellow-900/30 text-yellow-400 border-yellow-800' :
                            'bg-gray-800 text-gray-500 border-gray-700'
                        }`}>
                            STATUS: {project.status}
                        </span>
                        {project.tech.map(t => (
                            <span key={t} className="px-2 py-1 text-xs text-blue-300 bg-blue-900/10 border border-blue-900/30 rounded font-mono">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Mission Briefing */}
                    <div className="bg-black/20 p-6 rounded border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-matrix/50" />
                        <h3 className="text-matrix text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                            <Cpu size={14} /> Mission Briefing
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {project.longDescription || project.description}
                        </p>
                    </div>

                    {/* Features */}
                    {project.features && (
                        <div>
                            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Shield size={14} /> Core Capabilities
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm bg-graphite/20 p-3 rounded hover:bg-graphite/40 transition-colors border border-transparent hover:border-graphite/50">
                                        <span className="text-matrix mt-0.5">▹</span>
                                        <span className="leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-graphite/50">
                        {project.demoLink && (
                            <a 
                                href={project.demoLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[160px] flex items-center justify-center gap-2 px-6 py-4 bg-matrix text-console font-bold rounded hover:bg-white hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(0,255,156,0.2)] group"
                            >
                                <ExternalLink size={18} className="group-hover:rotate-45 transition-transform" />
                                INITIATE DEMO
                            </a>
                        )}
                        {project.repoLink && (
                            <a 
                                href={project.repoLink}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[160px] flex items-center justify-center gap-2 px-6 py-4 bg-transparent border border-graphite text-white font-bold rounded hover:border-white hover:bg-white/5 hover:scale-[1.02] transition-all"
                            >
                                <Github size={18} />
                                SOURCE CODE
                            </a>
                        )}
                    </div>

                </div>

                {/* Right Column: Visuals */}
                <div className="lg:w-[340px] xl:w-[400px] space-y-6 shrink-0">
                    <div>
                        <h3 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                             <ImageIcon size={14} /> Visual Feeds
                        </h3>
                        
                        <div className="space-y-4">
                            {/* Placeholder Image 1 */}
                            <div className="aspect-video bg-black/60 border border-graphite rounded flex flex-col items-center justify-center relative overflow-hidden group cursor-not-allowed">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                                
                                {/* Animated scanline */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-matrix/30 shadow-[0_0_10px_rgba(0,255,156,0.5)] animate-scanline opacity-50"></div>
                                
                                <div className="text-center z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <AlertTriangle className="w-10 h-10 text-yellow-500 mx-auto mb-2" />
                                    <span className="text-xs font-mono text-yellow-500 tracking-wider block">FEED ENCRYPTED</span>
                                    <span className="text-[10px] text-gray-600 font-mono">AUTH_REQUIRED</span>
                                </div>
                            </div>

                            {/* Placeholder Image 2 */}
                             <div className="aspect-video bg-black/60 border border-graphite rounded flex flex-col items-center justify-center relative overflow-hidden group cursor-not-allowed">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
                                
                                <div className="text-center z-10 opacity-40 group-hover:opacity-80 transition-opacity">
                                    <ImageIcon className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                                    <span className="text-xs font-mono text-gray-500 tracking-wider block">SIGNAL LOST</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Metadata Panel */}
                    <div className="bg-dim border border-graphite/50 p-4 rounded text-xs font-mono space-y-3 text-gray-500">
                         <div className="flex justify-between border-b border-graphite/30 pb-2">
                             <span>DEPLOY_REGION</span>
                             <span className="text-matrix">US-EAST-1</span>
                         </div>
                         <div className="flex justify-between border-b border-graphite/30 pb-2">
                             <span>SECURITY_LEVEL</span>
                             <span className="text-yellow-500">HIGH</span>
                         </div>
                         <div className="flex justify-between">
                             <span>UPTIME</span>
                             <span className="text-white">99.99%</span>
                         </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};
