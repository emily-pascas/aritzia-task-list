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
    //first sort by completed status and then by date
    .sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
      return a.dueDate.localeCompare(b.dueDate);
    });
  return (
    <Card className="bg-card/10 backdrop-blur-sm">
      <CardContent>
        <TaskFilter />
        <div className="max-h-80 md:max-h-96 overflow-y-auto">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskList;
