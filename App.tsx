
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Setup from './components/Setup';
import QuoteWall from './components/QuoteWall';
import Gallery from './components/Gallery';
import FunZone from './components/FunZone';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Terminal from './components/Terminal';
import Dock from './components/Dock';
import VisualEngine from './components/VisualEngine';
import BackgroundEngine from './components/BackgroundEngine';
import SectionDivider from './components/SectionDivider';
import AIWidgets from './components/AIWidgets';
import MegaFeatures from './components/MegaFeatures';
import Timeline from './components/Timeline';
import Routine from './components/Routine';
import VisionGoals from './components/VisionGoals';
import ThemeLab from './components/ThemeLab';
import MusicPlayer from './components/MusicPlayer';
import SecretZone from './components/SecretZone';
import CosmicLoader from './components/CosmicLoader';
import CyberControlCenter from './components/CyberControlCenter';
import Superpowers from './components/Superpowers';
import { CursorTrail } from './components/CursorTrail';
import { COLOR_PALETTES } from './constants';
import { ToastProvider, useToast } from './components/ToastContext';
import { SoundProvider, useSound } from './components/SoundManager';
import { AchievementProvider, useAchievement } from './components/AchievementContext';
import { Clock } from 'lucide-react';

const AppContent = () => {
  const [currentTheme, setCurrentTheme] = useState('neon');
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Apply Colors dynamically
  useEffect(() => {
    const palette = COLOR_PALETTES.find(p => p.id === currentTheme) || COLOR_PALETTES[0];
    const root = document.documentElement;
    root.style.setProperty('--color-primary', palette.primary);
    root.style.setProperty('--color-secondary', palette.secondary);
    root.style.setProperty('--color-accent', palette.accent);
    
    if (currentTheme === 'pastel' || currentTheme === 'minimal') {
      root.style.backgroundColor = palette.bg;
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.style.backgroundColor = palette.bg;
      root.classList.add('dark');
      root.classList.remove('light');
    }
  }, [currentTheme]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500); // Longer load for cinematic effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <CosmicLoader key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="font-sans text-white min-h-screen selection:bg-primary selection:text-white overflow-x-hidden transition-colors duration-1000">
          
          {/* Layer 0: Background Engine */}
          <BackgroundEngine themeId={currentTheme} />
          
          {/* Layer 1: Visual Engine (Particles, Matrix) */}
          <VisualEngine themeId={currentTheme} />
          
          {/* Layer 2: Overlays */}
          <CursorTrail />
          <SecretZone />
          <CyberControlCenter />
          
          {/* Minimal Top Bar */}
          <div className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-40 pointer-events-none">
            <div className="text-2xl font-bold font-mono pointer-events-auto">
               <span className="text-primary">YK</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-gray-400 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
               <Clock size={12} />
               <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>

          {/* Layer 3: Content */}
          <main className="relative z-10 pb-32">
            <Hero />
            <SectionDivider />
            
            <MegaFeatures />
            <Superpowers /> 
            <Achievements />
            
            <SectionDivider />
            <About />
            <Timeline />
            <Routine />
            <VisionGoals />
            <SectionDivider />

            <AIWidgets />
            <QuoteWall />
            <Skills />
            <Setup />
            <SectionDivider />

            <Projects />
            <SectionDivider />

            <Certifications />
            <Gallery />
            <FunZone />
            <ThemeLab />
            <SectionDivider />

            <Contact />
          </main>

          {/* Layer 4: Controls */}
          <Dock currentTheme={currentTheme} setTheme={setCurrentTheme} />
          <Terminal />
          <Chatbot />
          <MusicPlayer />
          <Footer />
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <SoundProvider>
      <ToastProvider>
        <AchievementProvider>
          <AppContent />
        </AchievementProvider>
      </ToastProvider>
    </SoundProvider>
  );
}

export default App;
