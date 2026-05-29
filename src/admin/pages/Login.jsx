import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import logoData from '../../assets/logo.png?w=640&format=webp&as=url';

const logo = typeof logoData === 'string' ? logoData : (logoData.default || logoData);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple Mock Login
    if (email === 'admin@mandharu.com' && password === 'admin123') {
      localStorage.setItem('admin_authenticated', 'true');
      navigate('/admin');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6 relative overflow-hidden">
      <div className="grain-overlay opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-3xl" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-surface-container-low border border-outline-variant p-8 md:p-10 rounded-3xl shadow-2xl relative z-10"
      >
        <div className="flex flex-col items-center mb-10 text-center">
          <img src={logo} alt="Mandharu" className="h-16 mb-6" />
          <h1 className="font-headline-lg text-primary tracking-tight mb-2">Admin Portal</h1>
          <p className="text-on-surface-variant font-body-md">Sign in to manage your company profile</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-label-lg px-1 text-on-surface-variant">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={20} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface-container border border-outline-variant rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                placeholder="admin@mandharu.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-label-lg px-1 text-on-surface-variant">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={20} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-surface-container border border-outline-variant rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-error text-sm font-label-sm bg-error/10 p-3 rounded-xl border border-error/20"
            >
              {error}
            </motion.p>
          )}

          <button 
            type="submit"
            className="w-full bg-primary text-on-primary py-4 rounded-2xl font-label-lg flex items-center justify-center space-x-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
          >
            <span>Sign In</span>
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-outline-variant text-center">
          <p className="text-sm text-on-surface-variant">
            Forgot password? <a href="#" className="text-primary hover:underline font-label-lg">Contact System Admin</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
