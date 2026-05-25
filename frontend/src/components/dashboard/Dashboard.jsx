import React from 'react';


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-6">
      {/* Top Navbar */}
      <nav className="flex justify-between items-center mb-10 bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          CreatorOS
        </div>
        <div className="flex gap-4">
          <a href="/analytics" className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all">Analytics</a>
          <a href="/create-post" className="px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 cursor-pointer hover:bg-blue-600/30 transition-all">
            + New Post
          </a>
          <a href="/profile" className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 cursor-pointer border border-slate-700 block"></a>
        </div>
      </nav>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Quick Stats & AI Actions */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-semibold mb-4">Welcome back, Creator 👋</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <p className="text-sm text-slate-400">Total Reach (30d)</p>
              <h3 className="text-3xl font-bold mt-2">2.4M</h3>
              <p className="text-sm text-green-400 mt-2 flex items-center">↑ 12.5% vs last month</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <p className="text-sm text-slate-400">Audience Growth</p>
              <h3 className="text-3xl font-bold mt-2">+12.4k</h3>
              <p className="text-sm text-green-400 mt-2 flex items-center">↑ 4.2% vs last month</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <p className="text-sm text-slate-400">Est. Revenue</p>
              <h3 className="text-3xl font-bold mt-2">$4,250</h3>
              <p className="text-sm text-green-400 mt-2 flex items-center">↑ 8.1% vs last month</p>
            </div>
          </div>

          {/* AI Workflow Panel */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-purple-900/20 border border-indigo-500/20 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>🤖</span> AI Workflow Assistant
            </h2>
            <div className="flex gap-4">
              <a href="/ai-tools?tool=hooks" className="flex-1 py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all text-sm font-medium text-center">
                Generate Video Hooks
              </a>
              <a href="/ai-tools?tool=thumbnail" className="flex-1 py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all text-sm font-medium text-center">
                Optimize Thumbnail
              </a>
              <a href="/ai-tools?tool=repurpose" className="flex-1 py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all text-sm font-medium text-center">
                Repurpose to Shorts
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Upcoming & Drafts */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Content Pipeline</h2>
              <a href="/pipeline" className="text-sm text-blue-400 cursor-pointer hover:underline">View All</a>
            </div>
            
            <div className="space-y-4">
              {/* Pipeline Item 1 */}
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-md">Draft</span>
                  <span className="text-xs text-slate-400">YT • TikTok</span>
                </div>
                <h4 className="font-medium">"My 2026 Desk Setup"</h4>
                <p className="text-xs text-slate-400 mt-2">Needs thumbnail approval</p>
              </div>

              {/* Pipeline Item 2 */}
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-green-500/20 text-green-400 rounded-md">Scheduled</span>
                  <span className="text-xs text-slate-400">Instagram • X</span>
                </div>
                <h4 className="font-medium">"5 Tips for Hackathons"</h4>
                <p className="text-xs text-slate-400 mt-2">Publishes Tomorrow, 9:00 AM</p>
              </div>
              
              {/* Pipeline Item 3 */}
              <a href="/calendar" className="p-4 rounded-xl border border-dashed border-slate-700 flex justify-center items-center h-24 cursor-pointer hover:bg-slate-800/30 transition-colors block text-center">
                <span className="text-slate-400 text-sm font-medium inline-block mt-4">+ Add to Calendar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
