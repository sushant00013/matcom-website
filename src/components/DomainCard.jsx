import React from "react";
import { motion } from "framer-motion";

const DomainCard = ({ domain, onClick }) => {
  if (!domain) return null;

  // --- ORBIT CONFIGURATION ---
  // Radius: Kitne bade circle mein ghumega (30px to 50px)
  const radius = 30 + Math.random() * 20;
  
  // Speed: Ek chakkar kitne der mein katega (3s to 5s for 'faster' feel)
  const duration = 3 + Math.random() * 2;
  
  // Delay: Taaki saare bubbles ek saath na ghoomein (Organic look)
  const delay = Math.random() * -5; 

  return (
    <motion.div
      onClick={onClick}
      // Circular Orbit Logic: Sine/Cosine path mimic karne ke liye sequence
      animate={{ 
        x: [0, radius, 0, -radius, 0],
        y: [-radius, 0, radius, 0, -radius] 
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear", // Linear se smooth circular motion milta hai
        delay: delay,
      }}
      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      className="relative w-44 h-44 md:w-56 md:h-56 cursor-pointer group shrink-0"
    >
      {/* Outer Glow Ring (Pulse) */}
      <div className="absolute -inset-2 rounded-full border border-neonBlue/20 animate-pulse group-hover:border-neonBlue/50 transition-colors" />

      {/* Main Circular Bubble */}
      <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-neonBlue transition-all duration-500 shadow-2xl">
        
        {/* Background Image */}
        <img 
          src={domain.bgImage} 
          alt={domain.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
        />
        
        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all" />

        {/* Inner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
          <div className="text-neonBlue mb-2 group-hover:scale-110 transition-transform duration-300">
            {domain.icon}
          </div>
          <h3 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest text-center px-2">
            {domain.title}
          </h3>
        </div>
      </div>

      {/* Tiny Satellite Particle */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -top-1 left-1/2 w-2 h-2 bg-purple-500 rounded-full blur-[2px]"></div>
      </motion.div>
    </motion.div>
  );
};

export default DomainCard;