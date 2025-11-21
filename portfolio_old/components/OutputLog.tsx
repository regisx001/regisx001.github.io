import React from 'react';
import { HistoryItem } from '../types';
import { ChevronRight, AlertTriangle, CheckCircle2, Cpu } from 'lucide-react';
import { WELCOME_MESSAGE } from '../constants';

interface OutputLogProps {
  history: HistoryItem[];
}

export const OutputLog: React.FC<OutputLogProps> = ({ history }) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Initial Welcome Message */}
      <div className="whitespace-pre-wrap text-matrix/80 mb-6 leading-relaxed text-sm md:text-base">
        {WELCOME_MESSAGE}
      </div>

      {history.map((item, index) => (
        <div key={index} className="mb-1 animate-flicker">
          {item.type === 'command' ? (
            <div className="flex items-center gap-2 opacity-70 mb-2 mt-4">
              <span className="text-warning text-sm">guest@portfolio</span>
              <span className="text-gray-500">:</span>
              <span className="text-blue-400 text-sm">{item.cwd || '~'}</span>
              <ChevronRight className="w-3 h-3 text-matrix" />
              <span className="text-white">{item.content}</span>
            </div>
          ) : (
            <div className="pl-0 md:pl-4">
              {item.type === 'error' && (
                <div className="flex items-start gap-2 text-red-500 bg-red-900/10 p-2 border-l-2 border-red-500">
                  <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{item.content}</span>
                </div>
              )}
              
              {item.type === 'success' && (
                <div className="flex items-center gap-2 text-matrix">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{item.content}</span>
                </div>
              )}

              {item.type === 'ai' && (
                <div className="border border-purple-500/30 bg-purple-900/10 p-4 rounded-br-lg rounded-bl-lg relative mt-2">
                    <div className="absolute -top-3 left-4 bg-console px-2 text-xs text-purple-400 flex items-center gap-1 uppercase tracking-widest border border-purple-500/30">
                        <Cpu className="w-3 h-3" /> Neural Core
                    </div>
                    <div className="text-gray-200 prose prose-invert prose-sm max-w-none">
                        {item.content}
                    </div>
                </div>
              )}

              {(item.type === 'text' || item.type === 'info') && (
                <div className="text-gray-300 whitespace-pre-wrap leading-relaxed max-w-3xl">
                  {item.content}
                </div>
              )}

              {item.type === 'component' && (
                <div className="w-full my-2">
                  {item.content}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};