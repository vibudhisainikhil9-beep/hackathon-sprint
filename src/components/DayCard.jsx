import React from 'react';

export default function DayCard({ day, isCompleted, isCurrent, onClick }) {
  const baseClasses = "group aspect-square flex flex-col items-center justify-center rounded-2xl cursor-pointer transition-all duration-300 relative border shadow-sm";

  // Super light glass style so background is clearly visible
  let themeClasses = "bg-white/10 backdrop-blur-xs border-white/30 hover:bg-white/25 hover:border-amber-400/50 hover:scale-105 hover:shadow-md hover:shadow-amber-500/10";

  if (isCompleted) {
    themeClasses = "bg-emerald-500/10 backdrop-blur-xs border-emerald-400/30 shadow-sm";
  }

  if (isCurrent) {
    themeClasses += " ring-2 ring-amber-400/80 shadow-md shadow-amber-400/20";
  }

  return (
    <div
      className={`${baseClasses} ${themeClasses} animate-fade-in`}
      onClick={onClick}
    >
      {/* Day Number */}
      <span className="text-3xl font-black text-slate-900 group-hover:text-amber-600 transition-colors drop-shadow-sm">
        {String(day.day).padStart(2, '0')}
      </span>

      {/* Hover Topic Title */}
      <span className="absolute bottom-3 left-0 right-0 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[11px] font-bold text-center line-clamp-2 text-slate-800 bg-white/80 backdrop-blur-md py-1 rounded-b-xl border-t border-white/60">
        {day.title}
      </span>

      {/* Completed Checkmark */}
      {isCompleted && (
        <div className="absolute top-2.5 right-2.5">
          <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">
            ✓
          </span>
        </div>
      )}

      {/* Current Day indicator dot */}
      {isCurrent && !isCompleted && (
        <div className="absolute top-2.5 right-2.5">
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
          </span>
        </div>
      )}
    </div>
  );
}
