'use client'
import React, { useEffect, useState } from 'react'
import { seedSRPData } from '../lib/seedSRP'

export default function DevSeedButton() {
    if (process.env.NODE_ENV !== 'development') return null

    const [hasData, setHasData] = useState(false)

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('savedPoints') || '{}')
        if (Object.keys(saved).length > 0) {
            setHasData(true)
        }
    }, [])

    const handleSeed = () => {
        seedSRPData(30)
        window.location.reload()
    }

    return (
        <div className="flex justify-center mb-6">
            <button
                onClick={handleSeed}
                disabled={hasData}
                className={`px-4 py-2 rounded shadow transition
            ${hasData ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800 text-white'}`}
            >
                {hasData ? 'Already Seeded' : 'Seed 30 Days of SRP'}
            </button>
        </div>
    )
}
