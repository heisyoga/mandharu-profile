import React, { useState, useEffect } from 'react';
import { useAdminData } from '../../admin/context/AdminDataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Loader2, XCircle, PlusCircle, User, Mail, Shield, Trash2 } from 'lucide-react';

const UserManagement = () => {
  const { adminData, loading, error, updateAdminData } = useAdminData();
  const [users, setUsers] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'Editor', // Default role
  });

  const roles = ['Super Admin', 'Editor', 'Viewer'];

  useEffect(() => {
    if (adminData && adminData.users) {
      setUsers(adminData.users);
    }
  }, [adminData]);

  const handleUserChange = (index, field, value) => {
    const newUsers = [...users];
    newUsers[index] = { ...newUsers[index], [field]: value };
    setUsers(newUsers);
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const addUser = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      setUsers(prev => [...prev, { id: Date.now().toString(), ...newUser }]);
      setNewUser({ name: '', email: '', role: 'Editor' }); // Reset form
    } else {
      alert("Please fill in name and email for the new user.");
    }
  };

  const removeUser = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveError(null);
    setSaveSuccess(false);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      updateAdminData('users', users);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      setSaveError('Failed to save changes.');
      console.error("Error saving user settings:", err);
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) return <div className="text-on-surface-variant">Loading...</div>;
  if (error) return <div className="text-error">Error: {error}</div>;

  return (
    <div className="space-y-8">
      <h1 className="font-headline-lg text-primary tracking-tight">User Management</h1>
      <p className="text-on-surface-variant font-body-md mt-1">Manage admin users and their roles/permissions.</p>

      <form onSubmit={handleSubmit} className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant shadow-lg space-y-8">
        {/* Add New User Section */}
        <div className="space-y-4 bg-surface-container border border-outline-variant rounded-3xl p-6">
          <h2 className="font-headline-md text-on-surface">Add New User</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="new-user-name" className="font-label-lg text-on-surface-variant block">Name</label>
              <input 
                type="text" 
                id="new-user-name" 
                name="name"
                value={newUser.name}
                onChange={handleNewUserChange}
                className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="new-user-email" className="font-label-lg text-on-surface-variant block">Email</label>
              <input 
                type="email" 
                id="new-user-email" 
                name="email"
                value={newUser.email}
                onChange={handleNewUserChange}
                className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="new-user-role" className="font-label-lg text-on-surface-variant block">Role</label>
              <select
                id="new-user-role"
                name="role"
                value={newUser.role}
                onChange={handleNewUserChange}
                className="w-full bg-surface-container-highest border border-outline-variant rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
              >
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
          </div>
          <button 
            type="button" 
            onClick={addUser}
            className="flex items-center space-x-2 bg-primary-container text-on-primary-container py-2 px-4 rounded-xl font-label-lg hover:bg-primary-container/80 transition-colors mt-4"
          >
            <PlusCircle size={20} />
            <span>Add User</span>
          </button>
        </div>

        {/* Existing Users List */}
        <div className="space-y-4">
          <h2 className="font-headline-md text-on-surface">Existing Users</h2>
          <div className="space-y-3">
            {users.length > 0 ? ( 
              users.map((user, index) => (
                <div key={user.id} className="flex items-center space-x-3 bg-surface-container border border-outline-variant rounded-xl p-3">
                  <User size={20} className="text-on-surface-variant" />
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                    <input 
                      type="text" 
                      value={user.name}
                      onChange={(e) => handleUserChange(index, 'name', e.target.value)}
                      className="w-full bg-transparent focus:outline-none focus:border-primary border-b border-transparent focus:border-b-primary-fixed transition-all font-body-md"
                      required
                    />
                    <input 
                      type="email" 
                      value={user.email}
                      onChange={(e) => handleUserChange(index, 'email', e.target.value)}
                      className="w-full bg-transparent focus:outline-none focus:border-primary border-b border-transparent focus:border-b-primary-fixed transition-all font-body-md"
                      required
                    />
                    <select
                      value={user.role}
                      onChange={(e) => handleUserChange(index, 'role', e.target.value)}
                      className="w-full bg-transparent focus:outline-none focus:border-primary border-b border-transparent focus:border-b-primary-fixed transition-all font-body-md"
                    >
                      {roles.map(role => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => removeUser(user.id)}
                    className="p-1 rounded-full text-error hover:bg-error/10 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-on-surface-variant opacity-70 italic">No users added yet.</p>
            )}
          </div>
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
              <span>User settings saved successfully!</span>
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

export default UserManagement;
