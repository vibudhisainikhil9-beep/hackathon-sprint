import React from 'react';

export default function TaskChecklist({ tasks = [], checked = [], onToggle, grindMode }) {
  if (!tasks || tasks.length === 0) return null;

  return (
    <div className="space-y-3">
      <h3 className={`font-semibold text-xs tracking-wider uppercase ${grindMode ? 'text-amber-400/80' : 'text-slate-500'}`}>
        TASKS FOR TODAY ({checked.filter(Boolean).length}/{tasks.length})
      </h3>
      <div className="space-y-2.5">
        {tasks.map((taskText, index) => {
          const isDone = Boolean(checked[index]);

          return (
            <div
              key={index}
              onClick={() => onToggle(index)}
              className={`
                flex items-start gap-3 p-3.5 rounded-xl cursor-pointer transition-all duration-200 border
                ${grindMode
                  ? (isDone
                      ? 'bg-emerald-950/20 border-emerald-500/30 text-gray-400'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-200 hover:border-amber-400/30')
                  : (isDone
                      ? 'bg-emerald-50/60 border-emerald-200 text-gray-400'
                      : 'bg-white/60 border-gray-200/80 hover:bg-white text-slate-700 hover:border-amber-300')
                }
              `}
            >
              {/* Checkbox circle */}
              <div
                className={`
                  w-5 h-5 rounded-md flex-shrink-0 mt-0.5 flex items-center justify-center transition-all duration-200 border
                  ${isDone
                    ? 'bg-emerald-500 border-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                    : (grindMode
                        ? 'border-amber-400/40 bg-black/20'
                        : 'border-slate-300 bg-white')
                  }
                `}
              >
                {isDone && (
                  <svg className="w-3.5 h-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              {/* Task text */}
              <span className={`text-sm leading-relaxed ${isDone ? 'line-through opacity-60' : 'font-medium'}`}>
                {taskText}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
