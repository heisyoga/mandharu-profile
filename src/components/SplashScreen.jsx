import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ logo, onComplete }) => {
  useEffect(() => {
    // Total sequence duration before triggering exit
    // Logo entrance (1s) + BG transition (1.5s) + small pause (0.5s)
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ backgroundColor: "#bb0013" }}
      animate={{ 
        backgroundColor: ["#bb0013", "#bb0013", "#ffffff"],
        transition: { 
          duration: 2.5, 
          times: [0, 0.4, 1], // Stays red until 1s (0.4 * 2.5), then white at 2.5s
          ease: "easeInOut"
        }
      }}
      exit={{ 
        opacity: 0, 
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ 
          scale: [0.9, 1, 1],
          opacity: [0, 1, 1],
          transition: { 
            duration: 1.5, // Total time for logo to appear and be still
            times: [0, 0.6, 1], // Finished entering at 0.9s, then still
            ease: "easeOut"
          }
        }}
        className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
      >
        <img 
          src={logo} 
          alt="Mandha Ru Logo" 
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
