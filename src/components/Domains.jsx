import React from 'react';
import { domains } from '../data'; // Ensure you have this data
import DomainCard from './DomainCard'; // Importing your existing card
import { motion } from 'framer-motion';

const Domains = () => {
  return (
    // 👇 THIS ID="domains" IS WHAT THE HERO BUTTON LOOKS FOR
    <section id="domains" className="py-20 bg-darkBg relative overflow-hidden">
      
      {/* Optional: Background Grid/Glow for this section */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neonBlue/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-purple-500">Domains</span>
          </h2>
          <div className="w-24 h-1 bg-neonBlue mx-auto rounded-full shadow-[0_0_20px_rgba(0,243,255,0.5)]"></div>
        </motion.div>

        {/* Grid of Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            // Passing data to your existing DomainCard component
            <DomainCard key={index} {...domain} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Domains;