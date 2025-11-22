
import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Cpu, Briefcase, Gamepad2, Mail, Palette, Volume2, VolumeX, Moon, Sun } from 'lucide-react';
import { useSound } from './SoundManager';
import { useToast } from './ToastContext';
import { COLOR_PALETTES } from '../constants';
import { useAchievement } from './AchievementContext';

interface DockProps {
  currentTheme: string;
  setTheme: (id: string) => void;
}

const Dock: React.FC<DockProps> = ({ currentTheme, setTheme }) => {
  const { playSound, isMuted, toggleMute } = useSound();
  const { addToast } = useToast();
  const { unlockAchievement } = useAchievement();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    playSound('click');
  };

  const toggleTheme = () => {
    const currentIndex = COLOR_PALETTES.findIndex(p => p.id === currentTheme);
    const nextIndex = (currentIndex + 1) % COLOR_PALETTES.length;
    const nextTheme = COLOR_PALETTES[nextIndex];
    setTheme(nextTheme.id);
    addToast(`Theme: ${nextTheme.name}`, 'success');
    unlockAchievement('theme_switcher');
  };

  const items = [
    { icon: Home, id: '#hero', label: 'Home' },
    { icon: User, id: '#about', label: 'About' },
    { icon: Cpu, id: '#skills', label: 'Skills' },
    { icon: Briefcase, id: '#projects', label: 'Work' },
    { icon: Gamepad2, id: '#fun', label: 'Play' },
    { icon: Mail, id: '#contact', label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4">
      {/* Main Dock */}
      <motion.div 
        className="flex items-center gap-2 px-4 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
      >
        {items.map((item) => (
          <DockItem key={item.label} icon={item.icon} onClick={() => scrollTo(item.id)} label={item.label} />
        ))}
        
        <div className="w-[1px] h-8 bg-white/10 mx-2" />

        {/* Controls */}
        <DockItem 
          icon={Palette} 
          onClick={toggleTheme} 
          label="Theme" 
        />
        <DockItem 
          icon={isMuted ? VolumeX : Volume2} 
          onClick={() => { toggleMute(); playSound('click'); }} 
          label="Sound" 
        />
      </motion.div>
    </div>
  );
};

const DockItem = ({ icon: Icon, onClick, label }: { icon: any, onClick: () => void, label: string }) => {
  const { playSound } = useSound();
  
  return (
    <motion.button
      whileHover={{ scale: 1.2, y: -5 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => { onClick(); playSound('hover'); }}
      className="relative group p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/20 transition-all"
    >
      <Icon size={20} className="text-gray-300 group-hover:text-white transition-colors" />
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {label}
      </span>
      {/* Reflection glow */}
      <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
    </motion.button>
  );
};

export default Dock;
