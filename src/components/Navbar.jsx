import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ brand, onOrderClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', label: 'Home' },
    { name: 'About', href: '#about', label: 'Cerita' },
    { name: 'Menu', href: '#menu', label: 'Menu' },
    { name: 'Gallery', href: '#gallery', label: 'Galeri' },
    { name: 'Location', href: '#location', label: 'Lokasi' },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-lg border-b border-outline-variant/20 shadow-sm"
      >
        <div className="max-w-container-max-width mx-auto px-gutter py-4 md:py-6">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold" 
              href="#home"
            >
              {brand.name}
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <motion.a 
                  key={link.name}
                  whileHover={{ y: -2, color: "#bb0013" }}
                  className="text-on-surface-variant font-semibold font-body-md text-body-md transition-colors" 
                  href={link.href}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOrderClick}
                className="hidden sm:flex items-center gap-2 bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md hover:bg-secondary active:scale-95 transition-all shadow-md text-center"
              >
                <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                Order via Web
              </motion.button>
              
              {/* Mobile Menu Button */}
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-12 h-12 flex items-center justify-center bg-primary-fixed rounded-2xl text-primary"
              >
                <span className="material-symbols-outlined text-3xl">
                  {isOpen ? 'close' : 'menu'}
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Dropdown - Moved outside motion.header to avoid transform clipping */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden backdrop-blur-sm"
            />
            {/* Sidebar Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[70%] bg-surface z-[70] md:hidden shadow-2xl p-6 overflow-y-auto flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-display-sm text-primary font-bold">{brand.name}</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/5 text-primary"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    variants={linkVariants}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold text-on-surface hover:text-primary transition-colors py-4 px-4 rounded-xl hover:bg-primary/5 flex items-center justify-between group"
                    href={link.href}
                  >
                    <span>{link.label}</span>
                    <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                  </motion.a>
                ))}
                
                <div className="mt-8 flex flex-col gap-3">
                  <motion.button
                    variants={linkVariants}
                    onClick={() => {
                      setIsOpen(false);
                      onOrderClick();
                    }}
                    className="flex items-center justify-center gap-3 bg-secondary text-on-secondary py-4 rounded-xl font-bold text-center shadow-md text-lg w-full"
                  >
                    <span className="material-symbols-outlined text-xl">shopping_cart</span>
                    Order via Web
                  </motion.button>
                  
                  <motion.a
                    variants={linkVariants}
                    onClick={() => setIsOpen(false)}
                    href="#location"
                    className="bg-primary text-on-primary py-4 rounded-xl font-bold text-center shadow-md text-lg"
                  >
                    Hubungi Kami
                  </motion.a>
                </div>
              </div>

              <div className="mt-auto pt-10 text-center">
                <p className="text-on-surface-variant font-label-sm opacity-50 uppercase tracking-widest">
                  Mandha Ru Coffee
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
