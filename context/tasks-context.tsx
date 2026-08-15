"use client";

import { createContext, useContext, useReducer, useEffect } from "react";
import { Task } from "@/types/task";
import { useLocalStorage } from "../hooks/use-local-storage";

type TaskFilter = "all" | "completed" | "pending";
type TasksState = {
  tasks: Task[];
  filter: TaskFilter;
};
type TasksAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "REMOVE_TASK"; id: string }
  | { type: "TOGGLE_TASK"; id: string }
  | { type: "SET_FILTER"; payload: TaskFilter }
  | { type: "LOAD_TASKS"; payload: Task[] };

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
    case "LOAD_TASKS":
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
}
// an empty array caused an infinite loop when the app was first loaded, so I created a constant to avoid that
const EMPTY_TASKS: Task[] = [];

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
  const [, setStoredTasks] = useLocalStorage<Task[]>("tasks", EMPTY_TASKS);

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      dispatch({ type: "LOAD_TASKS", payload: JSON.parse(stored) });
    }
  }, []);

  // setStoredTasks isn't stabilized, i would use useCallback to stabilize it, but I'm considering that stretch
  useEffect(() => {
    setStoredTasks(state.tasks);
  }, [state.tasks, setStoredTasks]);

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
