
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus, Maximize2 } from 'lucide-react';
import { useToast } from './ToastContext';
import { useSound } from './SoundManager';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<string[]>(["Welcome to YK-OS v1.0", "Type 'help' for commands."]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const { addToast } = useToast();
  const { playSound } = useSound();

  const commands: { [key: string]: string } = {
    help: "Available commands: about, skills, contact, clear, date, whoami, sudo",
    about: "Yahya Khan: BSCS Student, C++ enthusiast, and gym goer.",
    skills: "Expertise: C++, OOP, Logic Building. Learning: Web Dev.",
    contact: "Email: yahya@placeholder.com | Phone: +92 300...",
    whoami: "guest@portfolio",
    date: new Date().toLocaleString(),
    sudo: "Nice try. Permission denied.",
    clear: "CLEAR",
  };

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [history, isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    playSound('type');
    const cmd = input.trim().toLowerCase();
    const response = commands[cmd] || `Command not found: ${cmd}`;

    if (cmd === 'clear') {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, `> ${input}`, response]);
    }
    
    if (cmd === 'sudo') addToast("Admin access denied!", "error");
    
    setInput("");
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-40 p-4 rounded-full text-white shadow-[0_0_20px_rgba(0,255,65,0.3)] border border-green-500/30 transition-all ${isOpen ? 'bg-green-500/20' : 'bg-black/50 backdrop-blur-md'}`}
      >
        <TerminalIcon size={24} className="text-green-400" />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            className="fixed bottom-24 left-6 w-[90vw] md:w-[600px] h-[400px] bg-[#0c0c0c] rounded-xl border border-gray-800 shadow-2xl z-50 overflow-hidden flex flex-col font-mono text-sm"
          >
            {/* Title Bar */}
            <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-800 handle cursor-move">
              <div className="flex items-center gap-2">
                <TerminalIcon size={14} className="text-gray-400" />
                <span className="text-gray-400 font-bold">user@yk-portfolio:~</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"></button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 overflow-y-auto text-green-500 custom-scrollbar" onClick={() => document.getElementById('term-input')?.focus()}>
              {history.map((line, i) => (
                <div key={i} className="mb-1 break-words">{line}</div>
              ))}
              <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
                <span className="text-green-400 font-bold">{'>'}</span>
                <input 
                  id="term-input"
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono"
                  autoFocus
                  autoComplete="off"
                />
              </form>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
