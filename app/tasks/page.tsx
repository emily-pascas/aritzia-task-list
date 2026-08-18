import TaskForm from "@/components/task-form";
import TaskList from "@/components/task-list";

const TasksPage = () => {
  return (
    <div>
      <h1>Tasks</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TasksPage;
