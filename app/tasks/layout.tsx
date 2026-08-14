import AuthGuard from "@/components/auth-guard";
import { TasksProvider } from "@/context/tasks-context";

function TasksLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <TasksProvider>{children}</TasksProvider>
    </AuthGuard>
  );
}

export default TasksLayout;
