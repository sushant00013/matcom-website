import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const TeamCard = ({ member }) => {
  return (
    <div className="flex flex-col items-center group">
      {/* --- CARD FRAME --- */}
      <motion.div 
        // 👇 CHANGED: Reduced size from w-64 h-64 to w-52 h-52
        className="relative w-52 h-52 bg-[#111] rounded-2xl overflow-hidden border border-white/5 shadow-lg group-hover:shadow-[0_0_30px_rgba(188,19,254,0.2)] transition-all duration-500"
        whileHover={{ y: -5 }}
      >
        {/* L-Shape Corner Borders */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gray-600 rounded-tl-md group-hover:border-neonBlue transition-colors duration-300 z-20"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gray-600 rounded-tr-md group-hover:border-neonBlue transition-colors duration-300 z-20"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gray-600 rounded-bl-md group-hover:border-neonBlue transition-colors duration-300 z-20"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gray-600 rounded-br-md group-hover:border-neonBlue transition-colors duration-300 z-20"></div>

        {/* --- IMAGE --- */}
        <div className="w-full h-full relative">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-110 group-hover:blur-[2px]"
          />
          
          {/* --- HOVER OVERLAY (Socials) --- */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[0px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-30">
            {member.links?.linkedin && member.links.linkedin !== "#" && (
              <a href={member.links.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#0077b5] text-white transition-all hover:scale-110">
                <Linkedin size={18} />
              </a>
            )}
            {member.links?.instagram && member.links.instagram !== "#" && (
              <a href={member.links.instagram} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-gradient-to-tr hover:from-[#f09433] hover:to-[#bc1888] text-white transition-all hover:scale-110">
                <Instagram size={18} />
              </a>
            )}
             {member.links?.github && (
              <a href={member.links.github} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-black text-white transition-all hover:scale-110">
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* --- NAME --- */}
      <div className="mt-4 text-center">
        <h3 className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-purple-400 tracking-wide group-hover:text-neonBlue transition-colors">
          {member.name}
        </h3>
      </div>
    </div>
  );
};

export default TeamCard;