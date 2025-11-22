
import React from 'react';
import { motion } from 'framer-motion';
import { YAHYA_DATA, YAHYA_IMAGES } from '../constants';
import { User, Clock, Star } from 'lucide-react';
import EnhancedImage from './EnhancedImage';

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 bg-surface/30 relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4"><span className="text-primary">About</span> Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Getting to know the person behind the code.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image Card */}
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative flex justify-center md:justify-end pr-0 md:pr-10"
          >
            {/* Animated Back Layers */}
            <motion.div 
              animate={{ rotate: [6, 10, 6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-secondary rounded-[2rem] rotate-6 opacity-20 blur-md w-full max-w-md mx-auto h-[500px]"
            ></motion.div>
            <motion.div 
              animate={{ rotate: [-6, -10, -6] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary rounded-[2rem] -rotate-6 opacity-20 blur-md w-full max-w-md mx-auto h-[500px]"
            ></motion.div>

            {/* Main Image Container using EnhancedImage */}
            <div className="w-full max-w-md h-[500px] relative z-10">
               <EnhancedImage 
                  src={YAHYA_IMAGES.about}
                  alt="Yahya Khan"
                  effect="static" // Static for bio, but with premium sheen
                  showSheen={true}
                  showParticles={true} // Add snow/dust particles
                  containerClassName="w-full h-full rounded-[2rem] shadow-2xl bg-surface-light border-4 border-white/10"
               />
               
               {/* Quote Overlay */}
               <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 z-20 pointer-events-none">
                 <p className="text-white/90 italic font-serif text-lg border-l-4 border-accent pl-4">
                   "Style is a way to say who you are without having to speak."
                 </p>
               </div>
            </div>
          </motion.div>

          {/* Info Content */}
          <div className="space-y-8">
            {/* Personal Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden border-l-4 border-secondary"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <User className="text-secondary" /> Who Am I?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                {YAHYA_DATA.bio.long}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {YAHYA_DATA.bio.values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all cursor-default">
                    <Star size={16} className="text-accent" fill="currentColor" />
                    <span className="text-sm font-medium text-white">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Journey Timeline */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="glass-panel p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="text-primary" /> My Journey
              </h3>

              <div className="relative border-l-2 border-white/10 ml-3 space-y-8 pb-2">
                <div className="relative pl-8 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-surface rounded-full border-2 border-primary group-hover:bg-primary transition-colors"></div>
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Joined BSCS Program</h4>
                  <span className="text-xs text-secondary font-mono">2023 - Present</span>
                  <p className="text-sm text-gray-400 mt-1">Started my journey into computer science.</p>
                </div>

                <div className="relative pl-8 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-surface rounded-full border-2 border-accent group-hover:bg-accent transition-colors"></div>
                  <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors">First C++ Program</h4>
                  <span className="text-xs text-secondary font-mono">2023</span>
                  <p className="text-sm text-gray-400 mt-1">Hello World... and never looked back.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
