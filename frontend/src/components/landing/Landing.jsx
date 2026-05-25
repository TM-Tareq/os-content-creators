import React from 'react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col font-sans">
      {/* Navigation */}
      <nav className="w-full px-8 py-6 flex justify-between items-center border-b border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          CreatorOS
        </div>
        <div className="flex gap-4">
          <a href="/login" className="px-6 py-2 rounded-lg font-medium text-slate-300 hover:text-white transition-colors">
            Log In
          </a>
          <a href="/register" className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.4)]">
            Sign Up Free
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-20 md:mt-0">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-400 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          The Ultimate Infrastructure for Content Creators
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl text-white">
          Manage, Automate, and Scale Your <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Content Ecosystem</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12">
          Stop juggling disconnected tools. CreatorOS brings your analytics, multi-platform publishing, AI workflows, and team collaboration into one powerful platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="/register" className="px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1 transition-all">
            Get Started Now
          </a>
          <a href="#features" className="px-8 py-4 rounded-xl font-bold text-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors">
            View Features
          </a>
        </div>
      </main>

      {/* Feature Grid */}
      <section id="features" className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 text-2xl">
            🚀
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Multi-Platform Sync</h3>
          <p className="text-slate-400">Publish, schedule, and optimize content for YouTube, TikTok, X, and Instagram from one dashboard.</p>
        </div>
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 text-2xl">
            🤖
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">AI Workflows</h3>
          <p className="text-slate-400">Generate hooks, optimize thumbnails, and adapt scripts into multi-platform formats instantly using our fine-tuned AI.</p>
        </div>
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 text-2xl">
            📊
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Deep Analytics</h3>
          <p className="text-slate-400">Go beyond basic dashboards. Predict engagement, track revenue, and analyze cross-platform audience retention.</p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
