import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileEdit, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  ArrowUpRight,
  Eye,
  MessageSquare,
  Users
} from 'lucide-react';

const stats = [
  { name: 'Total Visits', value: '1,284', change: '+12.5%', icon: Eye, color: 'text-primary' },
  { name: 'Active Drafts', value: '4', change: '2 pending', icon: Clock, color: 'text-secondary' },
  { name: 'Published', value: '18', change: 'No changes', icon: CheckCircle, color: 'text-tertiary' },
  { name: 'Admin Users', value: '3', change: 'Active now', icon: Users, color: 'text-on-surface' },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="font-headline-lg text-primary tracking-tight">Dashboard Overview</h1>
        <p className="text-on-surface-variant font-body-md mt-1">Welcome back! Here's what's happening with Mandharu Profile.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant hover:border-primary/30 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl bg-surface-container-highest ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded-full flex items-center">
                {stat.change}
                <ArrowUpRight size={12} className="ml-1" />
              </span>
            </div>
            <h3 className="text-on-surface-variant font-label-lg mb-1">{stat.name}</h3>
            <p className="font-display-lg text-4xl tracking-tighter text-on-surface">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-surface-container-low rounded-3xl border border-outline-variant p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline-md">Recent Activity</h2>
            <button className="text-primary font-label-lg hover:underline text-sm">View All</button>
          </div>
          <div className="space-y-6">
            {[
              { user: 'Super Admin', action: 'Published new Gallery items', time: '2 hours ago', icon: CheckCircle, color: 'text-tertiary' },
              { user: 'Editor', action: 'Created draft for "About Us" section', time: '5 hours ago', icon: FileEdit, color: 'text-primary' },
              { user: 'Super Admin', action: 'Updated Contact Information', time: 'Yesterday', icon: Clock, color: 'text-secondary' },
              { user: 'Editor', action: 'Deleted old menu item', time: '2 days ago', icon: FileEdit, color: 'text-error' },
            ].map((activity, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className={`mt-1 p-2 rounded-xl bg-surface-container ${activity.color}`}>
                  <activity.icon size={16} />
                </div>
                <div className="flex-1 border-b border-outline-variant pb-4 last:border-0">
                  <p className="font-label-lg text-on-surface">
                    <span className="text-primary">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-on-surface-variant font-body-md mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-primary text-on-primary rounded-3xl p-8 shadow-xl shadow-primary/20 flex flex-col justify-between">
          <div>
            <h2 className="font-headline-md mb-2">Live Preview</h2>
            <p className="text-on-primary/80 text-sm mb-6">Check how your changes look on the live website before publishing.</p>
            <div className="space-y-3">
              <button className="w-full bg-surface text-on-surface py-3 rounded-xl font-label-lg hover:bg-surface-variant transition-colors flex items-center justify-center space-x-2">
                <Eye size={18} />
                <span>Open Preview</span>
              </button>
              <button className="w-full bg-primary-container text-on-primary-container py-3 rounded-xl font-label-lg hover:bg-primary-container/80 transition-colors flex items-center justify-center space-x-2">
                <TrendingUp size={18} />
                <span>Traffic Stats</span>
              </button>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-on-primary/20">
            <p className="text-xs text-on-primary/60">System Status: <span className="text-on-primary font-label-sm">Operational</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
