import React from 'react';
import { motion } from 'framer-motion';
import teamData from '../data/teamData'; 
import TeamCard from './TeamCard';

const Team = () => {
  return (
    // ✅ CRITICAL: This id="team" allows the button to find this section
    <section id="team" className="py-24 px-4 md:px-10 relative bg-darkBg min-h-screen">
      
      {/* Background Watermark */}
      {/* 👇 FIXED TYPO: changed '-translaate' to '-translate' */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[10vw] font-black text-white/[0.03] uppercase pointer-events-none select-none tracking-widest whitespace-nowrap">
        The Alliance
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Main Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            Meet The <span className="text-neonBlue">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
        </div>

        {/* --- CATEGORY LOOP --- */}
        {teamData.map((category, index) => (
          <div key={index} className="mb-24 last:mb-0">
            
            {/* Category Title */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-14 pl-4 border-l-4 border-neonPurple"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest">
                {category.title}
              </h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-neonPurple/50 to-transparent"></div>
            </motion.div>

            {/* Grid for this Category */}
            <div className="flex flex-wrap justify-center gap-16 px-4 md:px-12">
              {category.members.map((member, memberIndex) => (
                <TeamCard key={memberIndex} member={member} />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Team;