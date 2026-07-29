import React from 'react';

export default function UserNotes({ dayNumber, noteText = '', onNoteChange, grindMode }) {
  return (
    <div
      className={`
        h-full rounded-2xl p-4 border flex flex-col transition-all duration-300 backdrop-blur-md
        ${grindMode
          ? 'bg-black/20 border-white/10 text-slate-200'
          : 'bg-white/15 border-white/30 text-slate-800'
        }
      `}
    >
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-400/20">
        <h3 className={`font-bold text-xs tracking-wider uppercase flex items-center gap-2 ${
          grindMode ? 'text-amber-400' : 'text-slate-800'
        }`}>
          <span>📝</span> My Notes & Leftovers
        </h3>
        <span className="text-[10px] opacity-60 font-mono">Auto-saved</span>
      </div>

      <p className={`text-xs mb-3 leading-relaxed ${grindMode ? 'text-gray-400' : 'text-slate-600'}`}>
        Jot down custom ideas, reminders, or items you plan to do later for Day {dayNumber}:
      </p>

      <textarea
        value={noteText}
        onChange={(e) => onNoteChange(dayNumber, e.target.value)}
        placeholder="Type your notes here... (e.g. Finish task 2 after coffee, test API keys tonight)"
        className={`
          w-full flex-1 min-h-[220px] p-3 rounded-xl text-xs font-mono leading-relaxed resize-none focus:outline-none transition-all duration-200 border backdrop-blur-xs
          ${grindMode
            ? 'bg-black/30 border-white/10 text-slate-200 placeholder-slate-600 focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30'
            : 'bg-white/40 border-white/40 text-slate-800 placeholder-slate-500 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30'
          }
        `}
      />
    </div>
  );
}
