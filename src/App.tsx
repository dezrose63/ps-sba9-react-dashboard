import DashBoard from "./components/Dashboard/Dashboard";
import { useState } from "react";
import type { Task, TaskStatus } from "./types";

function App() {
  const initialTasks: Task[] = [
    {
      id: "1",
      title: "Design landing page",
      description:
        "Create the initial wireframe and mockups for the landing page.",
      status: "pending",
      priority: "high",
      dueDate: "2025-06-20",
    },
    {
      id: "2",
      title: "Set up CI/CD pipeline",
      description:
        "Configure GitHub Actions for automated testing and deployment.",
      status: "pending",
      priority: "medium",
      dueDate: "2025-06-18",
    },
    {
      id: "3",
      title: "Fix login bug",
      description:
        "Resolve the issue where users can’t log in with Google OAuth.",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-06-14",
    },
    {
      id: "4",
      title: "Write unit tests",
      description: "Add coverage for the user service module.",
      status: "in-progress",
      priority: "low",
      dueDate: "2025-06-22",
    },
    {
      id: "5",
      title: "Deploy to staging",
      description: "Push the latest build to the staging environment for QA.",
      status: "completed",
      priority: "medium",
      dueDate: "2025-06-10",
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleAddTask = (task: Task) => {
    setTasks((prev) => [task, ...prev]);
  };

  const handleUpdateTask = (updated: Task) => {
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
  };

  return (
    <div className="flex flex-col items-center bg-zinc-900 text-white min-h-screen">
      <h1 className="text-5xl my-10">Task Manager Dashboard</h1>

      <DashBoard
        tasks={tasks}
        onAddTask={handleAddTask}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}

export default App;
