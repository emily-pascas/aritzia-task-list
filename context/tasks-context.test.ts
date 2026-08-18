import { tasksReducer } from "./tasks-context";

//describe groups tasks together
describe("tasksReducer", () => {
  const baseState = { tasks: [], filter: "all" as const };
  const sampleTask = {
    id: "2024",
    title: "Test Jest Task",
    dueDate: "2026-08-20",
    completed: false,
  };
  //individual tests
  it("adds a task", () => {
    const result = tasksReducer(baseState, {
      type: "ADD_TASK",
      payload: sampleTask,
    });
    expect(result.tasks).toEqual([sampleTask]);
  });

  it("removes a task by id", () => {
    const state = { tasks: [sampleTask], filter: "all" as const };
    const result = tasksReducer(state, { type: "REMOVE_TASK", id: "2024" });
    expect(result.tasks).toEqual([]);
  });

  it("toggles a task complete/incomplete status", () => {
    const state = { tasks: [sampleTask], filter: "all" as const };
    const result = tasksReducer(state, { type: "TOGGLE_TASK", id: "2024" });
    expect(result.tasks[0].completed).toBe(true);
  });

  it("updates the filter", () => {
    const result = tasksReducer(baseState, {
      type: "SET_FILTER",
      payload: "pending",
    });
    expect(result.filter).toBe("pending");
  });
});

//arrange, act, assert
