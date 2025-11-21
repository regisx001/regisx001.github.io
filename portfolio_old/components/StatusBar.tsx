import React, { useEffect, useState } from 'react';
import { Wifi, Battery, Activity, Lock } from 'lucide-react';

interface StatusBarProps {
  isProcessing: boolean;
}

export const StatusBar: React.FC<StatusBarProps> = ({ isProcessing }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-10 bg-graphite/80 border-t border-graphite flex items-center justify-between px-4 text-xs font-mono uppercase tracking-wider text-gray-500 select-none z-20">
      <div className="flex items-center gap-4">
        <div className={`flex items-center gap-2 ${isProcessing ? 'text-warning animate-pulse' : 'text-matrix'}`}>
          <Activity className="w-3 h-3" />
          <span>{isProcessing ? 'PROCESSING...' : 'IDLE'}</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Lock className="w-3 h-3" />
          <span>SSL: SECURE</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">RAM: 64TB</div>
        <div className="flex items-center gap-2">
            <span>{time.toLocaleTimeString([], { hour12: false })}</span>
        </div>
        <div className="flex items-center gap-2 text-matrix">
            <Wifi className="w-3 h-3" />
            <Battery className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};