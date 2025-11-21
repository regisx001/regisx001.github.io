import React, { useState, useEffect } from 'react';
import { Activity, Cpu, Wifi, HardDrive, Server, ShieldCheck } from 'lucide-react';

export const SystemMonitor: React.FC = () => {
  const [stats, setStats] = useState({
    cpu: 42,
    ram: 36,
    temp: 45,
    upload: 1.2,
    download: 4.5
  });
  
  const [graphData, setGraphData] = useState<number[]>(Array(30).fill(20));

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        cpu: Math.min(98, Math.max(10, prev.cpu + (Math.random() * 16 - 8))),
        ram: Math.min(90, Math.max(20, prev.ram + (Math.random() * 6 - 3))),
        temp: Math.min(85, Math.max(40, prev.temp + (Math.random() * 4 - 2))),
        upload: Math.max(0.1, prev.upload + (Math.random() * 2 - 1)),
        download: Math.max(1.0, prev.download + (Math.random() * 5 - 2.5))
      }));

      setGraphData(prev => {
        const newValue = Math.random() * 40 + 10;
        const newData = [...prev.slice(1), newValue];
        return newData;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // SVG Path generation for graph
  const generatePath = () => {
    if (graphData.length === 0) return "";
    const max = 60; // Height of graph area
    const stepX = 100 / (graphData.length - 1);
    
    let d = `M 0 ${max - graphData[0]}`;
    graphData.forEach((val, i) => {
      if (i === 0) return;
      d += ` L ${i * stepX} ${max - val}`;
    });
    return d;
  };

  return (
    <div className="w-full max-w-md bg-dim/90 border border-graphite rounded-lg p-5 font-mono text-xs relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] backdrop-blur-md group hover:border-matrix/30 transition-colors">
       {/* Decorative corner accents */}
       <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-matrix/50 group-hover:border-matrix transition-colors"></div>
       <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-matrix/50 group-hover:border-matrix transition-colors"></div>
       <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-matrix/50 group-hover:border-matrix transition-colors"></div>
       <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-matrix/50 group-hover:border-matrix transition-colors"></div>

       <div className="flex items-center justify-between mb-6 border-b border-graphite pb-3">
         <div className="flex items-center gap-2 text-matrix font-bold tracking-wider">
           <Activity size={14} />
           SYSTEM_MONITOR
         </div>
         <div className="flex items-center gap-2 bg-black/40 px-2 py-1 rounded border border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-gray-500 text-[10px]">ONLINE</span>
         </div>
       </div>

       {/* CPU & Memory Grid */}
       <div className="grid grid-cols-2 gap-4 mb-4">
         {/* CPU Block */}
         <div className="bg-black/40 p-3 rounded border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex justify-between items-center mb-2 text-gray-400">
                <span className="flex items-center gap-2"><Cpu size={12} className="text-matrix"/> CPU_LOAD</span>
                <span className="text-matrix font-bold">{stats.cpu.toFixed(0)}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-matrix transition-all duration-500 ease-out shadow-[0_0_8px_rgba(0,255,156,0.5)]" 
                    style={{ width: `${stats.cpu}%` }} 
                />
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-gray-600">
                <span>CORES: 12</span>
                <span>{stats.temp.toFixed(0)}°C</span>
            </div>
         </div>

         {/* RAM Block */}
         <div className="bg-black/40 p-3 rounded border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex justify-between items-center mb-2 text-gray-400">
                <span className="flex items-center gap-2"><HardDrive size={12} className="text-warning"/> MEMORY</span>
                <span className="text-warning font-bold">{stats.ram.toFixed(0)}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-warning transition-all duration-500 ease-out shadow-[0_0_8px_rgba(255,217,61,0.5)]" 
                    style={{ width: `${stats.ram}%` }} 
                />
            </div>
             <div className="mt-2 flex justify-between text-[10px] text-gray-600">
                <span>TOTAL: 64GB</span>
                <span>USED: 23GB</span>
            </div>
         </div>
       </div>

       {/* Network Graph */}
       <div className="bg-black/40 p-3 rounded border border-white/5 mb-4 relative hover:border-white/10 transition-colors">
            <div className="flex justify-between items-center mb-2 text-gray-400 z-10 relative">
                <span className="flex items-center gap-2"><Wifi size={12} className="text-blue-400"/> NET_TRAFFIC</span>
                <div className="flex gap-3 text-[10px]">
                    <span className="text-blue-400">▼ {stats.download.toFixed(1)} MB/s</span>
                    <span className="text-green-400">▲ {stats.upload.toFixed(1)} MB/s</span>
                </div>
            </div>
            
            <div className="h-[60px] w-full relative overflow-hidden border-b border-white/5">
                {/* Grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 60">
                    <path 
                        d={generatePath()} 
                        fill="none" 
                        stroke="#00FF9C" 
                        strokeWidth="1.5" 
                        vectorEffect="non-scaling-stroke"
                        className="drop-shadow-[0_0_4px_rgba(0,255,156,0.5)]"
                    />
                    <path 
                        d={`${generatePath()} V 60 H 0 Z`} 
                        fill="url(#gradient)" 
                        opacity="0.2" 
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#00FF9C" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
       </div>

        {/* Active Processes */}
       <div className="bg-black/40 p-3 rounded border border-white/5">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Server size={12} className="text-purple-400" /> ACTIVE_PROCESSES
            </div>
            <div className="space-y-1 text-[10px] font-mono text-gray-500">
                <div className="flex justify-between hover:bg-white/5 px-1 rounded cursor-default">
                    <span className="text-gray-400"> kernel_task</span>
                    <span className="text-green-500">RUNNING</span>
                </div>
                <div className="flex justify-between hover:bg-white/5 px-1 rounded cursor-default">
                    <span className="text-gray-400"> react_renderer</span>
                    <span className="text-green-500">RUNNING</span>
                </div>
                <div className="flex justify-between hover:bg-white/5 px-1 rounded cursor-default">
                    <span className="text-gray-400"> neural_link_svc</span>
                    <span className="text-yellow-500">STANDBY</span>
                </div>
            </div>
       </div>

       <div className="mt-4 pt-3 border-t border-graphite flex justify-between text-[10px] text-gray-600">
            <div className="flex items-center gap-1.5">
                <ShieldCheck size={10} className="text-green-500" /> FIREWALL: ACTIVE
            </div>
            <div className="font-mono text-gray-500">UPTIME: 14:22:09</div>
       </div>
    </div>
  );
};