import React, { useEffect } from 'react';
import TaskChecklist from './TaskChecklist';
import KeywordsPanel from './KeywordsPanel';
import PendingRemarks from './PendingRemarks';

export default function DayModal({
  day,
  dayNumber,
  checked = [],
  onToggle,
  pendingTasks = [],
  onClose,
  onPrev,
  onNext,
  totalDays = 21,
  grindMode,
  completedDays = [],
}) {
  // ESC and Arrow key listeners
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  if (!day) return null;

  const isDayCompleted = completedDays.includes(dayNumber) || (checked.length > 0 && checked.every(Boolean));
  const doneCount = checked.filter(Boolean).length;
  const totalTasks = day.tasks ? day.tasks.length : 0;

  const overlayClasses = grindMode ? 'bg-black/70 backdrop-blur-sm' : 'bg-slate-900/40 backdrop-blur-sm';
  const modalClasses = grindMode
    ? 'bg-slate-900/90 backdrop-blur-2xl border border-white/10 text-slate-100 shadow-2xl shadow-black/80'
    : 'bg-white/90 backdrop-blur-2xl border border-white/60 text-slate-800 shadow-2xl shadow-slate-400/30';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${overlayClasses}`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col rounded-3xl animate-scale-in ${modalClasses}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-6 border-b flex justify-between items-start ${grindMode ? 'border-white/10' : 'border-gray-200/60'}`}>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                grindMode ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-amber-100 text-amber-800'
              }`}>
                DAY {String(dayNumber).padStart(2, '0')} OF {totalDays}
              </span>
              {isDayCompleted && (
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ✓ Completed
                </span>
              )}
            </div>
            <h2 className={`text-2xl font-black mt-2 ${grindMode ? 'text-white' : 'text-slate-900'}`}>{day.title}</h2>
            {day.goal && (
              <p className={`text-xs mt-1 leading-relaxed ${grindMode ? 'text-gray-400' : 'text-slate-600'}`}>
                🎯 <span className="font-medium">{day.goal}</span>
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${
              grindMode ? 'text-slate-400 hover:bg-white/10 hover:text-white' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-800'
            }`}
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {/* Remarks from Previous Days */}
          <PendingRemarks pendingTasks={pendingTasks} grindMode={grindMode} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left 2 Cols: Checklist */}
            <div className="md:col-span-2">
              <TaskChecklist
                tasks={day.tasks || []}
                checked={checked}
                onToggle={onToggle}
                grindMode={grindMode}
              />
            </div>

            {/* Right 1 Col: Keywords */}
            <div className="md:col-span-1">
              <KeywordsPanel keywords={day.keywords || []} grindMode={grindMode} />
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className={`p-4 border-t flex justify-between items-center ${grindMode ? 'border-white/10 bg-black/20' : 'border-gray-200/60 bg-slate-50/50'}`}>
          <button
            onClick={onPrev}
            disabled={!onPrev}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              !onPrev
                ? 'opacity-30 cursor-not-allowed'
                : (grindMode ? 'text-slate-300 hover:bg-white/10' : 'text-slate-700 hover:bg-slate-200/60')
            }`}
          >
            ← Previous Day
          </button>

          <span className="text-xs text-gray-400 font-mono">
            {doneCount} / {totalTasks} Tasks
          </span>

          <button
            onClick={onNext}
            disabled={!onNext}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              !onNext
                ? 'opacity-30 cursor-not-allowed'
                : (grindMode ? 'text-amber-400 hover:bg-amber-500/20' : 'text-slate-800 hover:bg-slate-200/60')
            }`}
          >
            Next Day →
          </button>
        </div>
      </div>
    </div>
  );
}
