"use client";

import { useTasks } from "@/context/tasks-context";
import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@/types/task";
import { Button } from "@/components/ui/button";

const TaskItem = ({ task }: { task: Task }) => {
  const { toggleTask, removeTask } = useTasks();

  return (
    <div>
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => toggleTask(task.id)}
      />
      <span>{task.title}</span> | <span>{task.dueDate}</span>
      <Button onClick={() => removeTask(task.id)}>Delete</Button>
    </div>
  );
};

export default TaskItem;
