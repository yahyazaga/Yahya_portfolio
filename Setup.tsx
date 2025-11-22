
import React from 'react';
import { motion } from 'framer-motion';
import { SETUP_DATA } from '../constants';
import { Terminal, Code, Keyboard, Headphones, Coffee, GitBranch, Monitor } from 'lucide-react';

const iconMap: any = {
  Terminal: Terminal,
  Code: Code,
  Keyboard: Keyboard,
  Headphones: Headphones,
  Coffee: Coffee,
  GitBranch: GitBranch
};

const Setup = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">My <span className="text-secondary">Setup</span></h2>
          <p className="text-gray-400">The tools that power my workflow.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SETUP_DATA.map((tool, index) => {
            const Icon = iconMap[tool.icon] || Monitor;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="bg-surface/50 backdrop-blur-sm border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-3 text-center group hover:border-primary/50 transition-all cursor-default"
              >
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{tool.name}</h4>
                  <p className="text-xs text-gray-500">{tool.type}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Setup;
