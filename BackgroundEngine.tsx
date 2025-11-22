
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BACKGROUND_WALLPAPERS } from '../constants';

interface BackgroundEngineProps {
  themeId: string;
}

const BackgroundEngine: React.FC<BackgroundEngineProps> = ({ themeId }) => {
  const [bgImage, setBgImage] = useState(BACKGROUND_WALLPAPERS.neon[0]);
  const [loaded, setLoaded] = useState(false);

  // Map theme to wallpaper category
  useEffect(() => {
    let category = 'neon';
    if (themeId === 'aurora') category = 'winter';
    else if (themeId === 'islamic') category = 'islamic';
    else if (themeId === 'minimal') category = 'minimal';
    else if (themeId === 'matrix') category = 'matrix';
    else if (themeId === 'ocean') category = 'nature';

    const wallpapers = (BACKGROUND_WALLPAPERS as any)[category] || BACKGROUND_WALLPAPERS.neon;
    // Pick a random one from the category
    const selected = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    
    setLoaded(false);
    const img = new Image();
    img.src = selected;
    img.onload = () => {
      setBgImage(selected);
      setLoaded(true);
    };
  }, [themeId]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
      <AnimatePresence mode="wait">
        <motion.div
          key={bgImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
           {themeId !== 'minimal' && (
             <div 
               className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-1000"
               style={{ backgroundImage: `url(${bgImage})` }}
             />
           )}
           {/* Overlay Gradients for Readability */}
           <div className={`absolute inset-0 ${themeId === 'minimal' ? 'bg-white' : 'bg-gradient-to-b from-background/80 via-background/90 to-background'}`}></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BackgroundEngine;
