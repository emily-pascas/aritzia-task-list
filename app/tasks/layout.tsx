import AuthGuard from "@/components/auth-guard";

function TasksLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}

export default TasksLayout;
