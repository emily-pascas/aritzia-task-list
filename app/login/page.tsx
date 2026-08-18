import LoginForm from "@/components/login-form";
import SubHeading from "@/components/sub-heading";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full bg-[url(https://i.pinimg.com/736x/d5/4d/fd/d54dfd8309e19c47fb3dc7b331ebac5c.jpg)] bg-cover bg-center flex items-center justify-center flex-col">
      <SubHeading>{"Login"}</SubHeading>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
