import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/about.jpg?w=1920&format=webp&quality=80'; // Import the optimized image


const Story = ({ about }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div id="about" className="overflow-hidden">
      {/* Main Story Section */}
      <section className="py-section-padding px-gutter max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                className="rounded-xl shadow-2xl w-full aspect-[4/5] object-cover" 
                alt="Mandha Ru Atmosphere" 
                src={aboutImg} // Use the imported optimized image
              />
              <motion.div 
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: false }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-secondary text-on-secondary p-8 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center leading-tight shadow-xl"
              >
                <span className="font-headline-md text-label-sm md:text-[20px]">EST.</span>
                <span className="font-display-lg text-headline-md md:text-[28px]">2024</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:col-span-7 lg:pl-12"
          >
            <motion.h2 variants={itemVariants} className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-6">{about.title}</motion.h2>
            <div className="space-y-6 font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant">
              {about.content.map((paragraph, index) => (
                <motion.p key={index} variants={itemVariants}>{paragraph}</motion.p>
              ))}
            </div>
            <motion.div 
              variants={itemVariants}
              className="mt-10 border-l-4 border-secondary pl-6 italic font-body-md md:font-body-lg text-on-surface bg-secondary/5 py-4 rounded-r-lg"
            >
              "{about.quote}"
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-surface-container-low py-section-padding">
        <div className="max-w-container-max-width mx-auto px-gutter">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16"
          >
            {about.values.map((value, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="space-y-4 p-6 bg-white rounded-2xl shadow-sm border border-outline-variant/30"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ type: "spring", delay: 0.2 + (index * 0.1) }}
                  className="w-16 h-16 flex items-center justify-center bg-primary rounded-2xl mb-6 shadow-lg rotate-3"
                >
                  <span className="material-symbols-outlined text-on-primary text-3xl">{value.icon}</span>
                </motion.div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold">{value.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Story;
