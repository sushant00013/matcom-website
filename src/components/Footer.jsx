import React from 'react';
import { Github, Instagram, Linkedin, Mail, Cpu } from 'lucide-react';

const Footer = ({ onDevClick }) => {
  return (
    <footer className="py-12 text-center border-t border-white/10 bg-black relative z-10 overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-neonBlue/5 blur-[100px] pointer-events-none" />

      {/* --- DEV INFO TRIGGER BUTTON --- */}
      <div className="mb-10">
        <button 
          onClick={onDevClick}
          className="group relative inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:border-neonBlue transition-all duration-500 overflow-hidden"
        >
          {/* Pulsing indicator */}
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonBlue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neonBlue"></span>
          </div>

          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-white transition-colors">
            Access Dev_Vault
          </span>

          <Cpu size={14} className="text-gray-600 group-hover:text-neonBlue transition-colors group-hover:rotate-90 duration-500" />
          
          {/* Hover Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neonBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-10 mb-8">
        <a href="#" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-all hover:-translate-y-1 transform duration-300">
            <Github size={22} />
        </a>
        <a href="https://www.instagram.com/matcom_nith/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#e4405f] transition-all hover:-translate-y-1 transform duration-300">
            <Instagram size={22} />
        </a>
        <a href="https://www.linkedin.com/company/matcom-nith/posts/?feedView=all" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#0077b5] transition-all hover:-translate-y-1 transform duration-300">
            <Linkedin size={22} />
        </a>
        <a href="mailto:matcom@nith.ac.in" className="text-gray-500 hover:text-neonBlue transition-all hover:-translate-y-1 transform duration-300">
            <Mail size={22} />
        </a>
      </div>

      {/* Copyright Text */}
      <div className="relative z-10">
        <p className="text-gray-600 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
          © 2026 <span className="text-white font-black">MATCOM</span> | 
          <span className="text-gray-400"> NIT Hamirpur</span>
        </p>
        <p className="text-[8px] text-gray-700 mt-2 tracking-widest uppercase">
          Neural Architecture Deployment: Status_Alpha
        </p>
      </div>

    </footer>
  );
};

export default Footer;