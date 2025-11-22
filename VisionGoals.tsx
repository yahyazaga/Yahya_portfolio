
import React from 'react';
import { motion } from 'framer-motion';
import { GOALS_DATA } from '../constants';
import { Target, ArrowRight } from 'lucide-react';

const VisionGoals = () => {
  return (
    <section className="py-20 bg-black/20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           
           {/* Text Content */}
           <div>
              <div className="flex items-center gap-2 mb-4 text-accent">
                 <Target size={24} />
                 <span className="font-bold uppercase tracking-wider text-sm">Vision 2025</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">My Roadmap to <span className="text-primary">Excellence</span></h2>
              <p className="text-gray-400 text-lg mb-8">
                 I don't just write code; I build my future. Here is what I am working towards in the coming months.
              </p>
              <button className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white flex items-center gap-2 transition-colors">
                 View Full Plan <ArrowRight size={16} />
              </button>
           </div>

           {/* Cards */}
           <div className="grid gap-4">
              {GOALS_DATA.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface border border-white/5 p-5 rounded-xl hover:border-primary/30 transition-colors"
                >
                   <div className="flex justify-between mb-2">
                      <h3 className="font-bold text-white">{goal.title}</h3>
                      <span className="text-primary font-mono text-sm">{goal.progress}%</span>
                   </div>
                   <p className="text-sm text-gray-400 mb-3">{goal.desc}</p>
                   <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent"
                      />
                   </div>
                </motion.div>
              ))}
           </div>

        </div>
      </div>
    </section>
  );
};

export default VisionGoals;
