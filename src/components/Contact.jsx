import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ contact }) => {
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
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="location" className="max-w-container-max-width mx-auto px-gutter py-section-padding overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-3xl border border-outline-variant/20"
        >
          <motion.h2 
            variants={itemVariants}
            className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-10"
          >
            Hubungi Kami
          </motion.h2>
          
          <div className="space-y-10">
            {[
              { icon: 'location_on', title: 'Lokasi Kami', content: contact.address, action: 'Buka di Google Maps', link: contact.googleMapsLink },
              { icon: 'mail', title: 'Email', content: contact.email, action: 'Kirim Email', link: `mailto:${contact.email}` },
              { icon: 'chat', title: 'Telepon & SMS', content: contact.phone, action: 'Hubungi Sekarang', link: `tel:${contact.phone.replace(/\s/g, '')}`, special: true },
              { icon: 'schedule', title: 'Jam Operasional', content: `Setiap hari: ${contact.openingHours.everydays}`, type: 'text' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex gap-6 group"
              >
                <motion.div 
                  whileInView={{ rotate: [0, 10, -10, 0] }}
                  viewport={{ once: false }}
                  className="bg-primary-fixed p-4 rounded-2xl h-fit group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-sm"
                >
                  <span className="material-symbols-outlined text-2xl"> {item.icon}</span>
                </motion.div>
                <div className="flex-grow">
                  <h4 className="font-headline-md text-headline-sm md:text-headline-md text-on-surface mb-2 font-bold">{item.title}</h4>
                  <p className="font-body-md text-label-sm md:text-body-md text-on-surface-variant leading-relaxed whitespace-pre-line mb-4 opacity-80">{item.content}</p>
                  {item.action && (
                    <motion.a 
                      whileHover={{ x: 5 }}
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 font-label-lg transition-all ${item.special ? 'bg-primary text-on-primary px-8 py-3 rounded-full shadow-lg hover:bg-secondary' : 'text-primary hover:underline'}`}
                    >
                      {item.action}
                      <span className="material-symbols-outlined text-[18px]">north_east</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Map Integration */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="h-full min-h-[500px]"
        >
          <div className="rounded-[2.5rem] overflow-hidden h-full shadow-3xl border border-outline-variant/30 relative">
            <iframe
              src={contact.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mandha Ru Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
