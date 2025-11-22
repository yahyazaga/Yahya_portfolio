
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { YAHYA_DATA } from '../constants';
import { ArrowDown } from 'lucide-react';
import Cube3D from './Cube3D';
import Magnetic from './Magnetic';
import { useSound } from './SoundManager';
import HologramProfile from './HologramProfile';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { playSound } = useSound();

  // Typing Effect
  useEffect(() => {
    const currentText = YAHYA_DATA.title[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % YAHYA_DATA.title.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    playSound('click');
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12">
      
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center h-full z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-xl"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              <span className="text-gray-300 text-xs font-mono tracking-wide uppercase">System Online</span>
            </div>

            {/* Name */}
            <h2 className="text-xl md:text-2xl font-medium text-secondary mb-2 tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              {YAHYA_DATA.name.split(' ')[0]}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                {YAHYA_DATA.name.split(' ')[1]}
              </span>
            </h1>

            {/* Dynamic Title */}
            <div className="h-12 mb-8 flex items-center justify-center lg:justify-start">
              <span className="text-2xl md:text-3xl font-mono text-primary font-bold">
                {YAHYA_DATA.title[textIndex].substring(0, charIndex)}
              </span>
              <span className="w-1 h-8 bg-accent ml-2 animate-pulse"></span>
            </div>
            
            {/* Bio */}
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              {YAHYA_DATA.bio.short}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              <Magnetic>
                <a 
                  href="#projects" 
                  onClick={scrollTo('#projects')} 
                  onMouseEnter={() => playSound('hover')} 
                  className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-[0_0_25px_rgba(106,92,237,0.4)] hover:shadow-[0_0_35px_rgba(106,92,237,0.6)] hover:-translate-y-1"
                >
                  View Projects
                </a>
              </Magnetic>
              <Magnetic>
                <a 
                  href="#contact" 
                  onClick={scrollTo('#contact')} 
                  onMouseEnter={() => playSound('hover')} 
                  className="px-8 py-4 border border-white/10 bg-white/5 text-white rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm hover:-translate-y-1"
                >
                  Contact Me
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Hologram & 3D */}
        <div className="flex justify-center items-center order-1 lg:order-2 relative w-full">
           <div className="absolute -top-20 -right-10 opacity-30 pointer-events-none scale-75 z-0 hidden lg:block">
              <Cube3D />
           </div>
           <HologramProfile />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        onClick={scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 text-white/30 hover:text-white transition-colors cursor-pointer z-20"
      >
        <ArrowDown size={28} />
      </motion.a>
    </section>
  );
};

export default Hero;
