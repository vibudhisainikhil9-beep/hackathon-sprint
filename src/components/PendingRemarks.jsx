import React from 'react';

export default function PendingRemarks({ pendingTasks = [], grindMode }) {
  if (!pendingTasks || pendingTasks.length === 0) {
    return null;
  }

  return (
    <div
      className={`
        rounded-2xl p-4 mb-6 border transition-colors duration-300 animate-fade-in
        ${grindMode
          ? 'bg-amber-500/10 border-amber-500/25 text-amber-200'
          : 'bg-amber-50/80 border-amber-200 text-amber-900 shadow-sm'
        }
      `}
    >
      <h3 className="font-bold text-xs tracking-wider uppercase mb-2 flex items-center gap-2">
        <span>📌</span> Remarks from Previous Days ({pendingTasks.length} Carryover)
      </h3>
      <div className="max-h-40 overflow-y-auto pr-2 custom-scrollbar">
        <ul className="space-y-2">
          {pendingTasks.map((item, index) => (
            <li key={index} className="flex items-start gap-2.5 text-xs leading-relaxed">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
              <div>
                <span className="font-bold opacity-80">Day {item.dayNumber}: </span>
                <span>{item.task}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
