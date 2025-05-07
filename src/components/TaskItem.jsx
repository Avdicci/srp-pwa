const TaskItem = ({ task, onToggle }) => (
    <li>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          onChange={e => onToggle(task, e.target.checked)}
          className="w-4 h-4"
        />
        <span>{task.label}</span>
      </label>
    </li>
  );

export default TaskItem;