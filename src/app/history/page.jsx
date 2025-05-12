'use client'
import React, { useEffect, useState } from 'react'
import DailySummary from '../../components/DailySummary'
import HistoryGraph from '../../components/HistoryGraph'
import TotalPointsSummary from '../../components/TotalPointsSummary'



export default function HistoryPage() {
    const [history, setHistory] = useState({})
    const [showDetails, setShowDetails] = useState(false)

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('savedPoints') || '{}')
        setHistory(saved)
    }, [])

    const lastPoints = Object.values(history).at(-1) || 0
    const toggleDetails = () => setShowDetails(prev => !prev)

    return (
        <div className="p-6 max-w-4xl mx-auto">
            {/* Floating Summary */}
            <div className="fixed top-5 right-6 z-50 flex-col items-end space-y-3">
                <DailySummary dailyPoints={lastPoints} />
                <TotalPointsSummary history={history} />
            </div>

            <h1 className="text-3xl font-bold mb-6 text-center">History</h1>

            {/* Graph */}
            <div className="w-full h-[28rem] bg-white rounded-xl shadow-md mb-6 p-4">
                <HistoryGraph history={history} />
            </div>

            {/* Toggle Button */}
            <div className="flex justify-center mb-4">
                <button
                    onClick={toggleDetails}
                    className="bg-blue-700 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition"
                >
                    {showDetails ? 'Hide Scrolls of History' : 'Show Scrolls of History'}
                </button>
            </div>

            {/* Points & Date */}
            {showDetails && (
                <ul className="space-y-2">
                    {Object.entries(history)
                        .sort(([a], [b]) => new Date(b) - new Date(a))
                        .map(([date, points]) => (
                            <li
                                key={date}
                                className="bg-srp-section border rounded-lg p-3 shadow-sm flex justify-between items-center"
                            >
                                <span className="font-bold text-white">{Number(points).toFixed(1)} pts</span>
                                <span className="font-medium text-gray-900">{date}</span>
                            </li>
                        ))}
                </ul>
            )}
        </div>
    )
}
