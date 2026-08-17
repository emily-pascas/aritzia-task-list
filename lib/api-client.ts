import { Task } from "@/types/task";

export class UnauthorizedError extends Error {}
export class RateLimitError extends Error {}

const API_KEY = process.env.NEXT_PUBLIC_API_SECRET_KEY;

async function handleResponse(response: Response) {
  if (response.status === 401) {
    throw new UnauthorizedError("Unauthorized");
  }
  if (response.status === 429) {
    throw new RateLimitError("Too Many Requests");
  }
  if (!response.ok) {
    throw new Error("Request failed!");
  }
  return response.json();
}

export async function createTask(task: Task) {
  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY ?? "",
    },
    body: JSON.stringify(task),
  });
  return handleResponse(response);
}

export async function deleteTask(id: string) {
  const response = await fetch(`/api/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "x-api-key": API_KEY ?? "",
    },
  });
  return handleResponse(response);
}
