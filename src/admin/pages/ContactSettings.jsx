import React, { useState, useEffect } from 'react';
import { useAdminData } from '../../admin/context/AdminDataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Loader2, XCircle } from 'lucide-react';

const ContactSettings = () => {
  const { adminData, loading, error, updateAdminData } = useAdminData();
  const [formData, setFormData] = useState({
    address: '',
    googleMapsEmbed: '',
    googleMapsLink: '',
    phone: '',
    email: '',
    instagram: '',
    tiktok: '',
    openingHours: {
      everydays: '',
    },
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState(null);

  useEffect(() => {
    if (adminData && adminData.contact) {
      setFormData(adminData.contact);
    }
  }, [adminData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOpeningHoursChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      openingHours: {
        ...prevData.openingHours,
        [name]: value,
      },
    }));
  };

  // handleSubmit and JSX will follow in subsequent edits

  if (loading) return <div className="text-on-surface-variant">Loading...</div>;
  if (error) return <div className="text-error">Error: {error}</div>;

  return (
    <div className="space-y-8">
      <h1 className="font-headline-lg text-primary tracking-tight">Contact Information Settings</h1>
      <p className="text-on-surface-variant font-body-md mt-1">Manage the contact details displayed on your website.</p>

      <form className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant shadow-lg space-y-6">
        <div className="space-y-2">
          <label htmlFor="address" className="font-label-lg text-on-surface-variant block">Address</label>
          <textarea 
            id="address" 
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
            required
          ></textarea>
        </div>

        <div className="space-y-2">
          <label htmlFor="googleMapsEmbed" className="font-label-lg text-on-surface-variant block">Google Maps Embed URL</label>
          <input 
            type="text" 
            id="googleMapsEmbed" 
            name="googleMapsEmbed"
            value={formData.googleMapsEmbed}
            onChange={handleChange}
            className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
          />
          <p className="text-sm text-on-surface-variant opacity-70">Get this from Google Maps &gt; Share &gt; Embed a map &gt; Copy HTML.</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="googleMapsLink" className="font-label-lg text-on-surface-variant block">Google Maps Link</label>
          <input 
            type="text" 
            id="googleMapsLink" 
            name="googleMapsLink"
            value={formData.googleMapsLink}
            onChange={handleChange}
            className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
          />
          <p className="text-sm text-on-surface-variant opacity-70">Direct link to your location on Google Maps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="font-label-lg text-on-surface-variant block">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="font-label-lg text-on-surface-variant block">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="instagram" className="font-label-lg text-on-surface-variant block">Instagram Handle</label>
            <input 
              type="text" 
              id="instagram" 
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
            />
            <p className="text-sm text-on-surface-variant opacity-70">Just the handle, e.g., 'mandha_ru'.</p>
          </div>
          <div className="space-y-2">
            <label htmlFor="tiktok" className="font-label-lg text-on-surface-variant block">TikTok Handle</label>
            <input 
              type="text" 
              id="tiktok" 
              name="tiktok"
              value={formData.tiktok}
              onChange={handleChange}
              className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
            />
            <p className="text-sm text-on-surface-variant opacity-70">Just the handle, e.g., 'rumahmandharu'.</p>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="openingHours.everydays" className="font-label-lg text-on-surface-variant block">Opening Hours (Everyday)</label>
          <input 
            type="text" 
            id="openingHours.everydays" 
            name="everydays"
            value={formData.openingHours.everydays}
            onChange={handleOpeningHoursChange}
            className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
            placeholder="e.g., 10:00 - 03:00"
            required
          />
        </div>

        <motion.button 
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-primary text-on-primary py-3 px-6 rounded-xl font-label-lg flex items-center justify-center space-x-2 transition-all shadow-md shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSaving}
        >
          {isSaving ? (
            <Loader2 size={20} className="animate-spin mr-2" />
          ) : (
            <Save size={20} className="mr-2" />
          )}
          <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
        </motion.button>

        <AnimatePresence>
          {saveSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-3 bg-tertiary-container text-on-tertiary-container rounded-xl flex items-center space-x-2"
            >
              <CheckCircle size={20} />
              <span>Contact settings saved successfully!</span>
            </motion.div>
          )}

          {saveError && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-3 bg-error-container text-on-error-container rounded-xl flex items-center space-x-2"
            >
              <XCircle size={20} />
              <span>{saveError}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default ContactSettings;
