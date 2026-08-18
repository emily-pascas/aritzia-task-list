"use client";

import { useTasks } from "@/context/tasks-context";
import TaskItem from "./task-item";
import TaskFilter from "./task-filter";
import { Card, CardContent } from "@/components/ui/card";

const TaskList = () => {
  const { tasks, filter } = useTasks();
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "pending") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    })
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  return (
    <Card className="bg-card/10 backdrop-blur-sm">
      <CardContent>
        <TaskFilter />
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </CardContent>
    </Card>
  );
};

export default TaskList;
