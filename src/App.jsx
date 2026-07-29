import { useState, useCallback, useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import DAYS_DATA from './data/days.js'
import useLocalStorage from './hooks/useLocalStorage.js'
import Header from './components/Header.jsx'
import CalendarGrid from './components/CalendarGrid.jsx'
import DayPage from './components/DayPage.jsx'
import ResetModal from './components/ResetModal.jsx'

function App() {
  // ===== Initial state structures =====
  const initialProgress = {}
  const initialNotes = {}
  DAYS_DATA.forEach(day => {
    initialProgress[day.day] = new Array(day.tasks.length).fill(false)
    initialNotes[day.day] = ''
  })

  // ===== Persisted State =====
  const [progress, setProgress] = useLocalStorage('hackathon-progress', initialProgress)
  const [currentDay, setCurrentDay] = useLocalStorage('hackathon-current-day', 1)
  const [completedDays, setCompletedDays] = useLocalStorage('hackathon-completed-days', [])
  const [grindTimers, setGrindTimers] = useLocalStorage('hackathon-grind-timers', {})
  const [grindMode, setGrindMode] = useLocalStorage('hackathon-grind-active', false)
  const [userNotes, setUserNotes] = useLocalStorage('hackathon-user-notes', initialNotes)

  // ===== View Navigation State =====
  const [currentView, setCurrentView] = useState('calendar') // 'calendar' | 'day'
  const [activeDayNumber, setActiveDayNumber] = useState(1)
  const [showResetModal, setShowResetModal] = useState(false)

  // ===== Stopwatch Timer =====
  const [currentTimer, setCurrentTimer] = useState(grindTimers[activeDayNumber] || 0)
  const timerRef = useRef(null)

  // Sync timer when active day changes
  useEffect(() => {
    setCurrentTimer(grindTimers[activeDayNumber] || 0)
  }, [activeDayNumber])

  // Timer tick logic
  useEffect(() => {
    if (grindMode) {
      timerRef.current = setInterval(() => {
        setCurrentTimer(prev => {
          const newVal = prev + 1
          if (newVal % 5 === 0) {
            setGrindTimers(timers => ({ ...timers, [activeDayNumber]: newVal }))
          }
          return newVal
        })
      }, 1000)
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
      if (currentTimer > 0) {
        setGrindTimers(timers => ({ ...timers, [activeDayNumber]: currentTimer }))
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [grindMode, activeDayNumber])

  // Handle note change for a specific day
  const handleNoteChange = useCallback((dayNum, text) => {
    setUserNotes(prev => ({ ...prev, [dayNum]: text }))
  }, [setUserNotes])

  // Toggle a task checkbox
  const handleToggleTask = useCallback((dayNumber, taskIndex) => {
    setProgress(prev => {
      const newProgress = { ...prev }
      const dayTasks = [...(newProgress[dayNumber] || [])]
      dayTasks[taskIndex] = !dayTasks[taskIndex]
      newProgress[dayNumber] = dayTasks

      const allDone = dayTasks.every(Boolean)
      if (allDone) {
        setTimeout(() => {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#f59e0b', '#10b981', '#a855f7', '#ec4899', '#06b6d4'],
            gravity: 0.8,
          })
        }, 200)
      }

      return newProgress
    })
  }, [setProgress])

  // Get pending tasks (ONLY from days marked as COMPLETED)
  const getPendingTasks = useCallback((dayNumber) => {
    const pending = []
    DAYS_DATA.forEach(day => {
      if (day.day < dayNumber && completedDays.includes(day.day)) {
        const dayProgress = progress[day.day] || []
        day.tasks.forEach((task, idx) => {
          if (!dayProgress[idx]) {
            pending.push({
              dayNumber: day.day,
              title: day.title,
              task: task,
            })
          }
        })
      }
    })
    return pending
  }, [progress, completedDays])

  // Toggle Grind Mode (inside Day Page)
  const handleGrindToggle = useCallback(() => {
    setGrindMode(prev => !prev)
  }, [setGrindMode])

  // Click "I'M DONE FOR TODAY" -> Advances directly to next day's task page!
  const handleImDone = useCallback(() => {
    setGrindTimers(timers => ({ ...timers, [activeDayNumber]: currentTimer }))

    if (!completedDays.includes(activeDayNumber)) {
      setCompletedDays(prev => [...prev, activeDayNumber])
    }

    setGrindMode(false)

    confetti({
      particleCount: 90,
      spread: 75,
      origin: { x: 0.85, y: 0.85 },
      colors: ['#f59e0b', '#10b981', '#a855f7'],
    })

    if (activeDayNumber < 21) {
      const nextDay = activeDayNumber + 1
      setActiveDayNumber(nextDay)
      setCurrentDay(nextDay)
      setCurrentTimer(0)
      setCurrentView('day') // DIRECTLY LOAD NEXT DAY'S PAGE!
    } else {
      setCurrentView('calendar')
    }
  }, [activeDayNumber, currentTimer, completedDays, setGrindTimers, setCompletedDays, setGrindMode, setCurrentDay])

  // Open day page
  const handleDayClick = useCallback((dayNumber) => {
    setActiveDayNumber(dayNumber)
    setCurrentView('day')
  }, [])

  // Go back to main calendar
  const handleBackToCalendar = useCallback(() => {
    setGrindMode(false)
    setCurrentView('calendar')
  }, [setGrindMode])

  // Reset all progress
  const handleReset = useCallback(() => {
    const resetProgress = {}
    const resetNotes = {}
    DAYS_DATA.forEach(day => {
      resetProgress[day.day] = new Array(day.tasks.length).fill(false)
      resetNotes[day.day] = ''
    })
    setProgress(resetProgress)
    setUserNotes(resetNotes)
    setCurrentDay(1)
    setCompletedDays([])
    setGrindTimers({})
    setGrindMode(false)
    setCurrentTimer(0)
    setShowResetModal(false)
    setCurrentView('calendar')
  }, [setProgress, setUserNotes, setCurrentDay, setCompletedDays, setGrindTimers, setGrindMode])

  const activeDayData = DAYS_DATA.find(d => d.day === activeDayNumber)
  const totalTasks = DAYS_DATA.reduce((sum, day) => sum + day.tasks.length, 0)
  const completedTasks = Object.values(progress).reduce(
    (sum, tasks) => sum + tasks.filter(Boolean).length, 0
  )

  return (
    <div className={`min-h-screen ${grindMode && currentView === 'day' ? 'grind-mode' : 'light-mode'}`}>
      {currentView === 'calendar' ? (
        /* MAIN CALENDAR VIEW */
        <div>
          <Header
            totalTasks={totalTasks}
            completedTasks={completedTasks}
            onResetClick={() => setShowResetModal(true)}
          />

          <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
            <CalendarGrid
              days={DAYS_DATA}
              progress={progress}
              currentDay={currentDay}
              completedDays={completedDays}
              onDayClick={handleDayClick}
            />
          </main>

          <footer className="text-center pb-8 text-slate-500 font-mono text-xs">
            🚀 NIKHIL'S HUSTLE — 21-DAY HACKATHON SPRINT 🚀
          </footer>
        </div>
      ) : (
        /* DEDICATED FULL-SCREEN DAY PAGE */
        <DayPage
          day={activeDayData}
          dayNumber={activeDayNumber}
          checked={progress[activeDayNumber] || []}
          onToggle={(taskIndex) => handleToggleTask(activeDayNumber, taskIndex)}
          pendingTasks={getPendingTasks(activeDayNumber)}
          noteText={userNotes[activeDayNumber] || ''}
          onNoteChange={handleNoteChange}
          onBack={handleBackToCalendar}
          totalDays={21}
          grindMode={grindMode}
          grindTime={currentTimer}
          onGrindToggle={handleGrindToggle}
          onImDone={handleImDone}
          isCompleted={completedDays.includes(activeDayNumber)}
        />
      )}

      {/* Reset Modal */}
      <ResetModal
        isOpen={showResetModal}
        onConfirm={handleReset}
        onClose={() => setShowResetModal(false)}
        grindMode={grindMode}
      />
    </div>
  )
}

export default App
