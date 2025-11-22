
import React, { useEffect, useRef, useState } from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const OrbitSkills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.2);
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center perspective-1000 overflow-hidden">
      {/* Center Glow */}
      <div className="absolute w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute text-2xl font-bold text-white z-10 font-mono tracking-widest">STACK</div>

      <div 
        ref={containerRef}
        className="relative w-64 h-64 md:w-80 md:h-80 transform-style-3d"
        style={{ transform: `rotateY(${rotation}deg) rotateX(10deg)` }}
      >
        {SKILLS.map((skill, i) => {
          const count = SKILLS.length;
          const phi = Math.acos(-1 + (2 * i) / count);
          const theta = Math.sqrt(count * Math.PI) * phi;
          
          const r = 140; // Radius
          const x = r * Math.cos(theta) * Math.sin(phi);
          const y = r * Math.sin(theta) * Math.sin(phi);
          const z = r * Math.cos(phi);

          return (
            <div
              key={skill.name}
              className="absolute top-1/2 left-1/2 transform-style-3d"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
              }}
            >
              <div 
                className="bg-surface/80 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-xs md:text-sm font-bold text-white shadow-lg whitespace-nowrap flex items-center gap-2 hover:bg-primary transition-colors cursor-default"
                style={{ 
                  transform: `rotateY(${-rotation}deg) rotateX(-10deg)`, // Counter-rotate to face front
                }}
              >
                 <span className={`w-2 h-2 rounded-full ${skill.isReal ? 'bg-green-400' : 'bg-gray-500'}`}></span>
                 {skill.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrbitSkills;
