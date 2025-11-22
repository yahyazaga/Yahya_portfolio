
import React from 'react';
import { motion } from 'framer-motion';
import { YAHYA_IMAGES } from '../constants';
import EnhancedImage from './EnhancedImage';

const Gallery = () => {
  // Duplicate images for seamless loop
  const images = [...Object.values(YAHYA_IMAGES), ...Object.values(YAHYA_IMAGES)];

  return (
    <section className="py-24 overflow-hidden relative z-10 bg-black/20">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Visual <span className="text-primary">Showcase</span></h2>
        <p className="text-gray-400">A cinematic journey.</p>
      </div>

      <div className="relative w-full flex overflow-hidden mask-gradient">
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {images.map((src, i) => (
            <div 
              key={i} 
              className="relative min-w-[280px] md:min-w-[350px] aspect-[3/4] rounded-2xl overflow-hidden group perspective-1000"
            >
              <EnhancedImage 
                src={src}
                alt="Gallery Item"
                effect="tilt"
                showSheen={true}
                containerClassName="w-full h-full shadow-2xl"
              />
              <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl"></div>
            </div>
          ))}
        </motion.div>
        
        {/* Vignette Mask */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Gallery;
