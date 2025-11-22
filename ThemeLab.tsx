
import React from 'react';
import { motion } from 'framer-motion';
import { COLOR_PALETTES } from '../constants';
import { Palette } from 'lucide-react';

const ThemeLab = () => {
  return (
    <section className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
           <Palette className="text-accent" size={32} />
           <h2 className="text-3xl font-bold text-white">Theme <span className="text-primary">Laboratory</span></h2>
        </div>
        
        <p className="text-gray-400 mb-12 max-w-2xl">
           Explore the different visual identities of this portfolio. Click the dock icon or settings to apply them globally.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {COLOR_PALETTES.map((palette, index) => (
             <motion.div
               key={palette.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="bg-surface border border-white/10 rounded-xl overflow-hidden group hover:shadow-2xl transition-all hover:-translate-y-2"
             >
               {/* Preview Area */}
               <div className="h-32 w-full relative flex items-center justify-center overflow-hidden" style={{ backgroundColor: palette.bg }}>
                  <div className="absolute inset-0 opacity-20" style={{ background: `linear-gradient(45deg, ${palette.primary} 25%, transparent 25%, transparent 50%, ${palette.primary} 50%, ${palette.primary} 75%, transparent 75%, transparent)` , backgroundSize: '20px 20px' }}></div>
                  <div className="relative z-10 flex gap-3">
                     <div className="w-8 h-8 rounded-full shadow-lg" style={{ backgroundColor: palette.primary }}></div>
                     <div className="w-8 h-8 rounded-full shadow-lg" style={{ backgroundColor: palette.secondary }}></div>
                     <div className="w-8 h-8 rounded-full shadow-lg" style={{ backgroundColor: palette.accent }}></div>
                  </div>
               </div>
               
               <div className="p-5">
                 <h3 className="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">{palette.name}</h3>
                 <p className="text-xs text-gray-500">{palette.desc}</p>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeLab;
