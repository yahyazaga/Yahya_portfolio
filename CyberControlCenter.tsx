
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Shield, Cpu, Activity, X, Volume2, Palette, Image as ImageIcon, Trophy } from 'lucide-react';
import { useAchievement } from './AchievementContext';
import { useSound } from './SoundManager';
import { useToast } from './ToastContext';

const CyberControlCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { unlocked } = useAchievement();
  const { playSound } = useSound();
  const { addToast } = useToast();

  // Calculate Level based on Achievements
  const level = Math.floor(unlocked.length / 2) + 1;
  const xp = (unlocked.length % 2) * 50;
  const nextLevelXp = 100;

  const toggle = () => {
    setIsOpen(!isOpen);
    playSound(isOpen ? 'click' : 'whoosh');
  };

  return (
    <>
      {/* Trigger */}
      <button 
        onClick={toggle}
        className="fixed top-24 right-6 z-40 p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full hover:bg-primary/20 hover:border-primary transition-all group"
      >
        <Settings className="text-white group-hover:rotate-90 transition-transform duration-500" size={20} />
      </button>

      {/* Dashboard Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
             initial={{ x: "100%" }}
             animate={{ x: 0 }}
             exit={{ x: "100%" }}
             transition={{ type: "spring", damping: 20 }}
             className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-[#050505]/95 backdrop-blur-xl border-l border-white/10 z-50 p-6 overflow-y-auto shadow-2xl"
          >
             <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold font-mono text-white flex items-center gap-2">
                   <Cpu className="text-primary" /> CONTROL CENTER
                </h2>
                <button onClick={toggle}><X className="text-gray-400 hover:text-white" /></button>
             </div>

             {/* Gamification / Profile Stats */}
             <div className="mb-8 p-6 rounded-2xl bg-surface/50 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                
                <div className="flex justify-between items-end mb-2">
                   <span className="text-gray-400 text-sm font-mono">OPERATOR LEVEL</span>
                   <span className="text-3xl font-bold text-primary">{level}</span>
                </div>
                
                <div className="w-full h-2 bg-black rounded-full overflow-hidden mb-4">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: `${(xp / nextLevelXp) * 100}%` }}
                     className="h-full bg-secondary"
                   />
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-mono">
                   <span>{xp} XP</span>
                   <span>{nextLevelXp} XP TO NEXT</span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                   <div className="bg-black/30 p-2 rounded flex items-center gap-2">
                      <Trophy size={14} className="text-yellow-500" />
                      <span className="text-xs text-white">{unlocked.length} Badges</span>
                   </div>
                   <div className="bg-black/30 p-2 rounded flex items-center gap-2">
                      <Activity size={14} className="text-green-500" />
                      <span className="text-xs text-white">Status: Online</span>
                   </div>
                </div>
             </div>

             {/* System Controls */}
             <div className="space-y-6">
                <div>
                   <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Shield size={14} /> Core Systems
                   </h3>
                   <div className="grid grid-cols-2 gap-3">
                      <button className="p-4 bg-surface/30 border border-white/5 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all flex flex-col items-center gap-2 group">
                         <Volume2 size={20} className="text-gray-400 group-hover:text-white" />
                         <span className="text-xs text-gray-300">Audio FX</span>
                      </button>
                      <button className="p-4 bg-surface/30 border border-white/5 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all flex flex-col items-center gap-2 group">
                         <Palette size={20} className="text-gray-400 group-hover:text-white" />
                         <span className="text-xs text-gray-300">UI Theme</span>
                      </button>
                      <button className="p-4 bg-surface/30 border border-white/5 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all flex flex-col items-center gap-2 group">
                         <ImageIcon size={20} className="text-gray-400 group-hover:text-white" />
                         <span className="text-xs text-gray-300">Wallpaper</span>
                      </button>
                      <button className="p-4 bg-surface/30 border border-white/5 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all flex flex-col items-center gap-2 group">
                         <Activity size={20} className="text-gray-400 group-hover:text-white" />
                         <span className="text-xs text-gray-300">Performance</span>
                      </button>
                   </div>
                </div>
             </div>
             
             <div className="mt-8 p-4 bg-primary/10 border border-primary/30 rounded-xl">
                <p className="text-xs text-primary text-center font-mono">
                   SYSTEM STABLE v2.5.0
                </p>
             </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CyberControlCenter;
