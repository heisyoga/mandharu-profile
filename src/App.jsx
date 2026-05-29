import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './admin/pages/Login';
import Dashboard from './admin/pages/Dashboard';
import HeroSettings from './admin/pages/HeroSettings';
import AboutSettings from './admin/pages/AboutSettings';
import MenuSettings from './admin/pages/MenuSettings';
import GallerySettings from './admin/pages/GallerySettings';
import ContactSettings from './admin/pages/ContactSettings';
import UserManagement from './admin/pages/UserManagement'; // Import UserManagement
import AdminLayout from './admin/components/AdminLayout';
import { AdminDataProvider } from './admin/context/AdminDataContext'; // Import AdminDataProvider
import './App.css';

// Simple Auth Guard (Mock)
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('admin_authenticated') === 'true';
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin/login" element={<Login />} />
      
      {/* Admin Protected Routes */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <AdminDataProvider> {/* Wrap with AdminDataProvider */}
              <AdminLayout />
            </AdminDataProvider>
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="hero" element={<HeroSettings />} />
        <Route path="about" element={<AboutSettings />} />
        <Route path="menu" element={<MenuSettings />} />
        <Route path="gallery" element={<GallerySettings />} />
        <Route path="contact" element={<ContactSettings />} />
        <Route path="users" element={<UserManagement />} /> {/* Add UserManagement Route */}
      </Route>
      
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
