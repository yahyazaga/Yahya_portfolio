
import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { SOUNDS } from '../constants';

interface SoundContextType {
  playSound: (type: keyof typeof SOUNDS) => void;
  isMuted: boolean;
  toggleMute: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRefs = useRef<{[key: string]: HTMLAudioElement}>({});

  const playSound = useCallback((type: keyof typeof SOUNDS) => {
    if (isMuted) return;
    
    // Create audio object if it doesn't exist for this type
    if (!audioRefs.current[type]) {
      audioRefs.current[type] = new Audio(SOUNDS[type]);
      audioRefs.current[type].volume = 0.2;
    }

    // Clone to allow overlapping sounds of same type
    const sound = audioRefs.current[type].cloneNode() as HTMLAudioElement;
    sound.volume = 0.15;
    sound.play().catch(() => {}); // Ignore autoplay errors
  }, [isMuted]);

  const toggleMute = () => setIsMuted(prev => !prev);

  return (
    <SoundContext.Provider value={{ playSound, isMuted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) throw new Error('useSound must be used within a SoundProvider');
  return context;
};
