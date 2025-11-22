
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { useSound } from './SoundManager';
import EnhancedImage from './EnhancedImage';

const Projects = () => {
  const [filter, setFilter] = useState<string>("All");
  const { playSound } = useSound();

  const categories = ["All", ...Array.from(new Set(PROJECTS.flatMap(p => p.tech[0])))];

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tech.includes(filter) || p.tech[0] === filter);

  const handlePlaceholderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    playSound('click');
    alert("This is a placeholder link. Yahya will replace this with real project links later.");
  };

  return (
    <section id="projects" className="py-20 bg-surface/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">My <span className="text-secondary">Projects</span></h2>
          <p className="text-gray-400">Things I've built (and broken).</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
           {categories.map(cat => (
             <button
               key={cat}
               onClick={() => { setFilter(cat); playSound('click'); }}
               className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                 filter === cat 
                   ? 'bg-primary text-white shadow-[0_0_15px_rgba(106,92,237,0.5)]' 
                   : 'bg-white/5 text-gray-400 hover:bg-white/10'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                key={project.id}
                whileHover={{ y: -10 }}
                className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  {!project.isReal && (
                     <div className="absolute top-2 right-2 z-30 bg-black/70 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded border border-white/10 pointer-events-none">Placeholder</div>
                  )}
                  
                  {/* Premium Image Component */}
                  <EnhancedImage 
                    src={project.image} 
                    alt={project.title} 
                    effect="static"
                    showSheen={true}
                    containerClassName="w-full h-full"
                  />
                </div>
                
                <div className="p-6 flex-1 flex flex-col relative z-20 bg-surface/90 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-2">
                     <h3 className="text-xl font-bold text-white">{project.title}</h3>
                     <Code2 size={18} className="text-primary" />
                  </div>
                  <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <button 
                      onClick={handlePlaceholderClick}
                      className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 text-sm text-gray-300 cursor-pointer group-active:scale-95"
                    >
                       <Github size={16}/> Code
                    </button>
                    <button 
                      onClick={handlePlaceholderClick}
                      className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-secondary hover:text-black transition-colors flex items-center justify-center gap-2 text-sm text-gray-300 cursor-pointer group-active:scale-95"
                    >
                       <ExternalLink size={16}/> Demo
                    </button>
                  </div>
                  
                  <div className="mt-2 text-xs text-center text-gray-600">
                      {project.isReal ? "" : "(Yahya will replace with real project)"}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
