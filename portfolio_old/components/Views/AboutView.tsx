import React from 'react';
import { Terminal, User, Zap } from 'lucide-react';

interface AboutViewProps {
  skills: string[];
}

export const AboutView: React.FC<AboutViewProps> = ({ skills }) => {
  return (
    <div className="border-l-2 border-matrix pl-4 py-2 my-2">
      <div className="flex items-start gap-6 flex-col md:flex-row">
        <div className="w-24 h-24 bg-graphite rounded flex items-center justify-center shrink-0 border border-dashed border-gray-600">
          <User className="w-12 h-12 text-gray-500" />
        </div>
        
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl text-white font-bold mb-1">System Operator</h3>
            <p className="text-gray-400 text-sm">Senior Frontend Engineer & UI Architect</p>
          </div>

          <div className="text-gray-300 text-sm leading-relaxed">
            Specialized in building high-performance, scalable web interfaces. 
            Obsessed with pixel perfection, accessible design systems, and 
            seamless user experiences. Currently operating out of Node_Localhost.
          </div>

          <div>
            <h4 className="text-warning text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
              <Zap className="w-3 h-3" /> Loaded Modules
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {skills.map(skill => (
                <div key={skill} className="flex items-center gap-2 text-xs text-matrix">
                  <span className="w-1 h-1 bg-matrix rounded-full" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};