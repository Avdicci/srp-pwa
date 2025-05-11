'use client'
import DevSeedButton from '../../components/DevSeedButton'
import ClearHistoryButton from '../../components/ClearHistoryButton'

export default function SettingsPage() {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Settings</h1>

            <div className="space-y-6">
                {/* Only show this in development */}
                <DevSeedButton />

                {/* Always show this one */}
                <ClearHistoryButton />
            </div>
        </div>
    )
}
