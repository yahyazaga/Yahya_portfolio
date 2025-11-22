import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { YAHYA_DATA } from '../constants';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-surface/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In <span className="text-primary">Touch</span></h2>
          <p className="text-gray-400">Have a project or just want to say salam?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 text-primary rounded-lg">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Email</h3>
                <p className="text-gray-400">{YAHYA_DATA.contact.email}</p>
                <span className="text-xs text-gray-600 block mt-1">(Placeholder email)</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/20 text-secondary rounded-lg">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Phone</h3>
                <p className="text-gray-400">{YAHYA_DATA.contact.phone}</p>
                <span className="text-xs text-gray-600 block mt-1">(Placeholder phone)</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/20 text-accent rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Location</h3>
                <p className="text-gray-400">{YAHYA_DATA.contact.address}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="glass-panel p-8 rounded-2xl space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input 
                type="text" 
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="How can I help you?"
              />
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <Send size={18}/> Send Message
            </button>
            <p className="text-xs text-center text-gray-500 mt-2">
              Note: This form is currently a placeholder.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;