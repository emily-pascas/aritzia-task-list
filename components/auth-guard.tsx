"use client";

import React from "react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, hasHydrated } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (hasHydrated && isLoggedIn === false) {
      router.push("/login");
    }
  }, [hasHydrated, isLoggedIn, router]);

  if (!hasHydrated || !isLoggedIn) {
    return null;
  } else {
    return <>{children}</>;
  }
};

export default AuthGuard;
