import React, { useState, useEffect } from 'react';
import { useAdminData } from '../../admin/context/AdminDataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Loader2, XCircle, PlusCircle, MinusCircle, GripVertical } from 'lucide-react';

const MenuSettings = () => {
  const { adminData, loading, error, updateAdminData } = useAdminData();
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState(null);

  useEffect(() => {
    if (adminData && adminData.menu) {
      setCategories(adminData.menu.categories);
      setItems(adminData.menu.items);
    }
  }, [adminData]);

  const handleCategoryChange = (index, field, value) => {
    const newCategories = [...categories];
    newCategories[index] = { ...newCategories[index], [field]: value };
    setCategories(newCategories);
  };

  const addCategory = () => {
    setCategories(prev => [...prev, { id: Date.now().toString(), name: '' }]);
  };

  const removeCategory = (id) => {
    setCategories(prev => prev.filter(cat => cat.id !== id));
    // Also remove items belonging to this category
    setItems(prev => prev.filter(item => item.categoryId !== id));
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const addItem = () => {
    setItems(prev => [...prev, { id: Date.now(), name: '', price: '', categoryId: categories[0]?.id || '', label: '', options: '' }]);
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveError(null);
    setSaveSuccess(false);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      updateAdminData('menu', { categories, items });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      setSaveError('Failed to save changes.');
      console.error("Error saving menu settings:", err);
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) return <div className="text-on-surface-variant">Loading...</div>;
  if (error) return <div className="text-error">Error: {error}</div>;

  return (
    <div className="space-y-8">
      <h1 className="font-headline-lg text-primary tracking-tight">Menu & Services Settings</h1>
      <p className="text-on-surface-variant font-body-md mt-1">Manage the menu categories and individual items.</p>

      <form onSubmit={handleSubmit} className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant shadow-lg space-y-8">

        {/* Categories Section */}
        <div className="space-y-4">
          <h2 className="font-headline-md text-on-surface">Manage Categories</h2>
          <div className="space-y-3">
            {categories.map((category, index) => (
              <div key={category.id} className="flex items-center space-x-3 bg-surface-container border border-outline-variant rounded-xl p-3">
                <GripVertical size={20} className="text-on-surface-variant cursor-grab" />
                <input
                  type="text"
                  value={category.name}
                  onChange={(e) => handleCategoryChange(index, 'name', e.target.value)}
                  className="flex-1 bg-transparent focus:outline-none focus:border-primary border-b border-transparent focus:border-b-primary-fixed transition-all font-body-md"
                  placeholder="Category Name"
                  required
                />
                <button 
                  type="button" 
                  onClick={() => removeCategory(category.id)}
                  className="p-1 rounded-full text-error hover:bg-error/10 transition-colors"
                >
                  <MinusCircle size={20} />
                </button>
              </div>
            ))}
          </div>
          <button 
            type="button" 
            onClick={addCategory}
            className="flex items-center space-x-2 text-primary hover:text-primary/80 font-label-lg mt-4"
          >
            <PlusCircle size={20} />
            <span>Add New Category</span>
          </button>
        </div>

        {/* Menu Items Section */}
        <div className="space-y-4">
          <h2 className="font-headline-md text-on-surface">Manage Menu Items</h2>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={item.id} className="bg-surface-container border border-outline-variant rounded-xl p-4 space-y-3 relative">
                <button 
                  type="button" 
                  onClick={() => removeItem(item.id)}
                  className="absolute top-3 right-3 p-1 rounded-full text-error hover:bg-error/10 transition-colors"
                >
                  <XCircle size={18} />
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor={`item-name-${item.id}`} className="font-label-md text-on-surface-variant block">Item Name</label>
                    <input 
                      type="text" 
                      id={`item-name-${item.id}`} 
                      value={item.name}
                      onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                      className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor={`item-price-${item.id}`} className="font-label-md text-on-surface-variant block">Price</label>
                    <input 
                      type="text" 
                      id={`item-price-${item.id}`} 
                      value={item.price}
                      onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                      className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                      placeholder="e.g., 25K, 15.00"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor={`item-category-${item.id}`} className="font-label-md text-on-surface-variant block">Category</label>
                    <select
                      id={`item-category-${item.id}`}
                      value={item.categoryId}
                      onChange={(e) => handleItemChange(index, 'categoryId', e.target.value)}
                      className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                      required
                    >
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor={`item-label-${item.id}`} className="font-label-md text-on-surface-variant block">Label (Optional)</label>
                    <input 
                      type="text" 
                      id={`item-label-${item.id}`} 
                      value={item.label || ''}
                      onChange={(e) => handleItemChange(index, 'label', e.target.value)}
                      className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                      placeholder="e.g., Signature, New, Hot"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor={`item-options-${item.id}`} className="font-label-md text-on-surface-variant block">Options (Optional)</label>
                  <input 
                    type="text" 
                    id={`item-options-${item.id}`} 
                    value={item.options || ''}
                    onChange={(e) => handleItemChange(index, 'options', e.target.value)}
                    className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                    placeholder="e.g., Hot / Ice, Small / Large"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor={`item-description-${item.id}`} className="font-label-md text-on-surface-variant block">Description (Optional)</label>
                  <textarea 
                    id={`item-description-${item.id}`} 
                    value={item.description || ''}
                    onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                    rows="2"
                    className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                    placeholder="Short description of the item."
                  ></textarea>
                </div>
              </div>
            ))}
          </div>
          <button 
            type="button" 
            onClick={addItem}
            className="flex items-center space-x-2 text-primary hover:text-primary/80 font-label-lg mt-4"
          >
            <PlusCircle size={20} />
            <span>Add New Menu Item</span>
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
              <span>Menu settings saved successfully!</span>
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

export default MenuSettings;
