import React from 'react';

export const HelpView: React.FC = () => {
  const commands = [
    { cmd: 'about', desc: 'Display system operator information' },
    { cmd: 'projects', desc: 'List active project directories' },
    { cmd: 'contact', desc: 'Open communication channels' },
    { cmd: 'ai <query>', desc: 'Query the Neural Engine (Gemini AI)' },
    { cmd: 'clear', desc: 'Clear terminal buffer' },
    { cmd: 'help', desc: 'Show this manual' },
  ];

  return (
    <table className="w-full max-w-lg border-collapse text-sm">
      <thead>
        <tr>
          <th className="text-left text-gray-500 py-2 border-b border-graphite w-32">COMMAND</th>
          <th className="text-left text-gray-500 py-2 border-b border-graphite">FUNCTION</th>
        </tr>
      </thead>
      <tbody>
        {commands.map((c) => (
          <tr key={c.cmd} className="group hover:bg-white/5">
            <td className="py-1 text-matrix font-bold">{c.cmd}</td>
            <td className="py-1 text-gray-400">{c.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};