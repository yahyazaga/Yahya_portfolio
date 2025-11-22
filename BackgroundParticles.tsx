
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundParticles = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, duration: number}>>([]);
  const [stars, setStars] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(newParticles);

    // Generate shooting stars
    const newStars = Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 50,
      delay: Math.random() * 10,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={`p-${p.id}`}
          className="absolute rounded-full bg-primary/20 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Shooting Stars */}
      {stars.map((s) => (
        <motion.div
          key={`s-${s.id}`}
          className="absolute h-[2px] w-[100px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            rotate: -45,
          }}
          animate={{
            x: [-100, 200],
            y: [-100, 200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: s.delay,
            repeatDelay: Math.random() * 10 + 5,
          }}
        />
      ))}
      
      {/* Static Grain/Noise Overlay (Optional for texture) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    </div>
  );
};

export default BackgroundParticles;
