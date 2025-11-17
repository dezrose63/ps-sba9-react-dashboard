import React, { useEffect, useState } from "react";
import type { Task as TaskType, TaskStatus, Priority } from "../../types";

export interface TaskFormProps {
  initialTask?: TaskType;
  onSubmit: (task: TaskType) => void;
  onCancel?: () => void;
}

type Errors = Partial<
  Record<keyof Pick<TaskType, "title" | "dueDate">, string>
>;

function TaskForm({ initialTask, onSubmit, onCancel }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("pending");
  const [priority, setPriority] = useState<Priority>("medium");
  const [dueDate, setDueDate] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title ?? "");
      setDescription(initialTask.description ?? "");
      setStatus(initialTask.status ?? "pending");
      setPriority(initialTask.priority ?? "medium");
      setDueDate(initialTask.dueDate ?? "");
    }
  }, [initialTask]);

  const validate = (): boolean => {
    const next: Errors = {};

    if (!title.trim()) next.title = "Title is required.";

    if (!dueDate) next.dueDate = "Due date is required.";
    else {
      const selected = new Date(dueDate);
      // clear time portion for comparison
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) next.dueDate = "Due date cannot be in the past.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    const task: TaskType = {
      id: initialTask?.id ?? String(Date.now()),
      title: title.trim(),
      description: description.trim(),
      status,
      priority,
      dueDate,
    };

    onSubmit(task);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg w-full bg-white dark:bg-gray-900 p-4 rounded shadow"
    >
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full px-3 py-2 border rounded ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Task title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border rounded border-gray-300"
          placeholder="Optional description"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as TaskStatus)}
            className="w-full px-3 py-2 border rounded border-gray-300"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            className="w-full px-3 py-2 border rounded border-gray-300"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className={`w-full px-3 py-2 border rounded ${
            errors.dueDate ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.dueDate && (
          <p className="text-red-500 text-sm mt-1">{errors.dueDate}</p>
        )}
      </div>

      <div className="flex gap-3 justify-end mt-4">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-200 text-gray-800"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-600 text-white"
        >
          {initialTask ? "Save" : "Add Task"}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
