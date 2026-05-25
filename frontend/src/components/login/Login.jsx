import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('/api/auth/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      console.log('Login successful, token:', data.token);
      
      // Save the token and redirect to dashboard
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-[#203a43] to-[#2c5364] p-5 font-sans text-white">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:-translate-y-1 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Welcome Back</h2>
        <p className="text-center text-white/70 mb-8 text-sm">Log in to your account</p>
        
        {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-lg text-sm mb-5 text-center">{error}</div>}
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-white/90 tracking-wide">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email"
              className="p-3 rounded-xl border border-white/10 bg-black/20 text-white outline-none focus:border-cyan-400 focus:bg-black/40 focus:ring-4 focus:ring-cyan-400/10 transition-all placeholder-white/30"
              required 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-white/90 tracking-wide">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password"
              className="p-3 rounded-xl border border-white/10 bg-black/20 text-white outline-none focus:border-cyan-400 focus:bg-black/40 focus:ring-4 focus:ring-cyan-400/10 transition-all placeholder-white/30"
              required 
            />
          </div>
          
          <button type="submit" className="mt-2 p-4 rounded-xl font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(34,211,238,0.4)] active:translate-y-0 transition-all">
            Log In
          </button>
        </form>
        
        <div className="text-center mt-6 text-sm text-white/60">
          Don't have an account? <a href="/register" className="text-cyan-400 font-semibold hover:text-emerald-400 transition-colors">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
