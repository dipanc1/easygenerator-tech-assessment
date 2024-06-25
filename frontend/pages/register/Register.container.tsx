import React from "react";
import Register from "./Register";
import axios from "axios";
import { useRouter } from "next/router";
import { registerUser } from "@/api/register";

const RegisterContainer = () => {
  interface User {
    name: string;
    email: string;
    password: string;
  }

  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("password")
    ) {
      alert("Please fill in all fields");
      return;
    }

    const body: User = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    if (await registerUser(body)) {
      router.push("/welcome");
    }
  };

  return <Register handleRegister={handleRegister} />;
};

export default RegisterContainer;
