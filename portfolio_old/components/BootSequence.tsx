import React, { useEffect, useState } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  
  const bootLines = [
    "INITIALIZING KERNEL...",
    "LOADING MODULES: [CPU] [GPU] [NEURAL_ENGINE]",
    "MOUNTING FILESYSTEM: READ-ONLY",
    "ESTABLISHING SECURE CONNECTION...",
    "HANDSHAKE ACCEPTED.",
    "LOADING USER PROFILE...",
    "SYSTEM READY."
  ];

  useEffect(() => {
    let delay = 0;
    bootLines.forEach((line, index) => {
      delay += Math.random() * 300 + 100;
      setTimeout(() => {
        setLogs(prev => [...prev, line]);
        if (index === bootLines.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, delay);
    });
  }, []);

  const getFormattedTime = () => {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    const ms = now.getMilliseconds().toString().padStart(3, '0');
    return `${time}.${ms}`;
  };

  return (
    <div className="w-full h-screen bg-console flex flex-col justify-center items-center text-matrix font-mono p-4 crt">
      <div className="w-full max-w-lg">
        {logs.map((log, i) => (
          <div key={i} className="mb-1">
            <span className="text-gray-500 mr-2">[{getFormattedTime()}]</span>
            {log}
          </div>
        ))}
        <div className="animate-pulse mt-2">_</div>
      </div>
    </div>
  );
};