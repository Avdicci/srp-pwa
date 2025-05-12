'use client'

import SRPSection from '../components/SRPsection'
import DailySummary from '../components/DailySummary'
import greenTasks from '../data/greenTasks'
import whiteTasks from '../data/whiteTasks'
import blackTasks from '../data/blackTasks'
import { useState, useEffect } from 'react'

export default function HomePage() {
    const [completedTasks, setCompletedTasks] = useState([])
    const [savedPointsToday, setSavedPointsToday] = useState(0)

    // Sync from localStorage on mount
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0]
        const saved = JSON.parse(localStorage.getItem('savedPoints') || '{}')
        if (saved[today]) {
            setSavedPointsToday(saved[today])
        }
    }, [])

    const handleToggle = (task, checked) => {
        setCompletedTasks((prev) =>
            checked ? [...prev, task] : prev.filter((t) => t.id !== task.id),
        )
    }

    const dailyPointsRaw = completedTasks.reduce((acc, task) => acc + task.points, 0)
    const dailyPoints = Math.round(dailyPointsRaw * 100) / 100

    // Choose live calculation OR fallback to saved
    const displayedPoints = dailyPoints > 0 ? dailyPoints : savedPointsToday

    return (
        <>
            {/* Floating Summary + Save */}
            <div className="fixed top-5 right-6 z-50">
                <DailySummary dailyPoints={displayedPoints} />
            </div>

            {/* Main content */}
            <div className="p-4 space-y-6">
                {/* Chart */}
                <div className="w-full h-48 bg-gray-100 rounded-xl shadow-md flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Graph goes here</span>
                </div>

                {/* Task sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <SRPSection
                        title="Green Points"
                        tasks={greenTasks}
                        onToggle={handleToggle}
                    />
                    <SRPSection
                        title="White Points"
                        tasks={whiteTasks}
                        onToggle={handleToggle}
                    />
                    <SRPSection
                        title="Black Points"
                        tasks={blackTasks}
                        onToggle={handleToggle}
                    />
                </div>
            </div>
        </>
    )
}
