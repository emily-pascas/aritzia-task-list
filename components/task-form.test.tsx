import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskForm from "./task-form";
import { useTasks } from "@/context/tasks-context";

jest.mock("@/context/tasks-context", () => ({
  useTasks: jest.fn(),
}));

describe("TaskForm", () => {
  it("calls addTask with the entered title and dude date on submit", async () => {
    const addTask = jest.fn();
    (useTasks as jest.Mock).mockReturnValue({ addTask });

    render(<TaskForm />);

    await userEvent.type(screen.getByLabelText(/task name/i), "Buy milk");
    fireEvent.change(screen.getByLabelText(/due date/i), {
      target: { value: "2026-08-20" },
    });
    await userEvent.click(screen.getByRole("button", { name: /create task/i }));
  });
});
