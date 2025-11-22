
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { CHAT_DATA } from '../constants';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: CHAT_DATA.greeting, sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [notification, setNotification] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setNotification(false);
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Bot Logic
    setTimeout(() => {
      const lowerInput = userMsg.text.toLowerCase();
      const match = CHAT_DATA.responses.find(r => 
        r.keywords.some(k => lowerInput.includes(k))
      );
      const botText = match ? match.answer : CHAT_DATA.unknown;
      
      setMessages(prev => [...prev, { id: Date.now() + 1, text: botText, sender: 'bot' }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[90vw] md:w-96 bg-surface/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: '60vh' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/50 p-4 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/20 rounded-full">
                   <Bot size={20} className="text-white" />
                </div>
                <div>
                   <span className="font-bold text-white block leading-none">Ask Yahya</span>
                   <span className="text-[10px] text-white/80 flex items-center gap-1">
                     <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online
                   </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 min-h-[200px]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white rounded-tr-none shadow-md'
                        : 'bg-white/10 text-gray-100 rounded-tl-none border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 border-t border-white/10 flex gap-2 bg-black/20">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2 bg-primary rounded-xl text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-4 bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_20px_rgba(106,92,237,0.5)] text-white flex items-center justify-center group"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        
        {/* Notification Badge */}
        {!isOpen && notification && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-surface animate-bounce flex items-center justify-center text-[10px] font-bold">1</span>
        )}
        
        {/* Tooltip */}
        {!isOpen && (
           <div className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Chat with AI
           </div>
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;
