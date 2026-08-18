import SubHeading from "@/components/sub-heading";
import TaskForm from "@/components/task-form";
import TaskList from "@/components/task-list";

const TasksPage = () => {
  return (
    <div className="min-h-screen w-full bg-[url(https://i.pinimg.com/736x/d5/4d/fd/d54dfd8309e19c47fb3dc7b331ebac5c.jpg)] bg-cover bg-center flex items-center justify-center flex-col">
      <SubHeading>{"Create Task"}</SubHeading>
      <TaskForm />
      <SubHeading>{"List"}</SubHeading>
      <TaskList />
    </div>
  );
};

export default TasksPage;
