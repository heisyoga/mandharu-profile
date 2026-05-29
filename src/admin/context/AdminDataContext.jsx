import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminDataContext = createContext(null);

export const useAdminData = () => useContext(AdminDataContext);

export const AdminDataProvider = ({ children }) => {
  const [adminData, setAdminData] = useState({
    brand: {},
    about: {},
    menu: { categories: [], items: [] },
    gallery: { images: [] },
    contact: {},
    users: [] // Mock users
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching data from JSON files
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [brandRes, aboutRes, menuRes, galleryRes, contactRes] = await Promise.all([
          fetch('/data/brand.json'),
          fetch('/data/about.json'),
          fetch('/data/menu.json'),
          fetch('/data/gallery.json'),
          fetch('/data/contact.json'),
        ]);

        const brand = await brandRes.json();
        const about = await aboutRes.json();
        const menu = await menuRes.json();
        const gallery = await galleryRes.json();
        const contact = await contactRes.json();

        // Mock Users for User Management
        const users = [
          { id: '1', name: 'Super Admin', email: 'admin@mandharu.com', role: 'Super Admin' },
          { id: '2', name: 'Jane Doe', email: 'jane.doe@mandharu.com', role: 'Editor' },
          { id: '3', name: 'John Smith', email: 'john.smith@mandharu.com', role: 'Viewer' },
        ];

        setAdminData({
          brand,
          about,
          menu,
          gallery,
          contact,
          users,
        });
      } catch (err) {
        console.error("Failed to fetch admin data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Simulate saving data (for now, just updates state)
  const updateAdminData = (section, newData) => {
    setAdminData(prevData => ({
      ...prevData,
      [section]: newData,
    }));
    // In a real application, you would send this to your backend API
    console.log(`Admin data for ${section} updated:`, newData);
  };

  const value = { adminData, loading, error, updateAdminData };

  return (
    <AdminDataContext.Provider value={value}>
      {children}
    </AdminDataContext.Provider>
  );
};
