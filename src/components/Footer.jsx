import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 text-center border-t border-white/10 bg-black relative z-10">
      
      {/* Social Links */}
      <div className="flex justify-center gap-8 mb-6">
        <a href="#" className="text-gray-400 hover:text-neonBlue transition-colors hover:scale-110 transform duration-200">
            <Github size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-neonPurple transition-colors hover:scale-110 transform duration-200">
            <Instagram size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-neonBlue transition-colors hover:scale-110 transform duration-200">
            <Linkedin size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-neonPurple transition-colors hover:scale-110 transform duration-200">
            <Mail size={24} />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-gray-600 text-sm">
        © 2026 <span className="text-neonBlue font-bold">MATCOM</span> | NIT Hamirpur. 
        <br className="md:hidden" /> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;