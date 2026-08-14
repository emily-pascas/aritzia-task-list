"use client";

import { Task } from "@/types/task";
import { useState } from "react";
import { useEffect } from "react";

export function useLocalStorage(
  key: string,
  initialValue: Task[],
): [Task[], (newValue: Task[]) => void] {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      setValue(JSON.parse(storedValue));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, [key, initialValue]);
  return [value, setValue];
}
