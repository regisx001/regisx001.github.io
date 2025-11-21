import React, { useRef, useEffect } from 'react';
import { PromptLine } from './PromptLine';
import { OutputLog } from './OutputLog';
import { StatusBar } from './StatusBar';
import { HistoryItem } from '../types';

interface TerminalShellProps {
  history: HistoryItem[];
  onCommand: (cmd: string) => void;
  isProcessing: boolean;
  cwd: string;
}

export const TerminalShell: React.FC<TerminalShellProps> = ({ 
  history, 
  onCommand, 
  isProcessing,
  cwd
}) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on history change
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isProcessing]);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div 
      className="flex-1 flex flex-col relative max-w-screen-2xl mx-auto w-full h-full p-2 md:p-6"
      onClick={handleFocus}
    >
      {/* Decorative Border */}
      <div className="absolute inset-0 border-2 border-graphite rounded-lg pointer-events-none opacity-50 hidden md:block" />
      
      {/* Main Window */}
      <div 
        className="flex-1 bg-console/90 backdrop-blur-sm border border-graphite rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden z-10 relative"
        ref={containerRef}
      >
        {/* Header / Title Bar */}
        <div className="h-8 bg-graphite/50 border-b border-graphite flex items-center px-4 justify-between select-none">
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
             <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
           </div>
           <div className="text-xs text-gray-400 font-mono tracking-widest">usr@system: ~</div>
           <div className="text-xs text-gray-600 font-mono">v2.4.0</div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-thin custom-scrollbar relative">
            
          <OutputLog history={history} />
          
          <PromptLine 
            cwd={cwd} 
            onCommand={onCommand} 
            isProcessing={isProcessing} 
            ref={inputRef}
          />

          <div ref={bottomRef} className="h-4" />
        </div>

        {/* Footer Status */}
        <StatusBar isProcessing={isProcessing} />
      </div>
    </div>
  );
};