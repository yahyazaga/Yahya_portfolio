
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUOTES_DATA } from '../constants';
import { Quote } from 'lucide-react';

const QuoteWall = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 relative z-10 flex justify-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="relative glass-panel p-10 rounded-3xl border border-white/10 text-center overflow-hidden">
           {/* Background Glow */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
           
           <Quote className="text-secondary/20 absolute top-6 left-6 transform -scale-x-100" size={48} />
           
           <AnimatePresence mode="wait">
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.5 }}
             >
               <p className="text-xl md:text-2xl font-serif text-white italic mb-6 leading-relaxed">
                 "{QUOTES_DATA[index].text}"
               </p>
               <div className="flex items-center justify-center gap-2">
                 <span className="h-[1px] w-8 bg-gray-600"></span>
                 <span className="text-accent font-mono text-sm font-bold tracking-widest uppercase">
                   {QUOTES_DATA[index].author}
                 </span>
                 <span className="h-[1px] w-8 bg-gray-600"></span>
               </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default QuoteWall;
