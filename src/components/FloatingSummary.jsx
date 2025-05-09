'use client'
import React, { useEffect, useState } from 'react'
import DailySummary from './DailySummary'

export default function FloatingSummary() {
    const [lastPoints, setLastPoints] = useState(0)

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('savedPoints') || '{}')
        const latest = Object.values(saved).at(-1) || 0
        setLastPoints(latest)
    }, [])

    return (
        <div className="fixed top-5 right-6 z-50">
            <DailySummary dailyPoints={lastPoints} />
        </div>
    )
}
