import React from 'react';

const Calendar = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans p-6">
      <nav className="flex items-center mb-10 bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
        <a href="/dashboard" className="text-slate-400 hover:text-white transition-colors mr-4">
          ← Back to Dashboard
        </a>
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Content Calendar
        </div>
      </nav>

      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">May 2026</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">←</button>
            <button className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors font-medium">Today</button>
            <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">→</button>
          </div>
        </div>

        {/* Dummy Calendar Grid */}
        <div className="grid grid-cols-7 gap-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-sm font-medium text-slate-400 pb-2 border-b border-slate-800">
              {day}
            </div>
          ))}
          
          {/* Empty slots for previous month */}
          {[...Array(5)].map((_, i) => (
             <div key={`empty-${i}`} className="h-32 rounded-xl bg-slate-900/20 border border-slate-800/30 p-2 opacity-30"></div>
          ))}

          {/* Days */}
          {[...Array(31)].map((_, i) => {
            const dayNum = i + 1;
            const hasPost = dayNum === 15 || dayNum === 22;
            
            return (
              <div key={dayNum} className={`h-32 rounded-xl p-2 transition-colors cursor-pointer border ${hasPost ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/30'}`}>
                <span className={`text-sm ${dayNum === 26 ? 'bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center' : 'text-slate-400'}`}>
                  {dayNum}
                </span>
                
                {hasPost && (
                  <div className="mt-2 text-xs p-1.5 rounded bg-green-500/20 text-green-400 truncate border border-green-500/20">
                    5 Tips for H...
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
