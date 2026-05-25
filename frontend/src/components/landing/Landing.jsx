import React from 'react';

const features = [
  {
    icon: '⚡',
    color: 'cyan',
    title: 'Multi-Platform Publishing',
    desc: 'Publish to Instagram, LinkedIn, X, TikTok, and YouTube from one place. Platform-specific optimization built in.',
  },
  {
    icon: '🤖',
    color: 'violet',
    title: 'AI Content Repurposing',
    desc: 'Turn one piece of content into 5 platform-ready variants instantly. Captions, hashtags, and tone — all adapted automatically.',
  },
  {
    icon: '✅',
    color: 'emerald',
    title: 'Team Approval Workflow',
    desc: 'EDITOR → REVIEWER → OWNER pipeline with real-time WebSocket notifications. No more email chains.',
  },
  {
    icon: '📅',
    color: 'amber',
    title: 'Smart Scheduling',
    desc: 'Queue your content with automatic retry logic and state tracking — QUEUED, PUBLISHING, PUBLISHED, FAILED.',
  },
  {
    icon: '📊',
    color: 'rose',
    title: 'Analytics Engine',
    desc: 'Rule-based engagement scoring, virality prediction, and cross-platform performance tracking.',
  },
  {
    icon: '🔐',
    color: 'indigo',
    title: 'Role-Based Access',
    desc: 'Granular RBAC with JWT auth. OWNER, EDITOR, and REVIEWER roles with permission-gated actions.',
  },
];

const colorMap = {
  cyan:   { bg: 'bg-cyan-500/10',   text: 'text-cyan-400',   border: 'hover:border-cyan-500/40' },
  violet: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'hover:border-violet-500/40' },
  emerald:{ bg: 'bg-emerald-500/10',text: 'text-emerald-400',border: 'hover:border-emerald-500/40' },
  amber:  { bg: 'bg-amber-500/10',  text: 'text-amber-400',  border: 'hover:border-amber-500/40' },
  rose:   { bg: 'bg-rose-500/10',   text: 'text-rose-400',   border: 'hover:border-rose-500/40' },
  indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'hover:border-indigo-500/40' },
};

const stats = [
  { value: '6+', label: 'Platforms Supported' },
  { value: 'Real-time', label: 'WebSocket Notifications' },
  { value: 'AI-powered', label: 'Content Repurposing' },
  { value: 'JWT', label: 'Secure Auth & RBAC' },
];

const Landing = () => (
  <div className="min-h-screen bg-[#080c14] text-white font-sans relative overflow-hidden">
    {/* Global bg blobs */}
    <div className="absolute top-0 left-1/4 w-150 h-150 bg-cyan-500/8 rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute top-1/3 right-0 w-125 h-125 bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-100 h-100 bg-violet-500/6 rounded-full blur-[120px] pointer-events-none" />

    {/* Nav */}
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#080c14]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-black bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">
          CreatorOS
        </span>
        <div className="flex items-center gap-3">
          <a href="/login" className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors font-medium">
            Sign In
          </a>
          <a href="/register" className="px-5 py-2 text-sm font-semibold text-slate-900 bg-linear-to-r from-cyan-400 to-emerald-400 rounded-lg hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-[0_0_16px_rgba(34,211,238,0.3)]">
            Get Started Free
          </a>
        </div>
      </div>
    </nav>

    {/* Hero */}
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center relative">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-8">
        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
        UIU Developers HUB Hackathon 2026
      </div>

      <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 max-w-5xl mx-auto">
        The Operating System
        <br />
        <span className="bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          for Content Creators
        </span>
      </h1>

      <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Stop juggling 10 disconnected tools. CreatorOS unifies your publishing, AI workflows,
        team approvals, and analytics into one powerful platform built for scale.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/register"
          className="px-8 py-4 rounded-xl font-bold text-slate-900 bg-linear-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:-translate-y-0.5 active:scale-[0.98] text-sm"
        >
          Start Building for Free →
        </a>
        <a
          href="#features"
          className="px-8 py-4 rounded-xl font-bold text-white bg-white/4 border border-white/8 hover:bg-white/8 transition-all text-sm"
        >
          Explore Features
        </a>
      </div>

      {/* Stats bar */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
        {stats.map(({ value, label }) => (
          <div key={label} className="bg-[#080c14] px-6 py-5 text-center">
            <div className="text-xl font-black bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">{value}</div>
            <div className="text-xs text-slate-500 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Features */}
    <section id="features" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
          Everything a creator team needs
        </h2>
        <p className="text-slate-500 text-base max-w-xl mx-auto">
          Real architecture. Real workflows. Real engineering — not just a dashboard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon, color, title, desc }) => {
          const c = colorMap[color];
          return (
            <div
              key={title}
              className={`bg-white/3 border border-white/6 ${c.border} rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5 group`}
            >
              <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center text-xl mb-5`}>
                {icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>

    {/* CTA */}
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <div className="bg-linear-to-br from-cyan-500/10 to-emerald-500/10 border border-white/8 rounded-3xl p-12">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Ready to take control of your content?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm">
          Join the platform built for serious creators, agencies, and content teams.
        </p>
        <a
          href="/register"
          className="inline-block px-10 py-4 rounded-xl font-bold text-slate-900 bg-linear-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:-translate-y-0.5 text-sm"
        >
          Create Your Free Account →
        </a>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-600">
      © 2026 CreatorOS · Built for UIU Developers HUB Hackathon
    </footer>
  </div>
);

export default Landing;
