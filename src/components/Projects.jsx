import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { Github, ExternalLink, Code, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative bg-darkBg">
      
      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-purple-500">Works</span>
        </h2>
        <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
          Hover to reveal intelligence
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            // 👇 UPDATED CLASSNAME HERE: Added neon hover effects
            className="group relative w-full max-w-5xl h-[60vh] md:h-[70vh] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl cursor-pointer transition-all duration-500 group-hover:border-neonBlue group-hover:shadow-[0_0_40px_rgba(0,243,255,0.4)]"
          >
            {/* --- LAYER 1: BACKGROUND IMAGE (Always Visible) --- */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[4px]"
              />
              {/* Default Dark Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/80 transition-colors duration-500" />
            </div>

            {/* --- OPTIONAL: Title always visible in corner --- */}
            <div className="absolute bottom-10 left-10 z-20 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-10">
              <h3 className="text-4xl font-black text-white drop-shadow-lg">{project.title}</h3>
            </div>


            {/* --- LAYER 2: HIDDEN CONTENT (Reveals on Hover) --- */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-30 translate-y-10 group-hover:translate-y-0">
              
              {/* Icon */}
              <div className="mb-6 p-4 rounded-full bg-neonBlue/20 text-neonBlue border border-neonBlue/50 shadow-[0_0_30px_rgba(0,243,255,0.3)]">
                <Code size={40} />
              </div>

              {/* Title & Desc */}
              <h3 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
                {project.title}
              </h3>
              <p className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-4 py-2 text-sm font-bold text-black bg-neonBlue rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6">
                <a 
                  href={project.link} 
                  className="flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105"
                >
                  <Github size={20} /> Source Code
                </a>
                <a 
                  href={project.link} 
                  className="flex items-center gap-2 px-8 py-3 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all transform hover:scale-105"
                >
                  <ExternalLink size={20} /> Live Demo
                </a>
              </div>

            </div>

            {/* Corner Decorative Icon */}
            <div className="absolute top-10 right-10 text-white/50 group-hover:text-neonBlue group-hover:rotate-45 transition-all duration-500">
               <ArrowUpRight size={60} />
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;