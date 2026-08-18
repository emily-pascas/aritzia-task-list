"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTasks } from "@/context/tasks-context";

const TaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");

  const getToday = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [dueDate, setDueDate] = useState(getToday());

  return (
    <div>
      <form
        className="mb-8"
        onSubmit={(e) => {
          e.preventDefault();
          addTask({
            title,
            dueDate,
            id: crypto.randomUUID(),
            completed: false,
          });
          setTitle("");
          setDueDate(getToday());
        }}
      >
        <Label htmlFor="title">Task Name</Label>{" "}
        <Input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Label htmlFor="due-date" className="mt-1">
          Due Date
        </Label>
        <Input
          id="due-date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <Button type="submit" className="mt-1">
          Create Task
        </Button>
      </form>
    </div>
  );
};

export default TaskForm;
