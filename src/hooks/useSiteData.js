import { useState, useEffect } from 'react';

export const useSiteData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [brand, about, menu, gallery, contact] = await Promise.all([
          fetch('/data/brand.json').then(res => res.json()),
          fetch('/data/about.json').then(res => res.json()),
          fetch('/data/menu.json').then(res => res.json()),
          fetch('/data/gallery.json').then(res => res.json()),
          fetch('/data/contact.json').then(res => res.json())
        ]);

        // Transform normalized menu data to UI format
        const menuData = {
          categories: menu.categories.map(c => c.name),
          items: menu.items.map(item => {
            const category = menu.categories.find(c => c.id === item.categoryId);
            return {
              ...item,
              category: category ? category.name : 'Uncategorized'
            };
          })
        };

        setData({
          brand,
          about,
          menu: menuData,
          gallery,
          contact
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
