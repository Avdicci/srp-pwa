'use client'
import React from 'react'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

export default function HistoryGraph({ history }) {
    const sorted = Object.entries(history).sort(([a], [b]) => new Date(a) - new Date(b))
    const labels = sorted.map(([date]) => date)
    const dataPoints = sorted.map(([, value]) => Number(value))

    const data = {
        labels,
        datasets: [
            {
                label: 'SRP Points',
                data: dataPoints,
                fill: true,
                borderColor: 'rgb(37 99 235)', // Tailwind blue-700
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                tension: 0.3,
                pointRadius: 3,
                pointHoverRadius: 6,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10,
                },
            },
            x: {
                ticks: {
                    maxTicksLimit: 7,
                },
            },
        },
    }

    return (
        <div className="h-full w-full">
            <Line data={data} options={options} />
        </div>
    )
}
