import React from 'react';

const ProgressBar = ({ totalTasks, completedTasks, grindMode }) => {
  const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const isComplete = percentage === 100;

  const bgClasses = grindMode ? 'bg-white/5' : 'bg-gray-200/50';
  
  let fillClasses = 'transition-all duration-700 ease-out h-full rounded-full';
  
  if (isComplete) {
    fillClasses += grindMode ? ' bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : ' bg-emerald-500';
  } else {
    fillClasses += grindMode 
      ? ' bg-gradient-to-r from-amber-600 to-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.3)]' 
      : ' bg-gradient-to-r from-amber-400 to-amber-300';
  }

  const textClasses = grindMode ? 'text-slate-400' : 'text-slate-500';
  const highlightClasses = grindMode ? 'text-amber-400' : 'text-amber-600';

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 animate-slide-up">
      <div className="flex justify-between items-center mb-2 text-sm font-medium">
        <span className={textClasses}>Sprint Progress</span>
        <span className={isComplete ? (grindMode ? 'text-emerald-400' : 'text-emerald-600') : highlightClasses}>
          {completedTasks} / {totalTasks} Tasks ({percentage}%)
        </span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${bgClasses}`}>
        <div 
          className={fillClasses}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
