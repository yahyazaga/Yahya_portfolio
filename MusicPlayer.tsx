
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, Music, Volume2 } from 'lucide-react';
import { PLAYLIST } from '../constants';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(PLAYLIST[currentTrack].url);
      audioRef.current.volume = 0.3;
      audioRef.current.onended = handleNext;
    } else {
      audioRef.current.src = PLAYLIST[currentTrack].url;
      if (isPlaying) audioRef.current.play();
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % PLAYLIST.length);
    setIsPlaying(true);
  };

  return (
    <div className="fixed bottom-6 right-24 z-40 flex items-end flex-col gap-2">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl w-64 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse">
                <Music size={20} className="text-white" />
              </div>
              <div className="overflow-hidden">
                <p className="text-white text-sm font-bold truncate">{PLAYLIST[currentTrack].title}</p>
                <p className="text-gray-400 text-xs">Lofi / Focus</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-2">
               <div className="flex gap-1 h-3 items-end">
                 {[1,2,3,4].map(i => (
                   <motion.div
                     key={i}
                     animate={{ height: isPlaying ? [4, 12, 4] : 4 }}
                     transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                     className="w-1 bg-primary rounded-full"
                   />
                 ))}
               </div>
               <div className="flex gap-3">
                 <button onClick={togglePlay} className="text-white hover:text-primary transition-colors">
                   {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                 </button>
                 <button onClick={handleNext} className="text-white hover:text-primary transition-colors">
                   <SkipForward size={20} />
                 </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`p-3 rounded-full shadow-lg border transition-all ${isPlaying ? 'bg-primary/20 border-primary text-primary animate-pulse' : 'bg-surface border-white/10 text-gray-400'}`}
      >
        {isPlaying ? <Volume2 size={20} /> : <Music size={20} />}
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
