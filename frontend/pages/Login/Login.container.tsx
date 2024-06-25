"use client";
import React from "react";
import Login from "./Login";
import { useRouter } from "next/navigation";
import axios from "axios";
import { loginUser } from "@/api/login";

const LoginContainer = () => {
  interface User {
    email: string;
    password: string;
  }

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (!formData.get("email") || !formData.get("password")) {
      alert("Please fill in all fields");
      return;
    }

    const body: User = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    if (await loginUser(body)) {
      router.push("/welcome");
    }
  };

  return <Login handleLogin={handleLogin} />;
};

export default LoginContainer;
