
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from './ToastContext';
import { useSound } from './SoundManager';
import { ACHIEVEMENTS_LIST } from '../constants';

interface AchievementContextType {
  unlockAchievement: (id: string) => void;
  unlocked: string[];
}

const AchievementContext = createContext<AchievementContextType | undefined>(undefined);

export const AchievementProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [unlocked, setUnlocked] = useState<string[]>([]);
  const { addToast } = useToast();
  const { playSound } = useSound();

  const unlockAchievement = (id: string) => {
    if (unlocked.includes(id)) return;

    const achievement = ACHIEVEMENTS_LIST.find(a => a.id === id);
    if (achievement) {
      setUnlocked(prev => [...prev, id]);
      playSound('achieve');
      addToast(`🏆 Achievement Unlocked: ${achievement.title}`, 'success');
    }
  };

  // Scroll Master Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
      if (scrollPercentage > 0.95) {
        unlockAchievement('scroll_master');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [unlocked]);

  return (
    <AchievementContext.Provider value={{ unlockAchievement, unlocked }}>
      {children}
    </AchievementContext.Provider>
  );
};

export const useAchievement = () => {
  const context = useContext(AchievementContext);
  if (!context) throw new Error('useAchievement must be used within AchievementProvider');
  return context;
};
