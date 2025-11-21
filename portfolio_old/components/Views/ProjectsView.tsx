import React from 'react';
import { Project } from '../../types';
import { Folder, GitBranch, Globe, ExternalLink } from 'lucide-react';

interface ProjectsViewProps {
  projects: Project[];
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
      {projects.map((p) => (
        <div key={p.id} className="border border-graphite bg-dim p-4 rounded hover:border-matrix/50 transition-colors group">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-matrix font-bold">
              <Folder className="w-4 h-4" />
              {p.name}
            </div>
            <div className="text-xs px-2 py-0.5 rounded bg-graphite text-gray-300 uppercase">
              {p.status}
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mb-4 h-10 line-clamp-2">
            {p.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {p.tech.map(t => (
              <span key={t} className="text-xs text-warning bg-warning/10 px-1.5 py-0.5 rounded">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3 text-sm border-t border-graphite pt-3">
            <a href="#" className="flex items-center gap-1 text-gray-400 hover:text-matrix transition-colors">
              <GitBranch className="w-3 h-3" /> Source
            </a>
            <a href="#" className="flex items-center gap-1 text-gray-400 hover:text-matrix transition-colors">
              <Globe className="w-3 h-3" /> Demo <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};