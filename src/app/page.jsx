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
        <div className="p-4 space-y-6">
          {/* Full-width Chart Placeholder */}
          <div className="w-full h-48 bg-gray-100 rounded-xl shadow-md flex items-center justify-center">
            <span className="text-gray-500 text-lg">Graph goes here</span>
          </div>
    
          {/* Grid Layout for Task Sections */}
          <div className='display-flex items-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <SRPSection title="Green Points" tasks={greenTasks} onToggle={handleToggle} />
                <SRPSection title="White Points" tasks={whiteTasks} onToggle={handleToggle} />
                <SRPSection title="Black Points" tasks={blackTasks} onToggle={handleToggle} />
            </div>
          </div>
          <DailySummary totalPoints={totalPoints} />

        </div>
      )
    }
