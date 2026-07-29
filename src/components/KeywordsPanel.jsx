import React, { useState } from 'react';

export default function KeywordsPanel({ keywords, grindMode }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!keywords || keywords.length === 0) return null;

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className={`p-4 rounded-2xl border backdrop-blur-md ${
      grindMode ? 'bg-black/20 border-white/10' : 'bg-white/15 border-white/30'
    }`}>
      <h3 className={`font-semibold text-xs tracking-wider uppercase mb-3 flex items-center gap-2 ${
        grindMode ? 'text-amber-400' : 'text-slate-800'
      }`}>
        <span>🔑</span> YOUTUBE SEARCH KEYWORDS
      </h3>
      <div className="flex flex-wrap gap-2">
        {keywords.map((kw, idx) => (
          <div
            key={idx}
            onClick={() => handleCopy(kw, idx)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono cursor-pointer transition-all flex items-center gap-1.5 group relative border backdrop-blur-xs ${
              grindMode
                ? 'bg-amber-500/10 border-amber-500/20 text-amber-300 hover:bg-amber-500/20'
                : 'bg-white/40 border-white/50 text-slate-800 hover:bg-white/60 hover:border-amber-400/40'
            }`}
            title="Click to copy search keyword"
          >
            <span>{kw}</span>
            <span className="opacity-40 group-hover:opacity-100 transition-opacity text-[10px]">📋</span>

            {/* Copied Toast */}
            <span className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 transition-opacity whitespace-nowrap pointer-events-none ${copiedIndex === idx ? 'opacity-100' : ''}`}>
              Copied!
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
