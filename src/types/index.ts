export type TaskStatus = "pending" | "in-progress" | "completed";

export type Priority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  dueDate: string;
}

export interface DashBoardProps {
  tasks: Task[];
  onAddTask?: (task: Task) => void;
  onUpdateTask?: (task: Task) => void;
  onDeleteTask?: (taskId: string) => void;
  onStatusChange?: (taskId: string, status: TaskStatus) => void;
}
export interface TaskFilters {
  status?: TaskStatus;
  priority?: Priority;
}
