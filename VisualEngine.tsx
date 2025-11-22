
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface VisualEngineProps {
  themeId: string;
}

const VisualEngine: React.FC<VisualEngineProps> = ({ themeId }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Matrix & Neural Network Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // --- MATRIX RAIN ---
    if (themeId === 'matrix') {
        const katakana = '01XYZ';
        const characters = katakana.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops: number[] = [];
        for (let x = 0; x < columns; x++) drops[x] = 1;

        const drawMatrix = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        };
        const interval = setInterval(drawMatrix, 33);
        return () => clearInterval(interval);
    }

    // --- NEURAL NETWORK ---
    // Only run detailed canvas lines if not matrix
    const particles: any[] = [];
    const particleCount = 40;
    const connectionDistance = 150;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1
        });
    }

    const drawNetwork = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach((p, i) => {
            // Mouse Repulsion
            const dx = p.x - mousePos.x;
            const dy = p.y - mousePos.y;
            const distance = Math.sqrt(dx*dx + dy*dy);
            if (distance < 150) {
                const angle = Math.atan2(dy, dx);
                p.x += Math.cos(angle) * 2;
                p.y += Math.sin(angle) * 2;
            }

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = themeId === 'minimal' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)';
            ctx.fill();

            // Draw Connections
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
                if (dist < connectionDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = themeId === 'minimal' 
                        ? `rgba(0,0,0,${0.1 - dist/connectionDistance})`
                        : `rgba(255,255,255,${0.1 - dist/connectionDistance})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(drawNetwork);
    };
    
    const animationId = requestAnimationFrame(drawNetwork);
    return () => cancelAnimationFrame(animationId);

  }, [themeId, mousePos]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

export default VisualEngine;
