import React, { useState, forwardRef, KeyboardEvent } from 'react';
import { ChevronRight } from 'lucide-react';

interface PromptLineProps {
  cwd: string;
  onCommand: (cmd: string) => void;
  isProcessing: boolean;
}

export const PromptLine = forwardRef<HTMLInputElement, PromptLineProps>(({ cwd, onCommand, isProcessing }, ref) => {
  const [inputValue, setInputValue] = useState('');
  const [commandHistoryIndex, setCommandHistoryIndex] = useState(-1);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isProcessing) {
      onCommand(inputValue);
      setInputValue('');
      setCommandHistoryIndex(-1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  if (isProcessing) {
    return null; // Hide prompt while processing
  }

  return (
    <div className="flex items-center w-full mt-2 group text-lg md:text-base">
        <span className="text-warning mr-2 font-bold hidden md:inline">guest@portfolio</span>
        <span className="text-gray-500 mr-2 hidden md:inline">:</span>
        <span className="text-blue-400 mr-2 font-bold shrink-0">{cwd}</span>
        <ChevronRight className="w-4 h-4 text-matrix mr-1 shrink-0 animate-pulse" />
        
        <div className="relative flex-1">
            {/* Visible Fake Input */}
            <div className="absolute inset-0 pointer-events-none flex items-center text-matrix whitespace-pre text-shadow-glow">
                {inputValue}
                <span className="w-2.5 h-5 bg-matrix ml-[1px] animate-blink inline-block align-middle shadow-[0_0_8px_rgba(0,255,156,0.8)]"></span>
            </div>

            {/* Hidden Real Input for Accessibility & Mobile */}
            <input
                ref={ref}
                type="text"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="w-full opacity-0 bg-transparent border-none outline-none text-transparent caret-transparent h-6 cursor-text"
                autoComplete="off"
                autoFocus
                spellCheck={false}
            />
        </div>
    </div>
  );
});

PromptLine.displayName = 'PromptLine';