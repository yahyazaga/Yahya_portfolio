
import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS_DATA } from '../constants';
import { GitCommit, Folder, Clock, Coffee } from 'lucide-react';

const iconMap: any = {
  GitCommit: GitCommit,
  Folder: Folder,
  Clock: Clock,
  Coffee: Coffee
};

const Achievements = () => {
  return (
    <section className="py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ACHIEVEMENTS_DATA.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 text-center group transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 font-mono">
                  {item.value}{item.suffix}
                </h3>
                <p className="text-sm text-gray-400 uppercase tracking-wider">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
