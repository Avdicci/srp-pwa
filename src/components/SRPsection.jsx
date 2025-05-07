import TaskItem from '../components/TaskItem'

const SRPSection = ({ title, tasks, onToggle }) => (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6 w-full">
      <h2 className="text-lg font-bold mb-3">{title}</h2>
      <ul className="space-y-2">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} />
        ))}
      </ul>
    </div>
  );

export default SRPSection;
