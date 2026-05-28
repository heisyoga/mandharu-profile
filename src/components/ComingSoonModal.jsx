import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ComingSoonModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[10001] bg-primary/20 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[10002] flex items-center justify-center p-gutter pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] p-10 md:p-14 max-w-lg w-full shadow-3xl border border-outline-variant/30 pointer-events-auto relative overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3">
                  <span className="material-symbols-outlined text-primary text-4xl">shopping_basket</span>
                </div>
                
                <h3 className="font-display-lg text-headline-lg text-primary mb-4 font-bold italic">
                  Coming Soon!
                </h3>
                
                <p className="font-body-md text-on-surface-variant leading-relaxed mb-10">
                  Kami sedang meracik fitur pemesanan langsung melalui website agar kamu bisa menikmati kopi Mandha Ru dengan lebih mudah. Tunggu kehadirannya ya!
                </p>
                
                <div className="flex flex-col gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="bg-primary text-on-primary py-4 rounded-2xl font-label-lg font-bold shadow-lg"
                  >
                    Oke, Siap!
                  </motion.button>
                  
                  <p className="text-label-sm text-on-surface-variant/60">
                    Untuk saat ini, silakan pesan melalui kasir.
                  </p>
                </div>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-on-surface-variant/40 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;
