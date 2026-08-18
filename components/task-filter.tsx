"use client";

import { useTasks } from "@/context/tasks-context";
import { Button } from "@/components/ui/button";

const TaskFilter = () => {
  const { filter, setFilter } = useTasks();
  return (
    <div>
      <Button
        variant={filter === "all" ? "default" : "outline"}
        onClick={() => setFilter("all")}
      >
        All
      </Button>
      <Button
        variant={filter === "pending" ? "default" : "outline"}
        onClick={() => setFilter("pending")}
      >
        pending
      </Button>
      <Button
        variant={filter === "completed" ? "default" : "outline"}
        onClick={() => setFilter("completed")}
      >
        completed
      </Button>
    </div>
  );
};

export default TaskFilter;
