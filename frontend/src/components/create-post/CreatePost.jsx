import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [platform, setPlatform] = useState('youtube');

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-6">
      <nav className="flex items-center mb-10 bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
        <a href="/dashboard" className="text-slate-400 hover:text-white transition-colors mr-4">
          ← Back to Dashboard
        </a>
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          New Post
        </div>
      </nav>

      <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Platform</label>
            <select 
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-700 bg-slate-800 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            >
              <option value="youtube">YouTube</option>
              <option value="tiktok">TikTok</option>
              <option value="instagram">Instagram</option>
              <option value="twitter">X (Twitter)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Post Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="E.g. My 2026 Desk Setup"
              className="w-full p-3 rounded-xl border border-slate-700 bg-slate-800 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Content / Description</label>
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Draft your post content here..."
              rows="6"
              className="w-full p-3 rounded-xl border border-slate-700 bg-slate-800 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex gap-4 pt-4 border-t border-slate-800">
            <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
              Schedule Post
            </button>
            <button className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors border border-slate-700">
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
