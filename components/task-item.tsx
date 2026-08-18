"use client";

import { useTasks } from "@/context/tasks-context";
import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@/types/task";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TaskItem = ({ task }: { task: Task }) => {
  const { toggleTask, removeTask } = useTasks();

  return (
    <div className="flex items-center gap-3 border-b border-border py-3">
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => toggleTask(task.id)}
      />
      <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:gap-3">
        <span
          className={cn(
            "text-sm",
            task.completed && "text-muted-foreground line-through",
          )}
        >
          {task.title}
        </span>
        <span className="text-xs">{task.dueDate}</span>
      </div>
      <Button variant="link" onClick={() => removeTask(task.id)}>
        Delete
      </Button>
    </div>
  );
};

export default TaskItem;
