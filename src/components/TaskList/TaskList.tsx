import TaskFilter from "../TaskFilter/TaskFilter";
import TaskItem from "./TaskItem";
import { useState, useMemo } from "react";
import type { Task as TaskType, TaskStatus, TaskFilters } from "../../types";

export interface TaskListProps {
  tasks: TaskType[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}
function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  const [filters, setFilters] = useState<TaskFilters>({});

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filters.status && filters.priority) {
        return (
          task.status === filters.status && task.priority === filters.priority
        );
      }

      if (filters.status) return task.status === filters.status;

      if (filters.priority) return task.priority === filters.priority;

      return true;
    });
  }, [tasks, filters]);

  const handleFilterChange = (newFilters: TaskFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <TaskFilter onFilterChange={handleFilterChange} />

      {filteredTasks.length === 0 ? (
        <div className="p-4 text-sm text-gray-300">
          No tasks match these filters.
        </div>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem
            task={task}
            key={task.id}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
