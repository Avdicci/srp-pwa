'use client'

import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js'
import { useEffect, useState, useRef } from 'react'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler)

export default function HomeGraph() {
    const [data, setData] = useState({ labels: [], datasets: [] })
    const chartRef = useRef(null)

    useEffect(() => {
        const today = new Date()
        const saved = JSON.parse(localStorage.getItem('savedPoints') || '{}')

        const labels = Array.from({ length: 7 }).map((_, i) => {
            const date = new Date(today)
            date.setDate(today.getDate() - (6 - i))
            return date.toISOString().split('T')[0]
        })

        const values = labels.map((dateStr) => saved[dateStr] || 0)

        setData({
            labels,
            datasets: [
                {
                    label: 'Points',
                    data: values,
                    borderColor: '#FC6B03', // Updated bright border
                    borderWidth: 2.5,        // Slightly thinner than default
                    backgroundColor: (context) => {
                        const chart = context.chart
                        const { ctx, chartArea } = chart

                        // Fallback solid color if chartArea isn't ready
                        if (!chartArea) return '#C8B937'

                        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom)
                        gradient.addColorStop(0, '#C8B937') // Top → Bright Orange
                        gradient.addColorStop(1, '#FC6B03') // Bottom → Lime Green
                        return gradient
                    },
                    pointBackgroundColor: '#F6AB09',
                    fill: true,
                    tension: 0.4,
                },
            ],
        })

    }, [])

    return (
        <div className="w-full h-48 bg-intense-reverse-background-section rounded-xl shadow-md p-4">
            <Line
                ref={chartRef}
                data={data}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { color: '#888', stepSize: 20 },
                            grid: { color: '#e0d4b4' }
                        },
                        x: {
                            ticks: { color: '#888' },
                            grid: { color: '#e0d4b4' }
                        }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: '#C87037',
                            titleColor: '#fff',
                            bodyColor: '#fff',
                        }
                    },
                    elements: {
                        point: {
                            radius: 4,
                            hoverRadius: 6,
                        },
                    },
                }}
            />
        </div>
    )
}
