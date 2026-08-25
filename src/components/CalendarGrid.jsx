import React from 'react';
import DayCard from './DayCard';

export default function CalendarGrid({ days = [], progress = {}, currentDay, completedDays = [], onDayClick }) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-slide-up">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
        {days.map((day) => {
          const dayNum = day.day;
          const dayProgress = progress[dayNum] || [];
          const allTasksDone = dayProgress.length > 0 && dayProgress.every(Boolean);
          const isCompleted = completedDays.includes(dayNum) || allTasksDone;
          const isCurrent = currentDay === dayNum;

          return (
            <DayCard
              key={dayNum}
              day={day}
              isCompleted={isCompleted}
              isCurrent={isCurrent}
              onClick={() => onDayClick(dayNum)}
            />
          );
        })}
      </div>
    </div>
  );
}
