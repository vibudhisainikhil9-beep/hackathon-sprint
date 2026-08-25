import React from 'react';
import useFullscreen from '../hooks/useFullscreen';

export default function Header({ totalTasks = 0, completedTasks = 0, onResetClick }) {
  const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  return (
    <header className="py-6 px-6 relative max-w-7xl mx-auto flex flex-col items-center justify-center">
      {/* Top Right Controls: Fullscreen + Reset Gear */}
      <div className="absolute right-4 sm:right-6 top-6 flex items-center gap-2">
        <button
          onClick={toggleFullscreen}
          className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-slate-700 hover:text-slate-900 hover:bg-white/50 transition-all shadow-xs text-xs font-bold flex items-center gap-1.5"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          <span>{isFullscreen ? '📉' : '⛶'}</span>
          <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
        </button>

        <button
          onClick={onResetClick}
          className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-slate-600 hover:text-slate-900 hover:bg-white/50 transition-all shadow-xs"
          title="Reset All Progress"
        >
          ⚙️
        </button>
      </div>

      {/* TOP LINE: NIKHIL'S HUSTLE 🚀 SINGLE ALONE IN TOP CENTER */}
      <div className="mb-2 animate-fade-in">
        <span className="text-sm md:text-base font-black uppercase tracking-[0.25em] text-amber-600 bg-amber-500/15 border border-amber-500/30 px-5 py-1 rounded-full backdrop-blur-md">
          NIKHIL'S HUSTLE 🚀
        </span>
      </div>

      {/* SECOND LINE: "21-Day Sprint Roadmap" on Left, Progress "0/63 (0%)" on Right */}
      <div className="w-full max-w-4xl flex items-center justify-between mt-1 px-4">
        <h1 className="text-lg md:text-xl font-black text-slate-900 drop-shadow-xs">
          21-Day Sprint Roadmap
        </h1>

        <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/30">
          <div className="w-28 sm:w-40 bg-slate-200/70 rounded-full h-2 overflow-hidden border border-white/40">
            <div
              className="bg-gradient-to-r from-amber-500 to-amber-400 h-2 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-xs font-bold font-mono text-slate-800">
            {completedTasks}/{totalTasks} ({percentage}%)
          </span>
        </div>
      </div>
    </header>
  );
}
