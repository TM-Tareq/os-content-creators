import React, { useState, useEffect } from 'react';

const AITools = () => {
  const [activeTool, setActiveTool] = useState('hooks');

  useEffect(() => {
    // Read the '?tool=' query parameter if present
    const params = new URLSearchParams(window.location.search);
    const tool = params.get('tool');
    if (tool && ['hooks', 'thumbnail', 'repurpose'].includes(tool)) {
      setActiveTool(tool);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-6">
      <nav className="flex items-center mb-10 bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
        <a href="/dashboard" className="text-slate-400 hover:text-white transition-colors mr-4">
          ← Back to Dashboard
        </a>
        <div className="text-2xl font-bold flex items-center gap-2">
          <span>🤖</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            AI Workflow Assistant
          </span>
        </div>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Sidebar */}
        <div className="space-y-2">
          <button 
            onClick={() => setActiveTool('hooks')}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeTool === 'hooks' ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            Generate Video Hooks
          </button>
          <button 
            onClick={() => setActiveTool('thumbnail')}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeTool === 'thumbnail' ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            Optimize Thumbnail
          </button>
          <button 
            onClick={() => setActiveTool('repurpose')}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeTool === 'repurpose' ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            Repurpose to Shorts
          </button>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-3 bg-slate-900/60 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm min-h-[500px]">
          
          {activeTool === 'hooks' && (
            <div className="animate-in fade-in zoom-in-95 duration-300">
              <h2 className="text-2xl font-semibold mb-2">Generate Video Hooks</h2>
              <p className="text-slate-400 mb-6">Enter your video topic and let AI craft engaging hooks to retain viewers.</p>
              
              <div className="space-y-4">
                <textarea 
                  className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-indigo-500 transition-colors"
                  placeholder="E.g., I built an AI agent to write my code..."
                  rows="4"
                ></textarea>
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 font-medium transition-all shadow-lg shadow-indigo-500/20 text-white">
                  Generate Hooks ✨
                </button>
              </div>
            </div>
          )}

          {activeTool === 'thumbnail' && (
            <div className="animate-in fade-in zoom-in-95 duration-300">
              <h2 className="text-2xl font-semibold mb-2">Thumbnail Optimizer</h2>
              <p className="text-slate-400 mb-6">Upload your thumbnail for AI feedback on contrast, clickability, and focus points.</p>
              
              <div className="border-2 border-dashed border-slate-700 rounded-2xl p-12 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-800/30 transition-colors cursor-pointer">
                <span className="text-4xl mb-4">🖼️</span>
                <p>Click to upload or drag and drop</p>
                <p className="text-xs mt-2 text-slate-500">PNG, JPG up to 10MB</p>
              </div>
            </div>
          )}

          {activeTool === 'repurpose' && (
            <div className="animate-in fade-in zoom-in-95 duration-300">
              <h2 className="text-2xl font-semibold mb-2">Repurpose to Shorts</h2>
              <p className="text-slate-400 mb-6">Paste a link to your long-form video to automatically generate engaging 60-second clips.</p>
              
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-indigo-500 transition-colors"
                />
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 font-medium transition-all shadow-lg shadow-indigo-500/20 text-white">
                  Extract Clips ✂️
                </button>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default AITools;
