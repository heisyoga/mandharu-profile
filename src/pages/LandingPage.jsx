import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';
import ComingSoonModal from '../components/ComingSoonModal';
import { useSiteData } from '../hooks/useSiteData';
import logoData from '../assets/logo.png?w=640&format=webp&as=url';

const logo = typeof logoData === 'string' ? logoData : (logoData.default || logoData);

function LandingPage() {
  const { data, loading, error } = useSiteData();
  const [showSplash, setShowSplash] = useState(true);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary" />
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-error font-headline-md">Error: {error}</div>
      </div>
    );
  }

  const openOrderModal = () => setIsOrderModalOpen(true);

  return (
    <>
      <div className="grain-overlay" />
      
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen 
            logo={logo}
            onComplete={() => setShowSplash(false)} 
          />
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-body-md text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden"
          >
            <Navbar brand={data.brand} onOrderClick={openOrderModal} />
            <main>
              <Hero brand={data.brand} />
              <Story about={data.about} />
              <Menu menu={data.menu} />
              <Gallery gallery={data.gallery} />
              <Contact contact={data.contact} />
            </main>
            <Footer brand={data.brand} contact={data.contact} />
          </motion.div>
        )}
      </AnimatePresence>

      <ComingSoonModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
    </>
  );
}

export default LandingPage;
