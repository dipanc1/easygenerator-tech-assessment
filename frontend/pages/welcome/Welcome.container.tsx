"use client";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

import Welcome from "../welcome/Welcome";

const WelcomeContainer = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, [router]);

  return <Welcome />;
};

export default WelcomeContainer;
