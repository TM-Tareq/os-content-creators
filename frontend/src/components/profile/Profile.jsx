import React from 'react';

const Profile = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-6">
      <nav className="flex items-center mb-10 bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
        <a href="/dashboard" className="text-slate-400 hover:text-white transition-colors mr-4">
          ← Back to Dashboard
        </a>
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Profile Settings
        </div>
      </nav>

      <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
        <div className="flex items-center gap-6 mb-8 border-b border-slate-800 pb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 border-4 border-slate-800 flex items-center justify-center text-3xl font-bold">
            C
          </div>
          <div>
            <h2 className="text-2xl font-bold">Creator User</h2>
            <p className="text-slate-400">creator@example.com</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-800/30 flex justify-between items-center">
            <div>
              <h3 className="font-medium text-lg">Connected Accounts</h3>
              <p className="text-sm text-slate-400">Manage your connected social platforms</p>
            </div>
            <button className="px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-colors">
              Manage
            </button>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-800/30 flex justify-between items-center">
            <div>
              <h3 className="font-medium text-lg">Billing & Subscription</h3>
              <p className="text-sm text-slate-400">Pro Plan - Active</p>
            </div>
            <button className="px-4 py-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors">
              View
            </button>
          </div>
          
          <div className="pt-6">
            <button 
              onClick={handleLogout}
              className="px-6 py-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20 font-medium transition-colors w-full"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
