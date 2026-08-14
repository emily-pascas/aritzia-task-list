"use client";

import { createContext, useContext, useReducer } from "react";
import { Task } from "@/types/task";

type TaskFilter = "all" | "completed" | "pending";
type TasksState = {
  tasks: Task[];
  filter: TaskFilter;
};
type TasksAction =
  // descriminated union of action type -> tasksaction like intake binder, each object like individual form
  | { type: "ADD_TASK"; payload: Task }
  | { type: "REMOVE_TASK"; id: string }
  | { type: "TOGGLE_TASK"; id: string }
  | { type: "SET_FILTER"; payload: TaskFilter };

export const TasksContext = createContext({
  tasks: [] as Task[],
  filter: "all" as TaskFilter,
  addTask: (task: Task) => {},
  removeTask: (id: string) => {},
  toggleTask: (id: string) => {},
  setFilter: (filter: TaskFilter) => {},
});

export function tasksReducer(
  state: TasksState,
  action: TasksAction,
): TasksState {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id
            ? { ...task, completed: !task.completed }
            : task,
        ),
      };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(tasksReducer, {
    tasks: [],
    filter: "all",
  });
  const addTask = (task: Task) => dispatch({ type: "ADD_TASK", payload: task });
  const removeTask = (id: string) => dispatch({ type: "REMOVE_TASK", id });
  const toggleTask = (id: string) => dispatch({ type: "TOGGLE_TASK", id });
  const setFilter = (filter: TaskFilter) =>
    dispatch({ type: "SET_FILTER", payload: filter });

  return (
    <TasksContext.Provider
      value={{ ...state, addTask, removeTask, toggleTask, setFilter }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}
