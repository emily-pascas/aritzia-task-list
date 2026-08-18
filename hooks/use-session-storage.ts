"use client";

import { useState } from "react";
import { useEffect } from "react";

export function useSessionStorage(
  key: string,
  initialValue: boolean,
): [boolean, (newValue: boolean) => void] {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    // hydrate from sessionStorage after mount — it's unavailable during server rendering
    const storedValue = sessionStorage.getItem(key);
    if (storedValue !== null) {
      //need to hydrate from browser storage
      setValue(JSON.parse(storedValue));
    } else {
      sessionStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, [key, initialValue]);
  const setStoredValue = (newValue: boolean) => {
    // keep sessionStorage in sync every time the value changes
    setValue(newValue);
    sessionStorage.setItem(key, JSON.stringify(newValue));
  };
  return [value, setStoredValue];
}
