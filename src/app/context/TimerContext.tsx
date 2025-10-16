'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface TimerContextType {
  now: number
}

const TimerContext = createContext<TimerContextType | null>(null)

export function TimerProvider({ serverNow, children }: { serverNow: number; children: ReactNode }) {
  const [now, setNow] = useState<number>(serverNow)

  useEffect(() => {
    const intervalId = setInterval(() => setNow((prev) => prev + 1000), 1000)
    return () => clearInterval(intervalId)
  }, [])

  return <TimerContext.Provider value={{now}}>{children}</TimerContext.Provider>
}

export function useTimer(): TimerContextType {
  const ctx = useContext(TimerContext)
  if (!ctx) {
    throw new Error('useTimer must be used inside TimerProvider')
  }
  return ctx
}
