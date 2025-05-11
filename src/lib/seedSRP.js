export function seedSRPData(days = 30) {
    const data = {}
    const now = new Date()

    for (let i = 0; i < days; i++) {
        const date = new Date(now)
        date.setDate(now.getDate() - i)
        const iso = date.toISOString().split('T')[0]
        data[iso] = (Math.random() * 7 + 3).toFixed(1) // Random points: 5–25
    }

    localStorage.setItem('savedPoints', JSON.stringify(data))
    console.log('[Seeder] Seeded SRP data for', days, 'days.')
}
