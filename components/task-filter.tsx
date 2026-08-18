"use client";

import { useTasks } from "@/context/tasks-context";
import { Button } from "@/components/ui/button";

const TaskFilter = () => {
  const { filter, setFilter } = useTasks();
  return (
    <div>
      <Button
        variant={filter === "all" ? "default" : "ghost"}
        onClick={() => setFilter("all")}
      >
        All
      </Button>
      <Button
        variant={filter === "pending" ? "default" : "ghost"}
        onClick={() => setFilter("pending")}
      >
        Pending
      </Button>
      <Button
        variant={filter === "completed" ? "default" : "ghost"}
        onClick={() => setFilter("completed")}
      >
        Completed
      </Button>
    </div>
  );
};

export default TaskFilter;
