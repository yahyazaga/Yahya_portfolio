
import React from 'react';
import { motion } from 'framer-motion';
import { SUPERPOWERS } from '../constants';
import { Zap, Brain, Eye, BookOpen } from 'lucide-react';

const iconMap: any = { Zap, Brain, Eye, BookOpen };

const Superpowers = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My <span className="text-accent">Superpowers</span></h2>
          <p className="text-gray-400">Special abilities unlocked through caffeine and code.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUPERPOWERS.map((power, index) => {
            const Icon = iconMap[power.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group h-64 perspective-1000"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-surface/80 to-surface/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xl transition-transform duration-500 transform-style-3d group-hover:rotate-y-12">
                   {/* Hologram Beam */}
                   <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-1 h-10 bg-accent/50 blur-sm group-hover:h-20 transition-all duration-500"></div>
                   
                   <div className="w-16 h-16 mb-6 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:text-white group-hover:bg-accent transition-all shadow-[0_0_20px_rgba(255,122,0,0.3)]">
                      <Icon size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">{power.title}</h3>
                   <p className="text-sm text-gray-400">{power.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Superpowers;
