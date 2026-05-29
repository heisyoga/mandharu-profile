import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  Info, 
  UtensilsCrossed, 
  Images, 
  Phone, 
  Users, 
  LogOut, 
  Menu as MenuIcon, 
  X,
  Bell,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sidebarItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
  { name: 'Hero Section', icon: ImageIcon, path: '/admin/hero' },
  { name: 'About Us', icon: Info, path: '/admin/about' },
  { name: 'Menu & Services', icon: UtensilsCrossed, path: '/admin/menu' },
  { name: 'Gallery', icon: Images, path: '/admin/gallery' },
  { name: 'Contact Info', icon: Phone, path: '/admin/contact' },
  { name: 'User Management', icon: Users, path: '/admin/users' },
];

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-surface flex text-on-surface font-body-md">
      {/* Sidebar for Desktop */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } hidden md:flex flex-col bg-surface-container border-r border-outline-variant transition-all duration-300 sticky top-0 h-screen`}
      >
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && (
            <span className="font-headline-md text-primary tracking-tight">Mandharu Admin</span>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-surface-variant rounded-full transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center p-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' 
                    : 'hover:bg-surface-variant text-on-surface-variant'
                }`}
              >
                <item.icon size={20} className={isSidebarOpen ? 'mr-3' : 'mx-auto'} />
                {isSidebarOpen && <span className="font-label-lg">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-outline-variant">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full p-3 text-error hover:bg-error/10 rounded-xl transition-colors"
          >
            <LogOut size={20} className={isSidebarOpen ? 'mr-3' : 'mx-auto'} />
            {isSidebarOpen && <span className="font-label-lg">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* Header */}
        <header className="h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="md:hidden">
             <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <MenuIcon size={24} />
             </button>
          </div>
          <div className="hidden md:block">
            <h2 className="font-headline-md text-on-surface capitalize">
              {sidebarItems.find(item => item.path === location.pathname)?.name || 'Admin'}
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-surface-variant rounded-full relative transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border border-surface"></span>
            </button>
            <div className="flex items-center space-x-3 pl-4 border-l border-outline-variant">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-label-lg leading-none">Super Admin</p>
                <p className="text-xs text-on-surface-variant">admin@mandharu.com</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shadow-inner">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(true)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminLayout;
