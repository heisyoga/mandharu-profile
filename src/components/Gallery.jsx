import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = ({ gallery }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="py-section-padding overflow-hidden bg-surface-container-lowest">
      <div className="max-w-container-max-width mx-auto px-gutter">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <motion.h2 
            className="font-display-lg text-headline-lg md:text-display-lg text-primary"
          >
            Galeri Kami
          </motion.h2>
          <motion.p 
            className="text-on-surface-variant max-w-2xl mx-auto font-body-md md:font-body-lg"
          >
            Lihatlah sekeliling Mandha Ru. Sudut-sudut tenang rumah untuk beristirahat dan bersantai.
          </motion.p>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative flex items-center justify-center h-[500px] md:h-[650px] w-full px-4">
        {/* Navigation Buttons (Desktop) */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-10 z-20 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full shadow-xl border border-primary/10 text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 hidden md:flex"
        >
          <span className="material-symbols-outlined text-3xl">chevron_left</span>
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-10 z-20 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full shadow-xl border border-primary/10 text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 hidden md:flex"
        >
          <span className="material-symbols-outlined text-3xl">chevron_right</span>
        </button>

        <div className="relative flex items-center justify-center w-full h-full overflow-visible">
          <AnimatePresence initial={false}>
            {gallery.map((item, index) => {
              // Calculate relative position to active index
              let position = index - activeIndex;
              
              // Handle wrap-around for infinite look
              if (position < -1) position = position + gallery.length;
              if (position > gallery.length - 2) position = position - gallery.length;

              // Only render neighbor items
              const isVisible = position >= -2 && position <= 2;
              if (!isVisible) return null;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: position === 0 ? 1 : 0.4,
                    scale: position === 0 ? 1 : 0.8,
                    x: `${position * 75}%`, 
                    zIndex: position === 0 ? 10 : 5,
                  }}
                  whileTap={position === 0 ? { 
                    scale: 1.2, 
                    zIndex: 20,
                    transition: { type: "spring", stiffness: 400, damping: 25 } 
                  } : { scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = offset.x;
                    if (swipe < -50) nextSlide();
                    else if (swipe > 50) prevSlide();
                  }}
                  onClick={() => {
                    if (position !== 0) setActiveIndex(index);
                  }}
                  className={`absolute w-[280px] sm:w-[400px] md:w-[600px] aspect-[4/5] md:aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-pointer select-none`}
                >
                  <img 
                    src={item.url} 
                    alt={item.alt} 
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  
                  {position === 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileTap={{ opacity: 0 }} // Hide text while zooming
                      className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12 text-white pointer-events-none"
                    >
                      <span className="text-secondary font-label-sm uppercase tracking-[0.3em] mb-2 font-bold">Mandha Ru</span>
                      <h3 className="font-display-lg text-headline-lg md:text-display-lg leading-tight">{item.title}</h3>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-12">
        {gallery.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-500 ${activeIndex === index ? 'w-10 bg-primary' : 'w-2 bg-primary/20'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
