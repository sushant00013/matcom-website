import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 👇 Ensure 'teamMembers' is exported from your data file, or this will crash!
import { domains, teamMembers } from '../data'; 

const Hero = () => {
  const canvasRef = useRef(null);
  
  // --- STATE FOR CARD TRAIL ---
  const [trail, setTrail] = useState([]);
  const lastPosition = useRef({ x: 0, y: 0 });
  const lastTime = useRef(0);

  // 👇 ADDED THIS MISSING FUNCTION TO FIX BUTTONS
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with ID "${id}" not found. Check your App.jsx IDs.`);
    }
  };

  // --- 1. NEURAL NETWORK ANIMATION (Background) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height;
    let particles = [];
    
    // Config
    const particleCount = 80;
    const connectionDistance = 150;
    const mouseDistance = 200;
    let mouse = { x: null, y: null };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => init());

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.fillStyle = "rgba(0, 243, 255, 0.7)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Connect Particles
        for (let j = index; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(0, 243, 255, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Connect to Mouse
        if (mouse.x != null) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseDistance) {
            ctx.beginPath();
            const opacity = 1 - distance / mouseDistance;
            ctx.strokeStyle = `rgba(188, 19, 254, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // --- 2. CARD TRAIL LOGIC (Foreground Interaction) ---
  useEffect(() => {
    const handleTrailMove = (e) => {
      const now = Date.now();
      const dist = Math.sqrt(
        Math.pow(e.clientX - lastPosition.current.x, 2) + 
        Math.pow(e.clientY - lastPosition.current.y, 2)
      );

      // Throttling: 100ms delay & 50px movement required
      if (now - lastTime.current > 100 && dist > 50) {
        lastTime.current = now;
        lastPosition.current = { x: e.clientX, y: e.clientY };

        // Safety check for data
        if (!domains || !teamMembers) return;

        const isDomain = Math.random() > 0.5;
        const dataSource = isDomain ? domains : teamMembers;
        
        if (dataSource.length === 0) return;

        const randomItem = dataSource[Math.floor(Math.random() * dataSource.length)];

        if (!randomItem) return;

        const newItem = {
          id: now,
          x: e.clientX,
          y: e.clientY,
          content: randomItem,
          type: isDomain ? 'domain' : 'team',
          rotation: Math.random() * 40 - 20,
        };

        setTrail((prev) => [...prev, newItem]);

        // Auto remove after 0.8s
        setTimeout(() => {
          setTrail((prev) => prev.filter(i => i.id !== newItem.id));
        }, 800);
      }
    };

    window.addEventListener('mousemove', handleTrailMove);
    return () => window.removeEventListener('mousemove', handleTrailMove);
  }, []);

  // Text Animation
  const textVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const letterVariant = {
    hidden: { opacity: 0, y: 50, rotateX: 90 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
  };
  const text = "TEAM MATCOM".split("");

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-white">
      
      {/* --- LAYER 0: NETWORK CANVAS --- */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* --- LAYER 1: CARD TRAIL --- */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {trail.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.5, x: item.x - 80, y: item.y - 40 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, y: item.y - 100 }}
              transition={{ duration: 0.5 }}
              style={{ rotate: item.rotation }}
              className={`absolute w-40 p-2 rounded-lg border backdrop-blur-md shadow-2xl flex items-center gap-3
                ${item.type === 'domain' 
                  ? 'border-neonBlue/40 bg-black/70' 
                  : 'border-purple-500/40 bg-gray-900/70'
                }`}
            >
              {item.type === 'team' && (
                <img 
                  src={item.content.image} 
                  alt="img" 
                  className="w-8 h-8 rounded-full border border-white/30"
                />
              )}
              {item.type === 'domain' && (
                <div className="text-neonBlue scale-75">{item.content.icon}</div>
              )}
              
              <div className="overflow-hidden">
                <h4 className="text-[10px] font-bold text-white truncate">
                  {item.type === 'domain' ? item.content.title : item.content.name}
                </h4>
                <p className="text-[9px] text-gray-400 truncate">
                   {item.type === 'domain' ? 'Domain' : item.content.role}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Background Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-0 pointer-events-none"></div>

      {/* --- LAYER 2: MAIN CONTENT --- */}
      <div className="z-10 text-center px-4 relative pointer-events-none">
        
        {/* TEAM MATCOM */}
        <motion.h1
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-2 text-white drop-shadow-[0_0_20px_rgba(0,243,255,0.8)] flex flex-wrap justify-center gap-x-2 md:gap-x-4"
        >
          {text.map((char, index) => (
            <motion.span key={index} variants={letterVariant} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* NIT HAMIRPUR */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-neonBlue text-3xl md:text-5xl font-bold tracking-wider mb-8 uppercase drop-shadow-[0_0_15px_rgba(188,19,254,0.8)]"
        >
          NIT Hamirpur
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="md:text-4xl max-w-4xl mx-auto font-medium tracking-wide px-3 pointer-events-auto"
        >
          <span className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-purple-200 drop-shadow-lg">
            A technical initiative associated with The Department of Mathematics and Scientific Computing
          </span>
        </motion.p>

        {/* BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-col md:flex-row gap-8 justify-center pointer-events-auto"
        >
          <button onClick={() => scrollToSection('domains')} className="px-10 py-4 bg-neonBlue text-black font-bold text-lg rounded-full hover:bg-white hover:shadow-[0_0_40px_#00f3ff] transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer">
            Explore Domains
          </button>
          <button onClick={() => scrollToSection('team')} className="px-10 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm transform hover:scale-110 active:scale-95 cursor-pointer">
            Meet The Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;