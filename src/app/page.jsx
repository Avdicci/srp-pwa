'use client';

import SRPSection from '../components/SRPsection';
import DailySummary from '../components/DailySummary';
import greenTasks from '../data/greenTasks';
import whiteTasks from '../data/whiteTasks';
import blackTasks from '../data/blackTasks';
import { useState } from 'react';

export default function HomePage() {
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleToggle = (task, checked) => {
    setCompletedTasks(prev =>
        checked
        ? [...prev, task]
        : prev.filter(t => t.id !== task.id)
    );
    };

    const totalPoints = completedTasks.reduce((acc, task) => acc + task.points, 0);

    return (
    <main className="flex gap-6 p-6">
        <section className="flex-1">
        <SRPSection title="Green Points" tasks={greenTasks} onToggle={handleToggle} />
        <SRPSection title="White Points" tasks={whiteTasks} onToggle={handleToggle} />
        <SRPSection title="Black Points" tasks={blackTasks} onToggle={handleToggle} />
        {/* Add more SRPSection components as needed */}
        </section>

        <DailySummary totalPoints={totalPoints} />
    </main>
    );
}
