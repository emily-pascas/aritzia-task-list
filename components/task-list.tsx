"use client";

import { useTasks } from "@/context/tasks-context";
import TaskItem from "./task-item";
import TaskFilter from "./task-filter";

const TaskList = () => {
  const { tasks, filter } = useTasks();
  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });
  return (
    <div>
      <TaskFilter />
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
