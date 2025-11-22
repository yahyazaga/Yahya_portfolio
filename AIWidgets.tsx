
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Lightbulb, Target } from 'lucide-react';
import { AI_WIDGET_DATA } from '../constants';
import { useSound } from './SoundManager';

const AIWidgets = () => {
  const [activeTab, setActiveTab] = useState<'motivation' | 'tips' | 'ideas'>('motivation');
  const [content, setContent] = useState(AI_WIDGET_DATA.motivation[0]);
  const { playSound } = useSound();

  useEffect(() => {
    // Rotate content randomly when tab changes
    const data = AI_WIDGET_DATA[activeTab];
    setContent(data[Math.floor(Math.random() * data.length)]);
  }, [activeTab]);

  const tabs = [
    { id: 'motivation', icon: Target, label: 'Motivation' },
    { id: 'tips', icon: Lightbulb, label: 'Pro Tip' },
    { id: 'ideas', icon: Sparkles, label: 'Idea' },
  ];

  return (
    <section className="py-10 flex justify-center relative z-10">
      <div className="glass-panel p-1 rounded-2xl flex flex-col md:flex-row gap-4 md:items-center max-w-4xl w-full mx-4 bg-surface/40 border border-white/5">
        
        {/* Sidebar Controls */}
        <div className="flex md:flex-col gap-2 p-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => { setActiveTab(t.id as any); playSound('click'); }}
              className={`p-3 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === t.id ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <t.icon size={18} />
              <span className="text-xs font-bold md:hidden">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-1 p-6 min-h-[120px] flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + content}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
               <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                 AI Generated {tabs.find(t => t.id === activeTab)?.label}
               </h4>
               <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                 "{content}"
               </p>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 right-0 p-4 opacity-10">
             <Sparkles size={48} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIWidgets;
