
import React from 'react';
import { motion } from 'framer-motion';
import { ROUTINE_DATA } from '../constants';
import * as Icons from 'lucide-react';

const Routine = () => {
  return (
    <section className="py-20 bg-surface/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Daily <span className="text-secondary">Routine</span></h2>
          <p className="text-gray-400">Discipline is the bridge between goals and accomplishment.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {ROUTINE_DATA.map((item, index) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.Clock;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="w-full sm:w-64 glass-panel p-6 rounded-2xl border border-white/5 hover:border-secondary/50 text-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-12 h-12 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 text-secondary group-hover:scale-110 transition-transform">
                   <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.time}</h3>
                <p className="text-gray-400 text-sm">{item.activity}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Routine;
