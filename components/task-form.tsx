"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTasks } from "@/context/tasks-context";
import TaskList from "./task-list";

const TaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask({
            id: crypto.randomUUID(),
            title,
            dueDate,
            completed: false,
          });
          setTitle("");
          setDueDate("");
          //   console.log("task", title, dueDate);
        }}
      >
        <Label htmlFor="title">Task</Label>
        <Input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
        <Label htmlFor="due-date">Due Date</Label>
        <Input
          id="due-date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        ></Input>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default TaskForm;
