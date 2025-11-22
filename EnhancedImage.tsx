
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface EnhancedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  effect?: 'tilt' | 'static' | 'parallax';
  showSheen?: boolean;
  showParticles?: boolean;
  onClick?: () => void;
}

const EnhancedImage: React.FC<EnhancedImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  effect = 'static',
  showSheen = true,
  showParticles = false,
  onClick
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (effect !== 'tilt') return;
    
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseXFromCenter = e.clientX - rect.left - width / 2;
      const mouseYFromCenter = e.clientY - rect.top - height / 2;
      
      x.set(mouseXFromCenter / width);
      y.set(mouseYFromCenter / height);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden group ${containerClassName}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: 1000,
        rotateX: effect === 'tilt' ? rotateX : 0,
        rotateY: effect === 'tilt' ? rotateY : 0,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Glassmorphism Border/Frame */}
      <div className="absolute inset-0 rounded-[inherit] border border-white/10 z-20 pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] group-hover:border-primary/30 transition-colors duration-500"></div>

      {/* Image Loading State */}
      <div className={`absolute inset-0 bg-surface-light animate-pulse z-10 transition-opacity duration-700 ${isLoading ? 'opacity-100' : 'opacity-0'}`} />

      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ${className} ${isLoading ? 'scale-110 blur-xl' : 'scale-100 blur-0'} group-hover:scale-105`}
        onLoad={() => setIsLoading(false)}
        referrerPolicy="no-referrer"
      />

      {/* Sheen Effect (Light Reflection) */}
      {showSheen && (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-[inherit]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] skew-x-12 group-hover:animate-sheen" />
        </div>
      )}

      {/* Particle Overlay */}
      {showParticles && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary/40 rounded-full blur-[1px]"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      )}

      {/* Vignette / Shadow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

      <style>{`
        @keyframes sheen {
          0% { transform: translateX(-150%) skewX(-12deg); }
          100% { transform: translateX(150%) skewX(-12deg); }
        }
        .animate-sheen {
          animation: sheen 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </motion.div>
  );
};

export default EnhancedImage;
