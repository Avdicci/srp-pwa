'use client'
import React, { useEffect, useState } from 'react'

const HistoryPage = () => {
    const [history, setHistory] = useState({})

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('savedPoints') || '{}')
        setHistory(saved)
    }, [])

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">History</h1>
            <ul className="space-y-2">
                {Object.entries(history).map(([date, points]) => (
                    <li key={date} className="bg-gray-100 p-3 rounded shadow">
                        <span className="font-medium">{date}:</span> {points} pts
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HistoryPage
