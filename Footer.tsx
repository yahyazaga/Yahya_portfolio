import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDummyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("These social links will be updated by Yahya later.");
  };

  return (
    <footer className="bg-black py-8 border-t border-white/5 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white font-mono mb-4 md:mb-0">
          © 2025 <span className="text-primary">Yahya Khan</span>. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" onClick={handleDummyLink} className="hover:text-white transition-colors">GitHub</a>
          <a href="#" onClick={handleDummyLink} className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" onClick={handleDummyLink} className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-3 bg-white/5 hover:bg-primary text-white rounded-full transition-colors animate-bounce"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;