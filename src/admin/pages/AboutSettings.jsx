import React, { useState, useEffect } from 'react';
import { useAdminData } from '../../admin/context/AdminDataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Loader2, XCircle, PlusCircle, MinusCircle, CheckCircle } from 'lucide-react';

const AboutSettings = () => {
  const { adminData, loading, error, updateAdminData } = useAdminData();
  const [formData, setFormData] = useState({
    title: '',
    content: [''],
    quote: '',
    values: [],
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState(null);

  useEffect(() => {
    if (adminData && adminData.about) {
      setFormData(adminData.about);
    }
  }, [adminData]);

  const handleTextChange = (e) => {
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
      await new Promise(resolve => setTimeout(resolve, 1000));
      updateAdminData('about', formData);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      setSaveError('Failed to save changes.');
      console.error("Error saving about settings:", err);
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) return <div className="text-on-surface-variant">Loading...</div>;
  if (error) return <div className="text-error">Error: {error}</div>;

  return (
    <div className="space-y-8">
      <h1 className="font-headline-lg text-primary tracking-tight">About Us Settings</h1>
      <p className="text-on-surface-variant font-body-md mt-1">Manage the "About Us" section of your website.</p>

      <form onSubmit={handleSubmit} className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant shadow-lg space-y-8">
        <div className="space-y-2">
          <label htmlFor="title" className="font-label-lg text-on-surface-variant block">Section Title</label>
          <input 
            type="text" 
            id="title" 
            name="title"
            value={formData.title}
            onChange={handleTextChange}
            className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="quote" className="font-label-lg text-on-surface-variant block">Quote</label>
          <textarea 
            id="quote" 
            name="quote"
            value={formData.quote}
            onChange={handleTextChange}
            rows="2"
            className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
            required
          ></textarea>
        </div>

        {/* Content Paragraphs Section */}
        <div className="space-y-4">
          <label className="font-label-lg text-on-surface-variant block">Content Paragraphs</label>
          {formData.content.map((paragraph, index) => (
            <div key={index} className="flex items-center space-x-2">
              <textarea 
                value={paragraph}
                onChange={(e) => handleContentChange(index, e.target.value)}
                rows="3"
                className="flex-1 bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                required
              ></textarea>
              {formData.content.length > 1 && (
                <button 
                  type="button" 
                  onClick={() => removeContentParagraph(index)}
                  className="p-2 rounded-full text-error hover:bg-error/10 transition-colors"
                >
                  <MinusCircle size={20} />
                </button>
              )}
            </div>
          ))}
          <button 
            type="button" 
            onClick={addContentParagraph}
            className="flex items-center space-x-2 text-primary hover:text-primary/80 font-label-lg"
          >
            <PlusCircle size={20} />
            <span>Add Paragraph</span>
          </button>
        </div>

        {/* Values Section - will be added after content paragraphs */}
        <div className="space-y-4">
          <h3 className="font-label-lg text-on-surface-variant">Values</h3>
          {formData.values.map((value, index) => (
            <div key={value.id} className="bg-surface-container border border-outline-variant rounded-xl p-4 space-y-3 relative">
              <button 
                type="button" 
                onClick={() => removeValue(value.id)}
                className="absolute top-3 right-3 p-1 rounded-full text-error hover:bg-error/10 transition-colors"
              >
                <XCircle size={18} />
              </button>
              <div className="space-y-2">
                <label htmlFor={`value-title-${index}`} className="font-label-md text-on-surface-variant block">Title</label>
                <input 
                  type="text" 
                  id={`value-title-${index}`} 
                  value={value.title}
                  onChange={(e) => handleValueChange(index, 'title', e.target.value)}
                  className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor={`value-description-${index}`} className="font-label-md text-on-surface-variant block">Description</label>
                <textarea 
                  id={`value-description-${index}`} 
                  value={value.description}
                  onChange={(e) => handleValueChange(index, 'description', e.target.value)}
                  rows="2"
                  className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                  required
                ></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor={`value-icon-${index}`} className="font-label-md text-on-surface-variant block">Icon (e.g., home, eco, groups)</label>
                <input 
                  type="text" 
                  id={`value-icon-${index}`} 
                  value={value.icon}
                  onChange={(e) => handleValueChange(index, 'icon', e.target.value)}
                  className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                />
              </div>
            </div>
          ))}
          <button 
            type="button" 
            onClick={addValue}
            className="flex items-center space-x-2 text-primary hover:text-primary/80 font-label-lg mt-4"
          >
            <PlusCircle size={20} />
            <span>Add Value Item</span>
          </button>
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
              <span>About Us settings saved successfully!</span>
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

export default AboutSettings;

