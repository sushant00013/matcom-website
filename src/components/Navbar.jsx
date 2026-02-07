import React, { useState, useEffect } from 'react';
import { navLinks } from '../data';
import { motion } from 'framer-motion';

const Navbar = ({ onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    onNavClick();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 700);
  };

  return (
    <nav className={`fixed top-0 w-full z-[150] transition-all duration-500 ${
      // 👇 INCREASED PADDING HERE:
      // 'py-4' when scrolled (was py-2)
      // 'py-6' when at top (was py-3)
      scrolled ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        
        {/* --- LEFT: MATCOM LOGO --- */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="cursor-pointer" 
          onClick={() => handleClick('home')}
        >
          <img 
            src="/logo.png" 
            alt="MATCOM Logo" 
            className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]"
          />
        </motion.div>

        {/* --- CENTER: NAVIGATION LINKS --- */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className="relative group text-xs font-mono font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-neonBlue transition-colors"
            >
              {link.title}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-neonBlue transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* --- RIGHT: CTA BUTTON & NIMBUS LOGO --- */}
        <div className="flex items-center gap-6">
          
          {/* Join Us Button */}
          <button className="hidden md:block px-6 py-2 border border-neonBlue text-neonBlue text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-neonBlue hover:text-black transition-all shadow-[0_0_10px_rgba(0,243,255,0.2)]">
            Join Us
          </button>

          {/* NIMBUS LOGO */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img 
              src="/nimbus.png" 
              alt="Nimbus Logo" 
              className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(188,19,254,0.5)]"
            />
          </motion.div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;