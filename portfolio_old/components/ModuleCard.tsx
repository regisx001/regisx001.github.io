import React from 'react';
import { Project } from '../types';
import { Activity, Code2, Database } from 'lucide-react';

interface Props {
  project: Project;
}

const ModuleCard: React.FC<Props> = ({ project }) => {
  const isML = project.type === 'ml';
  const isDev = project.type === 'dev';
  
  const accentColor = isML ? 'text-[#21F6FF] border-[#21F6FF]' : isDev ? 'text-[#FF5733] border-[#FF5733]' : 'text-purple-400 border-purple-400';
  const shadowClass = isML ? 'hover:shadow-[0_0_15px_rgba(33,246,255,0.2)]' : 'hover:shadow-[0_0_15px_rgba(255,87,51,0.2)]';
  
  return (
    <div className={`group relative bg-[#1C1F26] border border-l-4 border-gray-700 ${isML ? 'hover:border-l-[#21F6FF]' : 'hover:border-l-[#FF5733]'} p-6 transition-all duration-300 ${shadowClass}`}>
      {/* Tech Decoration */}
      <div className="absolute top-2 right-2 flex gap-1 opacity-30">
         <div className="w-1 h-1 bg-current rounded-full"></div>
         <div className="w-1 h-1 bg-current rounded-full"></div>
      </div>

      <div className="flex justify-between items-start mb-4">
        <h3 className="font-display text-xl font-bold text-[#F2F5F7] group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <span className={`text-xs font-code px-2 py-1 border ${accentColor} rounded bg-opacity-10 bg-black`}>
          {project.status.toUpperCase()}
        </span>
      </div>

      <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="text-[10px] font-code uppercase tracking-wider text-gray-500 border border-gray-800 px-2 py-1">
            {t}
          </span>
        ))}
      </div>

      <div className={`flex items-center gap-2 text-xs font-code ${isML ? 'text-[#21F6FF]' : 'text-[#FF5733]'}`}>
        {isML ? <Activity size={14} /> : <Code2 size={14} />}
        <span>METRIC: {project.metrics}</span>
      </div>
      
      {/* Interactive overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
    </div>
  );
};

export default ModuleCard;