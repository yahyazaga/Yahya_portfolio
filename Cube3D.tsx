
import React from 'react';
import { motion } from 'framer-motion';

const Cube3D = () => {
  return (
    <div className="w-32 h-32 relative perspective-1000">
      <style>{`
        .cube-container {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: spinCube 10s infinite linear;
        }
        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          color: white;
          border: 2px solid rgba(255,255,255,0.1);
          background: rgba(106, 92, 237, 0.15);
          backdrop-filter: blur(5px);
          box-shadow: 0 0 20px rgba(106, 92, 237, 0.5);
        }
        .front  { transform: rotateY(0deg) translateZ(64px); }
        .back   { transform: rotateY(180deg) translateZ(64px); }
        .right  { transform: rotateY(90deg) translateZ(64px); }
        .left   { transform: rotateY(-90deg) translateZ(64px); }
        .top    { transform: rotateX(90deg) translateZ(64px); }
        .bottom { transform: rotateX(-90deg) translateZ(64px); }

        @keyframes spinCube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
      
      <div className="cube-container">
        <div className="cube-face front text-primary">YK</div>
        <div className="cube-face back text-secondary">DEV</div>
        <div className="cube-face right text-accent">C++</div>
        <div className="cube-face left text-white">OOP</div>
        <div className="cube-face top text-primary">BSCS</div>
        <div className="cube-face bottom text-secondary">PK</div>
      </div>
    </div>
  );
};

export default Cube3D;
