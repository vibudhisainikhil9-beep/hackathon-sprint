import React from 'react';
import DayCard from './DayCard';

export default function CalendarGrid({ days = [], progress = {}, currentDay, completedDays = [], onDayClick }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 animate-slide-up">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
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
