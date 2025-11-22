
import React from 'react';
import { motion } from 'framer-motion';

const CosmicLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Nebula */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[80px]"></div>
      </div>

      {/* Central Spinner */}
      <div className="relative w-32 h-32 mb-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-2 border-b-2 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.5)]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border-r-2 border-l-2 border-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.5)]"
        />
        <div className="absolute inset-0 flex items-center justify-center font-mono text-white font-bold text-xl animate-pulse">
          YK
        </div>
      </div>

      {/* Text */}
      <div className="text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2 tracking-widest"
        >
          ENTERING SYSTEM
        </motion.h2>
        <motion.div 
          className="w-64 h-1 bg-gray-800 mx-auto rounded-full overflow-hidden"
        >
           <motion.div 
             initial={{ width: 0 }}
             animate={{ width: "100%" }}
             transition={{ duration: 2, ease: "easeInOut" }}
             className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
           />
        </motion.div>
        <p className="text-gray-500 text-xs font-mono mt-2">Initializing Neural Networks...</p>
      </div>
    </motion.div>
  );
};

export default CosmicLoader;
