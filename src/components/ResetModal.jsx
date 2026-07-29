import React from 'react';

const ResetModal = ({ isOpen, onClose, onConfirm, grindMode }) => {
  if (!isOpen) return null;

  const overlayClasses = grindMode ? 'bg-black/70 backdrop-blur-sm' : 'bg-white/60 backdrop-blur-sm';
  const modalClasses = grindMode 
    ? 'bg-slate-900 border border-white/10' 
    : 'bg-white border border-gray-200';

  const textPrimary = grindMode ? 'text-slate-100' : 'text-slate-900';
  const textSecondary = grindMode ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-colors duration-300 ${overlayClasses}`}>
      <div className={`w-full max-w-md rounded-2xl p-6 shadow-2xl animate-scale-in ${modalClasses}`}>
        <h3 className={`text-xl font-bold mb-2 ${textPrimary}`}>Reset Progress?</h3>
        <p className={`mb-6 text-sm ${textSecondary}`}>
          This will clear all completed tasks, days, and reset your grind timer. This action cannot be undone. Are you absolutely sure?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              grindMode
                ? 'bg-white/5 text-slate-300 hover:bg-white/10'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`px-4 py-2 rounded-lg font-bold text-white transition-colors ${
              grindMode
                ? 'bg-red-500/80 hover:bg-red-500'
                : 'bg-red-500 hover:bg-red-600'
            }`}
          >
            Yes, Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetModal;
