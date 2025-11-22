import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const PixelPet = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { damping: 15, stiffness: 150 };
  
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    x.set(mousePosition.x - 20);
    y.set(mousePosition.y - 20);
  }, [mousePosition, x, y]);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-50 text-3xl select-none hidden md:block"
      animate={{
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      👾
    </motion.div>
  );
};