import React from 'react';


const Analytics = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-6">
      {/* Top Navbar */}
      <nav className="flex justify-between items-center mb-10 bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <a href="/dashboard" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 hover:opacity-80 transition-opacity">
            CreatorOS
          </a>
          <span className="text-slate-600">/</span>
          <span className="text-lg font-medium text-slate-300">Analytics Engine</span>
        </div>
        <div className="flex gap-4">
          <select className="bg-slate-800 border border-slate-700 text-sm rounded-lg px-4 py-2 outline-none focus:border-blue-500 transition-colors">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>This Year</option>
          </select>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Col: Cross-Platform Performance */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Main Chart Area */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Cross-Platform Engagement</h2>
              <div className="flex gap-3 text-sm">
                <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-red-500"></div> YouTube</span>
                <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-cyan-400"></div> TikTok</span>
                <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-pink-500"></div> Instagram</span>
              </div>
            </div>
            
            {/* Mock Chart Visualization */}
            <div className="h-64 flex items-end justify-between gap-2 px-2 border-b border-slate-800 pb-2 relative">
              {/* Y-Axis lines */}
              <div className="absolute w-full h-full flex flex-col justify-between top-0 left-0 pointer-events-none opacity-20">
                <div className="border-t border-slate-600"></div>
                <div className="border-t border-slate-600"></div>
                <div className="border-t border-slate-600"></div>
                <div className="border-t border-slate-600"></div>
              </div>
              
              {/* Bars */}
              {[40, 70, 45, 90, 65, 80, 50, 100, 75, 85, 60, 95].map((height, i) => (
                <div key={i} className="w-full relative group">
                  <div 
                    className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-500 hover:opacity-80 cursor-pointer ${i % 3 === 0 ? 'bg-red-500' : i % 3 === 1 ? 'bg-cyan-400' : 'bg-pink-500'}`}
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-slate-500 mt-3 px-2">
              <span>May 1</span>
              <span>May 8</span>
              <span>May 15</span>
              <span>May 22</span>
              <span>May 30</span>
            </div>
          </div>

          {/* Deep Analytics Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-slate-300 mb-4">Audience Retention</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Intro (0:00 - 0:15)</span>
                    <span className="text-green-400">78%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[78%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Mid-roll (2:00 - 3:00)</span>
                    <span className="text-yellow-400">45%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 w-[45%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Outro / CTA</span>
                    <span className="text-red-400">22%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-[22%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-slate-300 mb-4">Virality Scoring</h3>
              <div className="flex items-center justify-center h-full pb-8">
                <div className="relative w-32 h-32 rounded-full border-8 border-slate-800 flex items-center justify-center">
                  <div className="absolute w-full h-full rounded-full border-8 border-blue-500 border-t-transparent border-r-transparent transform -rotate-45"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">84</div>
                    <div className="text-xs text-slate-400">/100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Col: AI Insights */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-900/20 to-slate-900/60 border border-blue-500/20 backdrop-blur-sm h-full">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-blue-400">✨</span> AI Insights
            </h2>

            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <h4 className="text-sm font-semibold text-blue-300 mb-2">Best Posting Time Prediction</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Your audience is most active on <strong className="text-white">Tuesdays at 6:00 PM EST</strong>. Posting at this time could yield a 15% higher initial burst in engagement.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <h4 className="text-sm font-semibold text-purple-300 mb-2">Content Performance Clustering</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Videos under <strong className="text-white">8 minutes</strong> with high energy intros are outperforming your longer-form educational content by 2.4x across TikTok and Reels.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <h4 className="text-sm font-semibold text-green-300 mb-2">Trend Detection</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  The hashtag <strong className="text-white">#DeskSetup2026</strong> is gaining rapid momentum in your niche. Consider prioritizing your workspace tour video.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Analytics;
