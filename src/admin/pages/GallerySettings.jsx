import React, { useState, useEffect } from 'react';
import { useAdminData } from '../../admin/context/AdminDataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Loader2, XCircle, PlusCircle, Trash2, Image as ImageIcon } from 'lucide-react';

const GallerySettings = () => {
  const { adminData, loading, error, updateAdminData } = useAdminData();
  const [galleryImages, setGalleryImages] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState(null);

  useEffect(() => {
    if (adminData && adminData.gallery) {
      setGalleryImages(adminData.gallery);
    }
  }, [adminData]);

  const handleImageChange = (index, field, value) => {
    const newImages = [...galleryImages];
    newImages[index] = { ...newImages[index], [field]: value };
    setGalleryImages(newImages);
  };

  const addImage = () => {
    setGalleryImages(prev => [...prev, { id: Date.now(), url: '', alt: '', title: '' }]);
  };

  const removeImage = (id) => {
    setGalleryImages(prev => prev.filter(image => image.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveError(null);
    setSaveSuccess(false);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      updateAdminData('gallery', galleryImages);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      setSaveError('Failed to save changes.');
      console.error("Error saving gallery settings:", err);
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) return <div className="text-on-surface-variant">Loading...</div>;
  if (error) return <div className="text-error">Error: {error}</div>;

  return (
    <div className="space-y-8">
      <h1 className="font-headline-lg text-primary tracking-tight">Gallery Settings</h1>
      <p className="text-on-surface-variant font-body-md mt-1">Manage the image gallery of your website.</p>

      <form onSubmit={handleSubmit} className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant shadow-lg space-y-8">

        {/* Gallery Image List */}
        <div className="space-y-4">
          <h2 className="font-headline-md text-on-surface">Manage Images</h2>
          <div className="space-y-4">
            {galleryImages.map((image, index) => (
              <div key={image.id} className="bg-surface-container border border-outline-variant rounded-xl p-4 space-y-3 relative flex flex-col md:flex-row md:items-center md:space-x-4">
                <button 
                  type="button" 
                  onClick={() => removeImage(image.id)}
                  className="absolute top-3 right-3 p-1 rounded-full text-error hover:bg-error/10 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
                
                <div className="flex-shrink-0 w-24 h-24 bg-surface-container-highest rounded-lg flex items-center justify-center overflow-hidden border border-outline-variant">
                  {image.url ? (
                    <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
                  ) : (
                    <ImageIcon size={40} className="text-on-surface-variant opacity-50" />
                  )}
                </div>

                <div className="flex-1 space-y-3">
                  <div className="space-y-2">
                    <label htmlFor={`image-url-${image.id}`} className="font-label-md text-on-surface-variant block">Image URL</label>
                    <input 
                      type="text" 
                      id={`image-url-${image.id}`} 
                      value={image.url}
                      onChange={(e) => handleImageChange(index, 'url', e.target.value)}
                      className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                      placeholder="/images/your-image.jpg"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor={`image-alt-${image.id}`} className="font-label-md text-on-surface-variant block">Alt Text</label>
                    <input 
                      type="text" 
                      id={`image-alt-${image.id}`} 
                      value={image.alt}
                      onChange={(e) => handleImageChange(index, 'alt', e.target.value)}
                      className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                      placeholder="Descriptive alt text for accessibility"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor={`image-title-${image.id}`} className="font-label-md text-on-surface-variant block">Title</label>
                    <input 
                      type="text" 
                      id={`image-title-${image.id}`} 
                      value={image.title}
                      onChange={(e) => handleImageChange(index, 'title', e.target.value)}
                      className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                      placeholder="Title for the image"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button 
            type="button" 
            onClick={addImage}
            className="flex items-center space-x-2 text-primary hover:text-primary/80 font-label-lg mt-4"
          >
            <PlusCircle size={20} />
            <span>Add New Image</span>
          </button>
        </div>

        {/* Save button and feedback */}
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
              <span>Gallery settings saved successfully!</span>
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

export default GallerySettings;
