
import React from 'react';
import { motion } from 'framer-motion';

interface PolaroidProps {
  src: string;
  caption: string;
  rotate: number;
  index: number;
  style?: React.CSSProperties;
}

const DraggablePolaroid: React.FC<PolaroidProps> = ({ src, caption, rotate, index, style }) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -200, right: 200, top: -100, bottom: 100 }}
      whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
      whileTap={{ scale: 0.95 }}
      initial={{ rotate, opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      style={style}
      className="absolute w-48 bg-white p-3 pb-8 shadow-2xl transform hover:shadow-orange-500/20 cursor-grab active:cursor-grabbing z-10"
    >
      <div className="w-full h-40 bg-gray-200 overflow-hidden mb-2">
        <img 
          src={src} 
          alt={caption} 
          className="w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />
      </div>
      <p className="text-black font-handwriting text-center text-sm font-bold transform -rotate-1">{caption}</p>
    </motion.div>
  );
};

export default DraggablePolaroid;
