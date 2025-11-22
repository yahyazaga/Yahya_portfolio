
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAchievement } from './AchievementContext';
import { Lock, Unlock } from 'lucide-react';

const SecretZone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { unlockAchievement } = useAchievement();

  useEffect(() => {
    let keys: string[] = [];
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.push(e.key.toUpperCase());
      if (keys.length > 6) keys.shift();
      const code = keys.join('');

      if (code.includes('YES YK') || code.includes('YESYK')) {
        setIsOpen(true);
        unlockAchievement('easter_egg');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [unlockAchievement]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Matrix Rain Background Effect (Simplified) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             {[...Array(20)].map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute text-green-500 font-mono text-xs vertical-rl"
                 style={{ left: `${Math.random() * 100}%`, top: -50 }}
                 animate={{ y: window.innerHeight + 100 }}
                 transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, ease: "linear" }}
               >
                 01010101
               </motion.div>
             ))}
          </div>

          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative z-10 text-center p-8 border border-green-500/50 bg-black/90 rounded-2xl shadow-[0_0_50px_rgba(0,255,0,0.2)] max-w-2xl"
          >
            <Unlock size={48} className="text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-mono font-bold text-green-500 mb-4 glitch-text">ACCESS GRANTED</h1>
            <p className="text-green-300 font-mono text-lg mb-8">
              Welcome to the hidden layer, Agent. <br/>
              You have found the secret developer zone.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-left mb-8">
               <div className="p-4 border border-green-500/30 rounded bg-green-900/10">
                  <h3 className="text-green-400 font-bold">Secret 1</h3>
                  <p className="text-green-600 text-sm">Yahya actually prefers coffee over tea, despite the stats.</p>
               </div>
               <div className="p-4 border border-green-500/30 rounded bg-green-900/10">
                  <h3 className="text-green-400 font-bold">Secret 2</h3>
                  <p className="text-green-600 text-sm">This portfolio was built with love and a lot of caffeine.</p>
               </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 bg-green-600 hover:bg-green-500 text-black font-bold rounded font-mono transition-colors"
            >
              EXIT SYSTEM
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SecretZone;
