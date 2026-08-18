"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
          router.push("/tasks");
        }}
      >
        <Label className="pb-2">Username</Label>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className=""
        />
        <Label className="py-2">Password</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=""
        />
        <Button type="submit" className="mt-4">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
