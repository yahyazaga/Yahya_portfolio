
import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS_DATA } from '../constants';
import { Award, ExternalLink } from 'lucide-react';
import EnhancedImage from './EnhancedImage';

const Certifications = () => {
  return (
    <section className="py-20 bg-surface/20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-10">
           <Award className="text-accent" size={32} />
           <h2 className="text-3xl font-bold text-white">Certifications & <span className="text-primary">Awards</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-surface rounded-xl overflow-hidden border border-white/5 shadow-lg group perspective-1000"
            >
              <div className="h-40 w-full relative overflow-hidden">
                 <EnhancedImage 
                    src={cert.image} 
                    alt={cert.title}
                    effect="static"
                    showSheen={true}
                    containerClassName="w-full h-full"
                 />
                 
                 <div className="absolute bottom-3 left-3 z-20">
                    <span className="px-2 py-1 bg-primary/80 text-white text-xs rounded shadow-md">{cert.date}</span>
                 </div>
              </div>
              
              <div className="p-6 relative z-20 bg-surface">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-secondary transition-colors">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                  View Credential <ExternalLink size={12}/>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
