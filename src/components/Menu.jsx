import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = ({ menu }) => {
  const [activeCategory, setActiveCategory] = useState(menu.categories[0]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 2); // Small threshold
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      checkScroll();
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const filteredItems = menu.items.filter(item => item.category === activeCategory);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6; 
      const scrollTo = direction === 'left' 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const handleCategoryClick = (category, e) => {
    setActiveCategory(category);
    if (e && e.target && scrollRef.current) {
      const button = e.target;
      const container = scrollRef.current;
      const scrollLeft = button.offsetLeft - container.clientWidth / 2 + button.clientWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="menu" className="py-section-padding px-gutter max-w-container-max-width mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          viewport={{ once: false }}
          className="text-secondary font-label-md text-label-sm md:text-label-lg uppercase mb-4 block font-bold"
        >
          Pilihan Terkurasi
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-6"
        >
          Menu Mandha Ru
        </motion.h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant font-body-md md:font-body-lg text-body-md md:text-body-lg leading-relaxed">
          Nikmati perpaduan rasa kopi dan suasana rumah dalam setiap sajian kami.
        </p>
        <p className="mt-4 text-secondary font-label-sm italic bg-secondary/5 inline-block px-4 py-1 rounded-full border border-secondary/10">
          * Harga belum termasuk service 5%
        </p>
      </motion.div>

      {/* Category Filter Container */}
      <div className="mb-12 relative max-w-5xl mx-auto md:px-12 group">
        {/* Left Arrow - Desktop Only */}
        <AnimatePresence>
          {canScrollLeft && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.8, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-xl border border-outline-variant rounded-full hidden md:flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300"
              title="Scroll Left"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </motion.button>
          )}
        </AnimatePresence>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar pb-4 gap-3 scroll-smooth px-4 md:px-0"
        >
          {menu.categories.map(category => (
            <motion.button 
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleCategoryClick(category, e)}
              className={`px-6 py-2.5 rounded-full font-label-md transition-all whitespace-nowrap border flex-shrink-0 ${activeCategory === category ? 'bg-primary text-on-primary shadow-lg border-primary ring-4 ring-primary/10' : 'bg-white text-primary border-outline-variant hover:bg-primary/5'}`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Right Arrow - Desktop Only */}
        <AnimatePresence>
          {canScrollRight && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.8, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-xl border border-outline-variant rounded-full hidden md:flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300"
              title="Scroll Right"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </motion.button>
          )}
        </AnimatePresence>
        
        {/* Fade Indicators - Desktop Only */}
        <div className="absolute left-10 top-0 bottom-4 w-12 bg-gradient-to-r from-surface to-transparent pointer-events-none z-0 hidden md:block"></div>
        <div className="absolute right-10 top-0 bottom-4 w-12 bg-gradient-to-l from-surface to-transparent pointer-events-none z-0 hidden md:block"></div>
      </div>

      <div className="min-h-[400px]">
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div 
                layout
                key={item.id || item.name}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                className="group flex flex-col py-4 border-b border-outline-variant/10 hover:bg-secondary/5 px-4 rounded-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col gap-1 flex-grow">
                    <div className="flex items-center gap-3">
                      <h3 className="font-headline-sm text-body-lg md:text-headline-sm text-primary font-bold leading-tight group-hover:text-secondary transition-colors italic">{item.name}</h3>
                      {item.label && (
                        <span className="bg-secondary text-on-secondary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter shadow-sm">
                          {item.label}
                        </span>
                      )}
                    </div>
                    {item.options && (
                      <div className="flex items-center gap-2">
                        <span className="text-on-surface-variant/50 text-[10px] md:text-[11px] font-medium uppercase tracking-widest">{item.options}</span>
                      </div>
                    )}
                    <p className="text-on-surface-variant font-body-sm text-label-sm md:text-body-sm leading-relaxed opacity-70 mt-1">
                      {item.description || 'Sajian spesial Mandha Ru untuk kamu.'}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-primary font-display-sm text-headline-sm md:text-headline-md font-black tracking-tighter whitespace-nowrap">{item.price}</span>
                    <div className="w-6 h-0.5 bg-secondary/30 mt-1 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        className="mt-20 text-center"
      >
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="inline-block bg-primary rounded-[2.5rem] p-10 md:p-14 max-w-5xl text-on-primary heritage-border shadow-3xl relative overflow-hidden group"
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center text-left">
            <div>
              <h3 className="font-display-lg text-headline-lg mb-4 font-bold leading-tight text-white italic">Haus Cerita Baru?</h3>
              <p className="font-body-md text-body-lg mb-8 opacity-80 leading-relaxed text-white/90">
                Kami selalu punya ruang untuk cerita kamu. Temukan kenyamanan rumah di setiap cangkir kopi kami.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-white font-body-md leading-relaxed italic">
                  "Kopi terbaik adalah kopi yang dinikmati bersama cerita. Temukan ruang kamu di Mandha Ru."
                </p>
                <div className="mt-4 flex items-center gap-2 text-secondary font-bold">
                  <span className="material-symbols-outlined">local_cafe</span>
                  <span className="text-sm uppercase tracking-widest">Mari Berkunjung</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Menu;
