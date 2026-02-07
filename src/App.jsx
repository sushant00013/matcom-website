import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Domains from './components/Domains';
import DomainCard from './components/DomainCard';
import Work from './components/Work';
import Projects from './components/Projects';
import Team from './components/Team';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { domains } from './data';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(null);

  // --- LOADER LOGIC ---
  const handlePageChange = () => {
    setIsLoading(true);
    // 1.5 seconds baad loader hat jayega
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-darkBg min-h-screen text-white font-sans selection:bg-neonBlue selection:text-black">
      
      {/* 1. Navbar with Transition Trigger */}
      <Navbar onNavClick={handlePageChange} />

      {/* 2. Full Screen Transition Loader */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {/* 3. Main Content Wrapper */}
      <main className={isLoading ? "invisible" : "visible"}>
        <Hero />

        {/* --- DOMAIN UNIVERSE SECTION --- */}
        <section id="domains" className="py-24 relative min-h-screen flex flex-col items-center overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-center mb-20 z-10 uppercase tracking-tighter"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-purple-500">Universe</span>
          </motion.h2>

          {/* Floating Bubbles Container */}
          <div className="relative w-full max-w-[1400px] flex flex-wrap justify-center items-center gap-10 md:gap-20 px-10 z-10">
            {domains.map((domain) => (
              <DomainCard 
                key={domain.id} 
                domain={domain} 
                onClick={() => setSelectedDomain(domain)} 
              />
            ))}
          </div>
          
          {/* Background Tech Pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#00f3ff_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
        </section>

        {/* --- OTHER SECTIONS --- */}
        <Work />
        <Projects />
        <Team />
        <Footer />
      </main>

      {/* --- DOMAIN POP-UP MODAL --- */}
      <AnimatePresence>
        {selectedDomain && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDomain(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />

            <motion.div 
              initial={{ scale: 0.7, opacity: 0, rotateX: 45 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotateX: -45 }}
              className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,243,255,0.2)]"
            >
              <div className="h-64 relative">
                <img src={selectedDomain.bgImage} className="w-full h-full object-cover opacity-60" alt="bg" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                <button 
                  onClick={() => setSelectedDomain(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-neonBlue hover:text-black rounded-full flex items-center justify-center transition-all font-bold backdrop-blur-md"
                >
                  ✕
                </button>
              </div>

              <div className="p-10 -mt-16 relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-neonBlue/20 rounded-2xl text-neonBlue border border-neonBlue/30">
                    {selectedDomain.icon}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-white italic">{selectedDomain.title}</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  {selectedDomain.description}
                </p>
                <button className="w-full py-4 bg-neonBlue text-black font-black uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_40px_#00f3ff] transition-all transform active:scale-95">
                  Access Node
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;