
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Shield, Cpu } from 'lucide-react';

const features = [
  { title: "Holographic UI", desc: "Advanced glassmorphism with neon depth.", icon: Zap, color: "text-yellow-400" },
  { title: "Global Connectivity", desc: "Interactive map & realtime data.", icon: Globe, color: "text-blue-400" },
  { title: "Secure Core", desc: "Built with integrity & best practices.", icon: Shield, color: "text-green-400" },
  { title: "AI Powered", desc: "Smart widgets driven by logic.", icon: Cpu, color: "text-purple-400" },
];

const MegaFeatures = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">System Capabilities</span>
           <h2 className="text-4xl font-bold text-white">Next-Gen <span className="text-secondary">Features</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {features.map((f, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               whileHover={{ scale: 1.05 }}
               className="relative group p-8 rounded-2xl bg-surface/40 border border-white/5 overflow-hidden hover:bg-surface/60 transition-colors"
             >
                {/* Glow Effect */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-colors"></div>
                
                <f.icon size={40} className={`mb-6 ${f.color} drop-shadow-lg`} />
                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                
                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default MegaFeatures;
