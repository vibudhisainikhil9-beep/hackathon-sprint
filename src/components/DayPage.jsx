import React, { useState, useEffect } from 'react';
import useFullscreen from '../hooks/useFullscreen';
import TaskChecklist from './TaskChecklist';
import KeywordsPanel from './KeywordsPanel';
import PendingRemarks from './PendingRemarks';
import UserNotes from './UserNotes';

const QUOTES = [
  "PREPARE TODAY. SAVE LIVES TOMORROW.",
  "OFFLINE FIRST. ALWAYS READY.",
  "CODE THE SOLUTION. BE THE RESCUE.",
  "FAST PROTOTYPING. REAL IMPACT.",
  "BUILD FOR DISASTER. SHIP FOR RELIEF."
];

const formatTime = (totalSeconds) => {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

export default function DayPage({
  day,
  dayNumber,
  checked = [],
  onToggle,
  pendingTasks = [],
  noteText = '',
  onNoteChange,
  onBack,
  totalDays = 5,
  grindMode,
  grindTime,
  onGrindToggle,
  onImDone,
  isCompleted
}) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(true);
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  // Cycle quotes when grindMode is active
  useEffect(() => {
    if (!grindMode) return;
    const interval = setInterval(() => {
      setQuoteVisible(false);
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
        setQuoteVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, [grindMode]);

  if (!day) return null;

  return (
    <div className={`min-h-screen pb-24 transition-all duration-700 ease-in-out ${grindMode ? 'grind-mode' : 'light-mode'}`}>
      {/* FLOATING HEADER */}
      <header className="px-6 py-4 transition-colors duration-500 max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">

          {/* LEFT: Back to Calendar & Fullscreen Button */}
          <div className="flex-1 flex items-center justify-start gap-2">
            <button
              onClick={onBack}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 border shadow-xs backdrop-blur-md ${
                grindMode
                  ? 'bg-black/20 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                  : 'bg-white/20 border-white/30 text-slate-700 hover:bg-white/40'
              }`}
            >
              ← Back to Calendar
            </button>

            <button
              onClick={toggleFullscreen}
              className={`p-2 rounded-xl text-xs font-bold transition-all duration-200 border shadow-xs backdrop-blur-md flex items-center gap-1.5 ${
                grindMode
                  ? 'bg-black/20 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                  : 'bg-white/20 border-white/30 text-slate-700 hover:bg-white/40'
              }`}
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              <span>{isFullscreen ? '📉' : '⛶'}</span>
              <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
            </button>
          </div>

          {/* CENTER: DISASTER (AFTER EFFECT) SKILLS NEEDED 🚀 */}
          <div className="flex-2 text-center flex flex-col items-center">
            <span className="text-[11px] font-black uppercase tracking-widest text-amber-500 bg-amber-500/15 border border-amber-500/25 px-3.5 py-0.5 rounded-full backdrop-blur-md">
              DISASTER (AFTER EFFECT) SKILLS NEEDED 🚀
            </span>
            <h1 className={`text-base md:text-lg font-black mt-1 ${grindMode ? 'text-white' : 'text-slate-900'}`}>
              DAY {String(dayNumber).padStart(2, '0')} OF {totalDays}: {day.title}
            </h1>
          </div>

          {/* RIGHT: Grind Button & Stopwatch Timer */}
          <div className="flex-1 flex items-center justify-end gap-3">
            <div className="flex flex-col items-end">
              <div className={`font-mono text-xl font-black transition-all duration-300 ${
                grindMode ? 'text-amber-400 text-glow-amber' : 'text-slate-700'
              }`}>
                {formatTime(grindTime)}
              </div>
              <div className={`text-[8px] tracking-widest font-bold uppercase ${grindMode ? 'text-amber-500/70' : 'text-slate-500'}`}>
                GRIND TIME
              </div>
            </div>

            <button
              onClick={onGrindToggle}
              className={`px-4 py-2 rounded-xl font-extrabold text-xs tracking-wider transition-all duration-300 flex items-center gap-2 shadow-md ${
                grindMode
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-amber-500/30 hover:scale-105 active:scale-95'
                  : 'bg-slate-900 text-white hover:bg-slate-800 hover:scale-105 active:scale-95 border border-slate-700'
              }`}
            >
              {grindMode ? '⏸️ PAUSE' : '⚡ GRIND NOW'}
            </button>
          </div>
        </div>

        {/* Motivational Banner in Grind Mode */}
        {grindMode && (
          <div className="text-center pt-2 mt-2">
            <p className={`text-[11px] font-bold tracking-[0.25em] text-amber-400/80 transition-opacity duration-400 ${
              quoteVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              🚨 {QUOTES[quoteIndex]} 🚨
            </p>
          </div>
        )}
      </header>

      {/* Main Content: 60% / 20% / 20% Ultra-Light Glass Grid Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {day.goal && (
          <div className={`p-4 rounded-2xl mb-6 border backdrop-blur-md ${
            grindMode
              ? 'bg-black/20 border-amber-500/20 text-amber-200'
              : 'bg-white/15 border-white/30 text-slate-800'
          }`}>
            <p className="text-xs leading-relaxed font-medium">
              🎯 <span className="font-bold">Target Goal:</span> {day.goal}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start">
          {/* LEFT 60%: Today's Tasks & YouTube Keywords */}
          <div className="lg:col-span-6 space-y-6">
            <div className={`p-5 rounded-2xl border backdrop-blur-md ${
              grindMode
                ? 'bg-black/20 border-white/10'
                : 'bg-white/15 border-white/30'
            }`}>
              <TaskChecklist
                tasks={day.tasks || []}
                checked={checked}
                onToggle={onToggle}
                grindMode={grindMode}
              />
            </div>

            {day.keywords && day.keywords.length > 0 && (
              <KeywordsPanel keywords={day.keywords} grindMode={grindMode} />
            )}
          </div>

          {/* MIDDLE 20%: Personal Notes */}
          <div className="lg:col-span-2">
            <UserNotes
              dayNumber={dayNumber}
              noteText={noteText}
              onNoteChange={onNoteChange}
              grindMode={grindMode}
            />
          </div>

          {/* RIGHT 20%: Remarks from Past Days */}
          <div className="lg:col-span-2">
            <div className={`p-4 rounded-2xl border backdrop-blur-md h-full ${
              grindMode
                ? 'bg-black/20 border-white/10'
                : 'bg-white/15 border-white/30'
            }`}>
              {pendingTasks && pendingTasks.length > 0 ? (
                <PendingRemarks pendingTasks={pendingTasks} grindMode={grindMode} />
              ) : (
                <div className="text-center py-8">
                  <span className="text-2xl block mb-2">✨</span>
                  <p className={`text-xs font-semibold ${grindMode ? 'text-gray-400' : 'text-slate-600'}`}>
                    No Pending Carryover
                  </p>
                  <p className="text-[10px] opacity-60 mt-1">
                    All previous completed days are 100% done!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Floating "I'M DONE FOR TODAY" Button */}
      <button
        onClick={onImDone}
        className="
          fixed bottom-6 right-6 z-50
          px-6 py-3.5 rounded-2xl
          font-black text-xs tracking-widest uppercase
          transition-all duration-300 ease-out
          animate-slide-up
          bg-gradient-to-r from-emerald-500 to-emerald-400
          text-white
          shadow-xl shadow-emerald-500/30
          hover:shadow-2xl hover:shadow-emerald-500/40
          hover:scale-105 hover:-translate-y-1
          active:scale-95
          border border-emerald-300/40
          flex items-center gap-2
        "
      >
        <span>🏁</span> I'M DONE FOR TODAY
      </button>
    </div>
  );
}
