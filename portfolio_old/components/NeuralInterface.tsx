import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToSystem } from '../services/geminiService';
import { ChatMessage, SystemStatus } from '../types';
import { Send, Terminal, Cpu } from 'lucide-react';

const NeuralInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'SYSTEM_ONLINE. Interface ready. Query the architecture.', timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<SystemStatus>(SystemStatus.IDLE);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || status === SystemStatus.PROCESSING) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setStatus(SystemStatus.PROCESSING);

    const responseText = await sendMessageToSystem(userMsg.text);
    
    const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
    setMessages(prev => [...prev, modelMsg]);
    setStatus(SystemStatus.IDLE);
  };

  return (
    <div className="w-full max-w-md bg-[#0A0E16] border border-[#1C1F26] rounded-lg overflow-hidden flex flex-col h-[500px] shadow-2xl">
      {/* Header */}
      <div className="bg-[#1C1F26] p-3 flex items-center justify-between border-b border-[#21F6FF]/20">
        <div className="flex items-center space-x-2 text-[#21F6FF]">
          <Terminal size={16} />
          <span className="font-display text-sm tracking-widest">NEURAL_INTERFACE</span>
        </div>
        <div className="flex items-center space-x-2">
           <span className={`h-2 w-2 rounded-full ${status === SystemStatus.PROCESSING ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></span>
           <span className="text-[10px] text-gray-400 font-code">{status}</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto font-code text-sm space-y-4 bg-[#0A0E16] relative" ref={scrollRef}>
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(0deg,transparent_24%,#21F6FF_25%,#21F6FF_26%,transparent_27%,transparent_74%,#21F6FF_75%,#21F6FF_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,#21F6FF_25%,#21F6FF_26%,transparent_27%,transparent_74%,#21F6FF_75%,#21F6FF_76%,transparent_77%,transparent)] bg-[length:30px_30px]"></div>
        
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] p-3 rounded-sm border ${
                msg.role === 'user' 
                  ? 'border-[#FF5733]/30 bg-[#FF5733]/10 text-[#F2F5F7]' 
                  : 'border-[#21F6FF]/30 bg-[#21F6FF]/5 text-[#21F6FF]'
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.text}</p>
              <span className="text-[10px] opacity-50 block mt-2">
                {msg.role === 'user' ? '>> INPUT' : '>> OUTPUT'}
              </span>
            </div>
          </div>
        ))}
        {status === SystemStatus.PROCESSING && (
            <div className="flex justify-start">
                <div className="text-[#21F6FF] text-xs animate-pulse flex items-center gap-2">
                    <Cpu size={14} /> CALCULATING TENSORS...
                </div>
            </div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 bg-[#1C1F26] border-t border-[#21F6FF]/20 flex items-center gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Enter system query..."
          className="flex-1 bg-[#0A0E16] text-[#F2F5F7] font-code text-sm border border-[#333] p-2 focus:outline-none focus:border-[#21F6FF] transition-colors placeholder-gray-600"
        />
        <button 
          onClick={handleSend}
          className="p-2 bg-[#21F6FF]/10 border border-[#21F6FF]/50 text-[#21F6FF] hover:bg-[#21F6FF]/20 transition-colors"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default NeuralInterface;