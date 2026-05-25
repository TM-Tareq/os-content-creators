import React from 'react';

const Pipeline = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-6">
      <nav className="flex justify-between items-center mb-10 bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <a href="/dashboard" className="text-slate-400 hover:text-white transition-colors">
            ← Back
          </a>
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Content Pipeline
          </div>
        </div>
        <a href="/create-post" className="px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/30 transition-all">
          + New Post
        </a>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-160px)]">
        
        {/* Ideas Column */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 flex flex-col">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-500"></span> Ideas
          </h3>
          <div className="flex-1 space-y-4 overflow-y-auto">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/50 hover:border-blue-500/30 cursor-pointer transition-colors">
              <h4 className="font-medium">"Tech Trends 2026"</h4>
              <p className="text-xs text-slate-400 mt-2">Needs outline</p>
            </div>
            <div className="p-4 rounded-xl border border-dashed border-slate-700 flex justify-center items-center cursor-pointer hover:bg-slate-800/30 transition-colors">
              <span className="text-slate-400 text-sm font-medium">+ Add Idea</span>
            </div>
          </div>
        </div>

        {/* Drafts Column */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 flex flex-col">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span> Drafts
          </h3>
          <div className="flex-1 space-y-4 overflow-y-auto">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/50 hover:border-blue-500/30 cursor-pointer transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-slate-400">YT • TikTok</span>
              </div>
              <h4 className="font-medium">"My 2026 Desk Setup"</h4>
              <p className="text-xs text-yellow-400 mt-2 flex items-center gap-1">In Progress (Editing)</p>
            </div>
          </div>
        </div>

        {/* Scheduled Column */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 flex flex-col">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span> Scheduled
          </h3>
          <div className="flex-1 space-y-4 overflow-y-auto">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/50 hover:border-blue-500/30 cursor-pointer transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-slate-400">Instagram • X</span>
              </div>
              <h4 className="font-medium">"5 Tips for Hackathons"</h4>
              <p className="text-xs text-green-400 mt-2 flex items-center gap-1">Publishes Tomorrow, 9:00 AM</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pipeline;
