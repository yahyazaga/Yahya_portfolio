
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Settings, Palette, Volume2, VolumeX, Clock as ClockIcon } from 'lucide-react';
import { YAHYA_DATA, COLOR_PALETTES } from '../constants';
import { useSound } from './SoundManager';
import { useToast } from './ToastContext';

interface NavbarProps {
  setPalette: (index: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setPalette }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [time, setTime] = useState(new Date());
  
  const { isMuted, toggleMute, playSound } = useSound();
  const { addToast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSoundToggle = () => {
    toggleMute();
    addToast(isMuted ? "Sound Enabled" : "Sound Muted", isMuted ? "success" : "info");
  };

  const handleThemeChange = (index: number) => {
    setPalette(index);
    playSound('click');
    addToast(`Theme switched to ${COLOR_PALETTES[index].name}`, "success");
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Fun', href: '#fun' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    playSound('click');
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass-panel bg-opacity-80 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo & Status */}
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold font-mono cursor-pointer relative group" onClick={() => playSound('success')}>
              <span className="text-primary">&lt;</span>
              <span className="text-white group-hover:text-secondary transition-colors">YK</span>
              <span className="text-primary">/&gt;</span>
            </div>
            
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-black/20 rounded-full border border-white/5 text-xs font-mono text-gray-400">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span>ONLINE</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
             {/* Clock Widget */}
             <div className="flex items-center gap-2 text-gray-400 text-xs font-mono border-r border-white/10 pr-6 mr-2">
                <ClockIcon size={12} />
                <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
             </div>

            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onMouseEnter={() => playSound('hover')}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors hover:scale-105 transform relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            <button 
              onClick={handleSoundToggle}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            <button 
              onClick={() => { setShowSettings(!showSettings); playSound('click'); }}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Settings size={20} className={`text-secondary ${showSettings ? 'rotate-90' : ''} transition-transform duration-500`} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden glass-panel mt-2 rounded-xl"
            >
              <div className="flex flex-col p-4 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white text-lg font-medium block py-2 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex justify-between items-center pt-2">
                   <button onClick={handleSoundToggle} className="flex items-center gap-2 text-gray-400">
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />} Sound
                   </button>
                   <button onClick={() => setShowSettings(true)} className="flex items-center gap-2 text-secondary">
                      <Settings size={18} /> Settings
                   </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            className="fixed top-20 right-0 md:right-6 w-72 bg-surface border border-white/10 rounded-2xl shadow-2xl z-50 p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-white flex items-center gap-2"><Palette size={16}/> Interface Theme</h3>
              <button onClick={() => setShowSettings(false)}><X size={16} className="text-gray-400 hover:text-white"/></button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {COLOR_PALETTES.map((palette, idx) => (
                <button
                  key={palette.name}
                  onClick={() => handleThemeChange(idx)}
                  className="h-12 rounded-lg flex items-center justify-center text-xs font-bold text-white border border-white/10 hover:scale-105 transition-transform relative overflow-hidden group"
                >
                  <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity" 
                       style={{ background: `linear-gradient(45deg, ${palette.primary}, ${palette.secondary})` }} />
                  <span className="relative z-10 shadow-black drop-shadow-md">{palette.name}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-500 text-center">
               Press '1-5' to navigate | Type 'YK' for secrets
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
