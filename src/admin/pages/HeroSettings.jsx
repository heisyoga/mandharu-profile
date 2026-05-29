import React, { useState, useEffect } from 'react';
import { useAdminData } from '../../admin/context/AdminDataContext';
import { motion } from 'framer-motion';
import { Save, Loader2, XCircle, CheckCircle } from 'lucide-react';

const HeroSettings = () => {
  const { adminData, loading, error, updateAdminData } = useAdminData();
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    established: '',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState(null);

  useEffect(() => {
    if (adminData && adminData.brand) {
      setFormData(adminData.brand);
    }
  }, [adminData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveError(null);
    setSaveSuccess(false);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      updateAdminData('brand', formData);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000); // Hide success message after 3 seconds
    } catch (err) {
      setSaveError('Failed to save changes.');
      console.error("Error saving hero settings:", err);
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) return <div className="text-on-surface-variant">Loading...</div>;
  if (error) return <div className="text-error">Error: {error}</div>;

  return (
    <div className="space-y-8">
      <h1 className="font-headline-lg text-primary tracking-tight">Hero Section Settings</h1>
      <p className="text-on-surface-variant font-body-md mt-1">Manage the main hero section content of your website.</p>

      <form onSubmit={handleSubmit} className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant shadow-lg space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="font-label-lg text-on-surface-variant block">Brand Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="tagline" className="font-label-lg text-on-surface-variant block">Tagline</label>
          <input 
            type="text" 
            id="tagline" 
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
            className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="font-label-lg text-on-surface-variant block">Description</label>
          <textarea 
            id="description" 
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
            required
          ></textarea>
        </div>

        <div className="space-y-2">
          <label htmlFor="established" className="font-label-lg text-on-surface-variant block">Established Year</label>
          <input 
            type="number" 
            id="established" 
            name="established"
            value={formData.established}
            onChange={handleChange}
            className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
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
              <span>Settings saved successfully!</span>
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

export default HeroSettings;
