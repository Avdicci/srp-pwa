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
                borderColor: '#FC6B03', // Border similar to HomeGraph
                borderWidth: 1.5,
                backgroundColor: (context) => {
                    const chart = context.chart
                    const { ctx, chartArea } = chart

                    if (!chartArea) return '#C8B937' // fallback solid color

                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom)
                    gradient.addColorStop(0, '#C8B937') // top
                    gradient.addColorStop(1, '#FC6B03') // bot
                    return gradient
                },
                pointBackgroundColor: '#FFFFFF',
                tension: 0.4,
                pointRadius: 2,
                pointHoverRadius: 6,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: { color: '#888', stepSize: 20 },
                grid: { color: '#e0d4b4' }
            },
            x: {
                ticks: { color: '#888', maxTicksLimit: 7 },
                grid: { color: '#e0d4b4' }
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#C87037',
                titleColor: '#fff',
                bodyColor: '#fff',
            },
        },
        elements: {
            point: {
                radius: 4,
                hoverRadius: 6,
            },
        },
    }

    return (
        <div className="mx-2 sm:mx-4 lg:mx-6 h-96 bg-intense-reverse-background-section rounded-xl shadow-md p-4 mb-8">
            <div className="relative w-full h-full">
                <Line data={data} options={options} />
            </div>
        </div>
    )

}
