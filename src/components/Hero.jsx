import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({ brand }) => {
  const { scrollY } = useScroll();
  
  // Adjusted for mobile: starts fading only after 100px scroll, and fades slower
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 100, 400], [1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-[110vh] md:min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 bg-surface pb-12 md:pb-0">
      {/* Background with Gradient Mask */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
          }}
        />
        {/* Subtle Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-primary/5"></div>
      </motion.div>
      
      <div className="relative z-10 w-full px-gutter max-w-container-max-width mx-auto">
        <motion.div 
          style={{ opacity }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-2xl"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block text-primary font-label-md text-label-sm md:text-label-lg mb-4 tracking-[0.2em] uppercase bg-primary/10 backdrop-blur-md px-4 py-1 rounded"
          >
            Kedai Kopi {brand.name}
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-6 leading-tight"
          >
            {brand.tagline}
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant mb-10 max-w-lg"
          >
            {brand.description}
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "#bb0013" }}
              whileTap={{ scale: 0.95 }}
              href="#menu" 
              className="bg-primary text-on-primary px-8 md:px-10 py-3 md:py-4 rounded-full font-label-md md:font-label-lg text-label-md md:text-label-lg transition-all text-center shadow-lg"
            >
              Lihat Menu
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(122,0,1,0.05)" }}
              whileTap={{ scale: 0.95 }}
              href="#location" 
              className="border-2 border-primary text-primary px-8 md:px-10 py-3 md:py-4 rounded-full font-label-md md:font-label-lg text-label-md md:text-label-lg transition-all text-center"
            >
              Kunjungi Kami
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50"
      >
        <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
