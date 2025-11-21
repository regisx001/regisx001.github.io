
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TerminalShell } from './components/TerminalShell';
import { GuiShell } from './components/GuiShell';
import { BootSequence } from './components/BootSequence';
import { CommandService } from './services/commandService';
import { HistoryItem } from './types';
import { Terminal, Monitor, Wifi, Battery, Cpu, LayoutGrid } from 'lucide-react';

type ViewMode = 'CLI' | 'GUI';

const App: React.FC = () => {
  const [booted, setBooted] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [cwd, setCwd] = useState<string>('~/portfolio');
  const [isProcessing, setIsProcessing] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('CLI');
  
  // Initialize Command Service
  const commandServiceRef = useRef<CommandService | null>(null);

  useEffect(() => {
    // Initialize only once
    if (!commandServiceRef.current) {
      commandServiceRef.current = new CommandService();
    }
  }, []);

  const handleCommand = useCallback(async (cmd: string) => {
    if (!cmd.trim()) {
      setHistory(prev => [...prev, { type: 'command', content: cmd, cwd }]);
      return;
    }

    // Add command to history
    setHistory(prev => [...prev, { type: 'command', content: cmd, cwd }]);
    setIsProcessing(true);

    try {
      const service = commandServiceRef.current;
      if (service) {
        const response = await service.execute(cmd);
        
        if (response.action === 'clear') {
            setHistory([]);
        } else {
            setHistory(prev => [...prev, response]);
        }
      }
    } catch (error) {
      setHistory(prev => [...prev, { 
        type: 'error', 
        content: 'SYSTEM_ERR: Command execution failed.' 
      }]);
    } finally {
      setIsProcessing(false);
    }
  }, [cwd]);

  if (!booted) {
    return <BootSequence onComplete={() => setBooted(true)} />;
  }

  return (
    <div className="h-screen w-full bg-console text-matrix font-mono selection:bg-matrix selection:text-console crt flex flex-col overflow-hidden">
      
      {/* Top Navigation Bar */}
      <header className="h-12 bg-dim border-b border-graphite flex items-center justify-between px-4 shrink-0 z-50">
        <div className="flex items-center gap-4">
            <div className="font-bold text-white tracking-widest flex items-center gap-2">
                <div className="w-3 h-3 bg-matrix rounded-full animate-pulse" />
                SYSTEM_OS <span className="text-gray-600 text-xs">v2.4</span>
            </div>

            {/* View Switcher */}
            <div className="hidden md:flex bg-graphite/50 p-1 rounded border border-graphite ml-8">
                <button 
                    onClick={() => setViewMode('CLI')}
                    className={`px-4 py-1 rounded text-xs font-bold transition-all flex items-center gap-2 ${viewMode === 'CLI' ? 'bg-matrix text-console shadow-[0_0_10px_rgba(0,255,156,0.4)]' : 'text-gray-400 hover:text-white'}`}
                >
                    <Terminal size={14} /> TERMINAL
                </button>
                <button 
                    onClick={() => setViewMode('GUI')}
                    className={`px-4 py-1 rounded text-xs font-bold transition-all flex items-center gap-2 ${viewMode === 'GUI' ? 'bg-matrix text-console shadow-[0_0_10px_rgba(0,255,156,0.4)]' : 'text-gray-400 hover:text-white'}`}
                >
                    <LayoutGrid size={14} /> INTERFACE
                </button>
            </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="hidden md:flex items-center gap-2">
                <Cpu size={14} />
                <span>CPU: 12%</span>
            </div>
            <div className="flex items-center gap-2">
                <Wifi size={14} />
                <span>NET: ONLINE</span>
            </div>
            <div className="flex items-center gap-2 text-matrix">
                <Battery size={14} />
                <span>100%</span>
            </div>
        </div>
      </header>

      {/* Mobile View Switcher (Visible only on small screens) */}
      <div className="md:hidden bg-dim border-b border-graphite p-2 flex gap-2">
         <button 
            onClick={() => setViewMode('CLI')}
            className={`flex-1 py-2 rounded text-xs font-bold flex items-center justify-center gap-2 border ${viewMode === 'CLI' ? 'bg-matrix/10 text-matrix border-matrix' : 'bg-transparent text-gray-500 border-transparent'}`}
        >
            <Terminal size={14} /> TERMINAL
        </button>
        <button 
            onClick={() => setViewMode('GUI')}
            className={`flex-1 py-2 rounded text-xs font-bold flex items-center justify-center gap-2 border ${viewMode === 'GUI' ? 'bg-matrix/10 text-matrix border-matrix' : 'bg-transparent text-gray-500 border-transparent'}`}
        >
            <LayoutGrid size={14} /> INTERFACE
        </button>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden">
        {/* 
          We keep the Terminal mounted but hidden when in GUI mode to preserve state 
          (scroll position, command history, input value).
        */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${viewMode === 'CLI' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
             <TerminalShell 
                history={history} 
                onCommand={handleCommand} 
                isProcessing={isProcessing}
                cwd={cwd}
            />
        </div>

        {/* GUI View */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${viewMode === 'GUI' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <GuiShell onSwitchToTerminal={() => setViewMode('CLI')} />
        </div>
      </main>

    </div>
  );
};

export default App;
