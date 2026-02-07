import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center"
    >
      {/* --- TECHY BACKGROUND --- */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00f3ff_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      {/* --- CENTRAL LOADER --- */}
      <div className="relative">
        {/* Spinning Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-t-2 border-b-2 border-neonBlue rounded-full shadow-[0_0_15px_#00f3ff]"
        />
        {/* Inner Pulsing Core */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 m-auto w-12 h-12 bg-purple-600 rounded-full blur-md"
        />
      </div>

      {/* --- STATUS TEXT --- */}
      <div className="mt-10 text-center">
        <motion.p
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-neonBlue font-mono tracking-[0.3em] text-sm uppercase"
        >
          Initializing MatCom OS...
        </motion.p>
        <div className="mt-4 h-1 w-48 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-neonBlue to-purple-600"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;