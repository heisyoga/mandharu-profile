import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ brand, contact }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-surface-container-high border-t border-outline-variant overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="flex flex-col md:flex-row justify-between items-start px-gutter py-20 max-w-container-max-width mx-auto gap-12"
      >
        <div className="max-w-xs space-y-6">
          <motion.h2 variants={itemVariants} className="font-display-lg text-headline-lg text-primary font-bold">{brand.name}</motion.h2>
          <motion.p variants={itemVariants} className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{brand.description}</motion.p>
          <motion.div variants={itemVariants} className="flex gap-4">
            {[
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.667-.014 4.947-.072c4.337-.2 6.78-2.618 6.98-6.98.058-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.337-2.618-6.78-6.98-6.98-1.281-.058-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                ), 
                link: `https://instagram.com/${contact.instagram}`, 
                label: 'Instagram' 
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.61-1.47-2.11-2.44v10.15c-.05 2.02-.74 4.07-2.22 5.46-1.41 1.41-3.39 2.19-5.38 2.22-1.99.03-4.04-.61-5.51-1.95C1.56 20.73.54 18.66.52 16.5c-.03-2.15 1.02-4.25 2.67-5.6 1.48-1.28 3.51-1.93 5.48-1.9 1.1.02 2.19.23 3.2.62v4.2c-.87-.41-1.84-.62-2.8-.57-1.02.05-2.02.49-2.7 1.23-.68.74-1.02 1.73-1 2.73.02 1.06.53 2.1 1.35 2.74.83.64 1.95.89 2.97.7 1.02-.19 1.9-.91 2.3-1.88.1-.24.15-.5.15-.76V.02z"/>
                  </svg>
                ), 
                link: `https://tiktok.com/@${contact.tiktok}`, 
                label: 'TikTok' 
              },
              { 
                icon: <span className="material-symbols-outlined">mail</span>, 
                link: `mailto:${contact.email}`, 
                label: 'Email' 
              }
            ].map((social, i) => (
              <motion.a 
                key={i}
                whileHover={{ scale: 1.2, rotate: 5, backgroundColor: "#7a0001", color: "#ffffff" }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-2xl border border-outline flex items-center justify-center text-on-surface-variant transition-all shadow-sm" 
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="font-label-lg text-label-lg text-primary uppercase tracking-[0.2em] font-bold">Jelajahi</h4>
            <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
              {['Home', 'About', 'Menu', 'Gallery'].map(item => (
                <li key={item}>
                  <motion.a 
                    whileHover={{ x: 5, color: "#bb0013" }} 
                    className="transition-colors block" 
                    href={`#${item === 'Home' ? '' : item.toLowerCase()}`}
                  >
                    {item === 'About' ? 'Tentang Kami' : item === 'Gallery' ? 'Galeri' : item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="font-label-lg text-label-lg text-primary uppercase tracking-[0.2em] font-bold">Kontak</h4>
            <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
              <li>
                <motion.a whileHover={{ x: 5, color: "#bb0013" }} href="#location">Lokasi Kedai</motion.a>
              </li>
              <li>
                <motion.a whileHover={{ x: 5, color: "#bb0013" }} href={`tel:${contact.phone.replace(/\s/g, '')}`}>Telepon & SMS</motion.a>
              </li>
              <li>
                <motion.a whileHover={{ x: 5, color: "#bb0013" }} href={`mailto:${contact.email}`}>Email</motion.a>
              </li>
              <li>
                <motion.a whileHover={{ x: 5, color: "#bb0013" }} href={`https://instagram.com/${contact.instagram}`}>Instagram</motion.a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="max-w-xs w-full space-y-6">
          <h4 className="font-label-lg text-label-lg text-primary uppercase tracking-[0.2em] font-bold">Newsletter</h4>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Dapatkan cerita budaya kopi dan promo menarik dari Mandha Ru.</p>
          <div className="relative group">
            <input 
              className="bg-white border border-outline-variant/50 rounded-2xl px-6 py-4 w-full focus:ring-2 focus:ring-primary outline-none transition-all shadow-inner" 
              placeholder="Alamat Email Anda" 
              type="email" 
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full bg-primary text-on-primary px-6 py-4 rounded-2xl font-label-lg shadow-lg hover:bg-secondary transition-colors"
            >
              Daftar Sekarang
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        className="max-w-container-max-width mx-auto px-gutter py-10 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
      >
        <p className="font-label-sm text-label-sm text-on-surface-variant/60">
          © 2024 <span className="text-primary font-bold">{brand.name}</span> Vietnamese Coffee. Dibuat dengan penuh rasa di Bali.
        </p>
        <div className="flex gap-8 font-label-sm text-label-sm text-on-surface-variant/60">
          <motion.a whileHover={{ color: "#7a0001" }} href="#">Syarat & Ketentuan</motion.a>
          <motion.a whileHover={{ color: "#7a0001" }} href="#">Kebijakan Privasi</motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
