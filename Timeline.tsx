
import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_DATA } from '../constants';
import * as Icons from 'lucide-react';

const Timeline = () => {
  return (
    <section className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My <span className="text-primary">Journey</span></h2>
          <p className="text-gray-400">From High School to University & Code.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/5 rounded-full"></div>

          {TIMELINE_DATA.map((item, index) => {
            // Dynamic Icon
            const IconComponent = (Icons as any)[item.icon] || Icons.Circle;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center justify-between mb-12 ${isLeft ? 'flex-row-reverse' : ''}`}
              >
                {/* Spacer */}
                <div className="w-5/12"></div>

                {/* Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-surface border-4 border-primary z-10 flex items-center justify-center shadow-[0_0_15px_rgba(106,92,237,0.5)]">
                  <IconComponent size={16} className="text-white" />
                </div>

                {/* Content Card */}
                <div className="w-5/12">
                   <div className={`glass-panel p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group hover:-translate-y-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <span className="text-accent font-mono text-sm font-bold">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
