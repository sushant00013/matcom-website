import React from 'react';
import { motion } from 'framer-motion';
import { workshops } from '../data';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Work = () => {
  return (
    <section id="work" className="relative bg-darkBg">
      
      {/* Header */}
      <div className="py-20 text-center sticky top-0 z-0 bg-darkBg/90 backdrop-blur-md border-b border-white/5">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-purple-500">
            Workshops
          </span>
        </h2>
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Hover cards to reveal details
        </p>
      </div>

      <div className="relative z-10 px-4 md:px-6 pb-24">
        {workshops.map((workshop, index) => (
          
          // --- STICKY CONTAINER (Height decreased for tighter scroll) ---
          <div 
            key={workshop.id} 
            className="sticky top-32 min-h-[60vh] flex items-center justify-center py-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              // 👇 UPDATED DIMENSIONS HERE:
              // Width: max-w-7xl (Wide) | Height: h-[50vh] or [55vh] (Short/Cinematic)
              className="relative w-full max-w-7xl h-[50vh] md:h-[55vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
            >
              
              {/* LAYER 1: FRONT IMAGE */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img 
                  src={workshop.image} 
                  alt={workshop.title} 
                  className="w-full h-full object-cover brightness-75 group-hover:blur-sm transition-all duration-500"
                />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-4xl font-bold text-white drop-shadow-lg translate-y-0 group-hover:-translate-y-10 opacity-100 group-hover:opacity-0 transition-all duration-500">
                    {workshop.title}
                  </h3>
                </div>
              </div>

              {/* LAYER 2: HOVER CONTENT (Wider Layout) */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col md:flex-row">
                
                {/* Image Section (Ab 40% width lega taaki content ko jagah mile) */}
                <div className="w-full md:w-[40%] h-full relative overflow-hidden border-r border-white/10 hidden md:block">
                  <img 
                    src={`${workshop.image}?grayscale`} 
                    alt="Detail"
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neonBlue/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm">
                       <ArrowRight size={32} className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                </div>

                {/* Info Section (60% width) */}
                <div className="w-full md:w-[60%] h-full p-8 md:p-12 flex flex-col justify-center translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-neonBlue font-mono text-xs uppercase tracking-widest mb-2 block">
                        Event Details
                      </span>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {workshop.title}
                      </h3>
                    </div>
                    {/* Date Badge Corner */}
                    <div className="hidden md:flex items-center gap-2 text-gray-400 border border-white/10 px-3 py-1 rounded-full text-xs">
                       <Calendar size={14} /> {workshop.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                    {workshop.description}
                  </p>

                  <div className="flex gap-6 mt-auto">
                    <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neonBlue transition-colors">
                      Register Now
                    </button>
                    <button className="px-8 py-3 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                      View Syllabus
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;