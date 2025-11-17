import type { TaskStatus, TaskFilters } from "../../types";
import { useState } from "react";

export interface TaskFilterProps {
  onFilterChange: (filters: TaskFilters) => void;
}

function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [filters, setFilters] = useState<TaskFilters>({});

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const normalized = value === "all" ? undefined : value;

    setFilters((prev) => {
      const updated = { ...prev, [name]: normalized };
      // call parent with normalized values
      onFilterChange({
        status: (updated.status as TaskStatus) || undefined,
        priority: (updated.priority as "low" | "medium" | "high") || undefined,
      });
      return updated;
    });
  };

  return (
    <div className="flex gap-4 p-4">
      <div>
        <label
          htmlFor="status-filter"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Status
        </label>
        <select
          id="status-filter"
          name="status"
          value={filters.status ?? "all"}
          onChange={handleChange}
          className="bg-white dark:bg-gray-800 px-2 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="priority-filter"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Priority
        </label>
        <select
          id="priority-filter"
          name="priority"
          value={filters.priority ?? "all"}
          onChange={handleChange}
          className="bg-white dark:bg-gray-800 px-2 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="all">All Priorities</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </div>
    </div>
  );
}

export default TaskFilter;
