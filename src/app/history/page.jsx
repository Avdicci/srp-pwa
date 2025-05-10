'use client'
import React, { useEffect, useState } from 'react'
import DailySummary from '../../components/DailySummary'

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
            {/* Floating Summary + Save */}
            <div className="fixed top-5 right-6 z-50">
                <DailySummary dailyPoints={lastPoints} />
            </div>

            <h1 className="text-3xl font-bold mb-6 text-center">History</h1>

            {/* Enlarged Graph Placeholder */}
            <div className="w-full h-[28rem] bg-gray-100 rounded-xl shadow-md flex items-center justify-center mb-6">
                <span className="text-gray-500 text-xl">Graph goes here</span>
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

            {/* Swapped Points & Date */}
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
