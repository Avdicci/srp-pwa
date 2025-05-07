import TaskItem from '../components/TaskItem'

const SRPSection = ({ title, tasks, onToggle }) => (
    <div className="bg-gradient-to-r from-brand-start to-brand-end rounded-xl shadow-md p-4 mb-6">
      <h2 className="text-lg text-white font-bold mb-3">{title}</h2>
      <ul className="space-y-2 text-white">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} />
        ))}
      </ul>
    </div>
  )
  
  export default SRPSection
  