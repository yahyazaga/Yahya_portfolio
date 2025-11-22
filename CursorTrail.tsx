
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CursorTrail = () => {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setTrail((prev) => [
        ...prev.slice(-10), // Keep last 10 points
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden hidden md:block">
      {/* Flashlight Glow Effect */}
      <div 
        className="fixed rounded-full bg-primary opacity-10 blur-[80px] pointer-events-none transition-colors duration-300"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          width: '300px',
          height: '300px',
          transform: 'translate(-50%, -50%)',
          zIndex: -1
        }}
      />
      <div 
        className="fixed rounded-full bg-secondary opacity-20 blur-[40px] pointer-events-none transition-colors duration-300"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          width: '100px',
          height: '100px',
          transform: 'translate(-50%, -50%)',
          zIndex: -1
        }}
      />

      {/* Trail Particles */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute rounded-full bg-white blur-[1px]"
          style={{
            left: point.x,
            top: point.y,
            width: `${(index + 1) * 0.6}px`,
            height: `${(index + 1) * 0.6}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};
