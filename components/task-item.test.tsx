import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskItem from "./task-item";
import { useTasks } from "@/context/tasks-context";

jest.mock("@/context/tasks-context", () => ({
  useTasks: jest.fn(),
}));

describe("TaskItem", () => {
  const task = {
    id: "2024",
    title: "Jest Test Task",
    dueDate: "2026-08-20",
    completed: false,
  };

  it("calls toggleTask when the checkbox is clicked", async () => {
    const toggleTask = jest.fn();
    const removeTask = jest.fn();
    (useTasks as jest.Mock).mockReturnValue({ toggleTask, removeTask });

    render(<TaskItem task={task} />);
    await userEvent.click(screen.getByRole("checkbox"));

    expect(toggleTask).toHaveBeenCalledWith("2024");
  });

  it("calls removeTask when Delete is clicked", async () => {
    const toggleTask = jest.fn();
    const removeTask = jest.fn();
    (useTasks as jest.Mock).mockReturnValue({ toggleTask, removeTask });

    render(<TaskItem task={task} />);
    await userEvent.click(screen.getByRole("button", { name: /delete/i }));

    expect(removeTask).toHaveBeenCalledWith("2024");
  });
});
