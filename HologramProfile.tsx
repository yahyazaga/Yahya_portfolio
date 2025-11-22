
import React from 'react';
import { motion } from 'framer-motion';
import EnhancedImage from './EnhancedImage';
import { YAHYA_IMAGES } from '../constants';

const HologramProfile = () => {
  return (
    <div className="relative w-full max-w-[350px] aspect-[3/4] mx-auto perspective-1000 group">
      {/* Hologram Base Glow */}
      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[80%] h-[20px] bg-primary/50 blur-xl rounded-[100%] animate-pulse"></div>
      
      {/* 3D Container */}
      <motion.div 
        className="relative w-full h-full transform-style-3d transition-transform duration-500"
        whileHover={{ rotateY: 10, rotateX: -5 }}
      >
        {/* Hologram Frame */}
        <div className="absolute inset-[-10px] border-2 border-primary/30 rounded-[30px] z-20 pointer-events-none">
           {/* Corner Accents */}
           <div className="absolute top-[-2px] left-[-2px] w-6 h-6 border-t-2 border-l-2 border-primary"></div>
           <div className="absolute top-[-2px] right-[-2px] w-6 h-6 border-t-2 border-r-2 border-primary"></div>
           <div className="absolute bottom-[-2px] left-[-2px] w-6 h-6 border-b-2 border-l-2 border-primary"></div>
           <div className="absolute bottom-[-2px] right-[-2px] w-6 h-6 border-b-2 border-r-2 border-primary"></div>
        </div>

        {/* Scanline Effect */}
        <div className="absolute inset-0 z-30 overflow-hidden rounded-[20px] pointer-events-none opacity-30">
           <div className="w-full h-[20%] bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-scanline"></div>
        </div>

        {/* Main Image */}
        <EnhancedImage 
          src={YAHYA_IMAGES.hero}
          alt="Hologram Profile"
          effect="static"
          showSheen={true}
          containerClassName="w-full h-full rounded-[20px] border border-primary/20 bg-black/50 shadow-[0_0_30px_rgba(106,92,237,0.3)]"
          className="opacity-90 grayscale-[20%] contrast-125"
        />

        {/* Glitch Overlays */}
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay rounded-[20px] z-10 pointer-events-none"></div>
      </motion.div>

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
        .animate-scanline {
          animation: scanline 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HologramProfile;
