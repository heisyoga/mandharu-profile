import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ logo, onComplete }) => {
  const [isTimerDone, setIsTimerDone] = useState(false);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  useEffect(() => {
    // 1. Minimum display time (3 seconds)
    const timer = setTimeout(() => {
      setIsTimerDone(true);
    }, 3000);

    // 2. Hero Image Preload logic
    // We preload the hero image here to ensure it's in the browser cache 
    // before the splash screen fades out.
    const img = new Image();
    img.src = '/images/hero.jpg';
    
    if (img.complete) {
      setIsHeroLoaded(true);
    } else {
      img.onload = () => setIsHeroLoaded(true);
      img.onerror = () => {
        console.error("Failed to load hero image, proceeding with splash screen exit.");
        setIsHeroLoaded(true); // Proceed anyway so we don't get stuck
      };
    }

    return () => clearTimeout(timer);
  }, []);

  // Coordinate exit
  useEffect(() => {
    if (isTimerDone && isHeroLoaded) {
      onComplete();
    }
  }, [isTimerDone, isHeroLoaded, onComplete]);

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
