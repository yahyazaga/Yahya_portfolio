
import React from 'react';

const SectionDivider = () => {
  return (
    <div className="relative h-24 overflow-hidden -mt-1">
      <svg className="absolute bottom-0 w-full h-full text-surface/30" preserveAspectRatio="none" viewBox="0 0 1440 54">
        <path fill="currentColor" d="M0 22L120 16.7C240 11 480 1 720 13.3C960 25 1200 59 1320 76L1440 93V0H1320C1200 0 960 0 720 0C480 0 240 0 120 0H0V22Z"></path>
      </svg>
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </div>
  );
};

export default SectionDivider;
