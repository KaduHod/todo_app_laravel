import React from 'react';

export type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  due_date: string;
};

type TaskListProps = {
  tasks: Task[];
  onToggleComplete?: (id: number) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete }) => {
  if (tasks.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No tasks created.
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white"
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">{task.title}</h2>
              <p className="text-sm text-gray-600">{task.description}</p>
              <p className="text-xs text-gray-500 mt-1">
                Due: {new Date(task.due_date).toLocaleDateString()}
              </p>
            </div>
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggleComplete?.(task.id)}
                />
                <span className="text-sm">Completed</span>
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

