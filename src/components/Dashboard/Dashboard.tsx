import { useState } from "react";
import type { DashBoardProps, Task } from "../../types";
import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";

function DashBoard({
  tasks,
  onAddTask,
  onUpdateTask,
  onDeleteTask,
  onStatusChange,
}: DashBoardProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined);

  const openCreate = () => {
    setEditingTask(undefined);
    setShowForm(true);
  };

  const handleFormSubmit = (task: Task) => {
    if (editingTask) {
      if (onUpdateTask) onUpdateTask(task);
    } else {
      if (onAddTask) onAddTask(task);
    }
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="w-full px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl my-5">DashBoard</h2>
        <button
          onClick={openCreate}
          className="px-4 py-2 bg-green-600 rounded text-white"
        >
          Add Task
        </button>
      </div>

      {/* STATS  */}
      <div className="flex gap-10">
        <div>
          <h3>Stats</h3>
          <div>
            <div>Completed Tasks: 10</div>
            <div>Pending Tasks: 5</div>
            <div>In Progress Tasks: 8</div>
          </div>
        </div>

        <div>
          <h3>Recently Created Tasks</h3>
          <div>
            <div>Task 1</div>
            <div>Task 2</div>
            <div>Task 3</div>
          </div>
        </div>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="my-4">
          <TaskForm
            initialTask={editingTask}
            onSubmit={handleFormSubmit}
            onCancel={handleCancel}
          />
        </div>
      )}

      {/* TASKLIST  */}
      <TaskList
        tasks={tasks}
        onStatusChange={onStatusChange || (() => {})}
        onDelete={onDeleteTask || (() => {})}
      />
    </div>
  );
}

export default DashBoard;
