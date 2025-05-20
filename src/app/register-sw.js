// app/components/RegisterSW.tsx
'use client'
import { useEffect } from 'react'

export default function RegisterSW() {
    useEffect(() => {
        if (
            typeof window !== 'undefined' &&
            'serviceWorker' in navigator &&
            process.env.NODE_ENV === 'production'
        ) {
            navigator.serviceWorker
                .register('/sw.js')
                .then((reg) => console.log('SW registered: ', reg))
                .catch((err) => console.error('SW registration failed: ', err))
        }
    }, [])

    return null
}
