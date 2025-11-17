import type { TaskStatus, Task } from "../../types";
import { useState, useEffect } from "react";
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

type Priority = "low" | "medium" | "high";

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  const [currentStatus, setCurrentStatus] = useState(task.status);

  // keep local status in sync if parent updates the task.status
  useEffect(() => {
    setCurrentStatus(task.status);
  }, [task.status]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentStatus(e.target.value as TaskStatus);
    onStatusChange(task.id, e.target.value as TaskStatus);
  };

  const statusStyles: { [key in TaskStatus]: string } = {
    pending: "text-yellow-500",
    "in-progress": "text-blue-500",
    completed: "text-green-500",
  };

  const priorityStyles: { [key in Priority]: string } = {
    low: "text-yellow-500",
    medium: "text-blue-500",
    high: "text-red-500",
  };

  return (
    <div>
      <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-black dark:border-gray-700">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
          </div>
          <div className="flex gap-2">
            <select
              value={currentStatus}
              onChange={handleChange}
              className={`px-2 py-1 rounded  mx-2 text-blue-800 ${statusStyles[currentStatus]}`}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="mt-2 flex gap-4 text-sm">
          <span className={priorityStyles[task.priority]}>
            Priority: {task.priority}
          </span>
          <span className="text-gray-500">Due Date: {task.dueDate}</span>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
