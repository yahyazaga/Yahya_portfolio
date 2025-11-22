
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Cpu } from 'lucide-react';
import OrbitSkills from './OrbitSkills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-4">Technical <span className="text-accent">Arsenal</span></h2>
          <p className="text-gray-400">Rotating through the technologies I use daily.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* 3D Orbit */}
           <div className="order-2 lg:order-1">
             <OrbitSkills />
           </div>

           {/* Descriptive List (for accessibility and detail) */}
           <div className="order-1 lg:order-2 grid gap-4 max-h-[500px] overflow-y-auto custom-scrollbar pr-4">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-surface/50 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group flex items-center gap-4"
                >
                   <div className={`p-3 rounded-lg ${skill.isReal ? 'bg-primary/10 text-primary' : 'bg-gray-800 text-gray-500'}`}>
                     <Cpu size={24} />
                   </div>
                   <div className="flex-1">
                      <div className="flex justify-between mb-1">
                         <h3 className="font-bold text-white">{skill.name}</h3>
                         <span className="text-xs text-secondary font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${skill.level}%` }}
                           transition={{ duration: 1 }}
                           className={`h-full ${skill.isReal ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gray-600'}`}
                         />
                      </div>
                      <p className="text-xs text-gray-400 mt-2 italic">"{skill.funnyDescription}"</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
