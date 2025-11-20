import React, { useEffect, useState } from 'react';

const SystemVisualizer: React.FC = () => {
  // Simulate some live data flickering
  const [activity, setActivity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivity(prev => (prev + 1) % 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const orange = "#FF5733";
  const cyan = "#21F6FF";
  const graphite = "#1C1F26";

  return (
    <div className="w-full h-[400px] flex items-center justify-center relative overflow-hidden border border-[#1C1F26] bg-[#0A0E16]/50 rounded-lg backdrop-blur-sm">
      <div className="absolute top-4 left-4 font-code text-xs text-gray-500">
        <div>SYS_MONITOR_V2.1</div>
        <div>LOAD: {30 + Math.random() * 20}%</div>
      </div>
      
      <svg width="100%" height="100%" viewBox="0 0 600 400" className="w-full h-full">
        <defs>
          <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={orange} stopOpacity="0" />
            <stop offset="50%" stopColor={orange} stopOpacity="1" />
            <stop offset="100%" stopColor={orange} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={cyan} stopOpacity="0" />
            <stop offset="50%" stopColor={cyan} stopOpacity="1" />
            <stop offset="100%" stopColor={cyan} stopOpacity="0" />
          </linearGradient>
          <filter id="glow-orange">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow-cyan">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connecting Lines (Circuit Traces) */}
        {/* Center to Top Left (Frontend) */}
        <path d="M300 200 L 150 100" stroke={graphite} strokeWidth="2" />
        <path d="M300 200 L 150 100" stroke="url(#grad-orange)" strokeWidth="2" strokeDasharray="10, 200" className="animate-flow" />
        
        {/* Center to Top Right (Backend) */}
        <path d="M300 200 L 450 100" stroke={graphite} strokeWidth="2" />
        <path d="M300 200 L 450 100" stroke="url(#grad-orange)" strokeWidth="2" strokeDasharray="10, 200" className="animate-flow" style={{animationDelay: '0.5s'}} />

        {/* Center to Bottom Left (Training) */}
        <path d="M300 200 L 150 300" stroke={graphite} strokeWidth="2" />
        <path d="M150 300 L 300 200" stroke="url(#grad-cyan)" strokeWidth="2" strokeDasharray="10, 200" className="animate-flow" style={{animationDelay: '1s'}} />

        {/* Center to Bottom Right (Inference) */}
        <path d="M300 200 L 450 300" stroke={graphite} strokeWidth="2" />
        <path d="M450 300 L 300 200" stroke="url(#grad-cyan)" strokeWidth="2" strokeDasharray="10, 200" className="animate-flow" style={{animationDelay: '1.5s'}} />

        {/* Nodes */}
        
        {/* Frontend Node */}
        <g transform="translate(150, 100)">
          <circle r="30" fill="#0A0E16" stroke={orange} strokeWidth="2" />
          <text x="0" y="5" textAnchor="middle" fill={orange} className="font-code text-[10px]">UI/UX</text>
          <circle r="34" fill="none" stroke={orange} strokeOpacity="0.3" strokeDasharray="4 4">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Backend Node */}
        <g transform="translate(450, 100)">
          <rect x="-25" y="-25" width="50" height="50" fill="#0A0E16" stroke={orange} strokeWidth="2" />
          <text x="0" y="5" textAnchor="middle" fill={orange} className="font-code text-[10px]">API</text>
          <rect x="-30" y="-30" width="60" height="60" fill="none" stroke={orange} strokeOpacity="0.3" strokeDasharray="2 8">
             <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="12s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Training Node */}
        <g transform="translate(150, 300)">
          <polygon points="0,-30 -26,15 26,15" fill="#0A0E16" stroke={cyan} strokeWidth="2" />
          <text x="0" y="5" textAnchor="middle" fill={cyan} className="font-code text-[10px]">DATA</text>
          <circle r="35" fill="none" stroke={cyan} strokeOpacity="0.3" strokeDasharray="2 2">
            <animate attributeName="r" values="35;38;35" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Inference Node */}
        <g transform="translate(450, 300)">
          <circle r="30" fill="#0A0E16" stroke={cyan} strokeWidth="2" />
          <text x="0" y="5" textAnchor="middle" fill={cyan} className="font-code text-[10px]">MODEL</text>
          <path d="M-40 0 A 40 40 0 0 1 40 0" fill="none" stroke={cyan} strokeOpacity="0.3" strokeDasharray="5 5">
             <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M-40 0 A 40 40 0 0 0 40 0" fill="none" stroke={cyan} strokeOpacity="0.3" strokeDasharray="5 5">
             <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="4s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Central Core */}
        <g transform="translate(300, 200)">
          <circle r="40" fill="#0A0E16" stroke="#F2F5F7" strokeWidth="2" filter="url(#glow-cyan)" />
          <text x="0" y="5" textAnchor="middle" fill="#F2F5F7" className="font-display font-bold text-xs tracking-widest">CORE</text>
          <circle r="45" fill="none" stroke="#F2F5F7" strokeOpacity="0.2" strokeWidth="1" />
          <circle r="50" fill="none" stroke="#F2F5F7" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="10 5">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default SystemVisualizer;