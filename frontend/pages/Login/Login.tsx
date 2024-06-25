import React, { FC } from "react";

import { Button, Heading, Input, Wrapper } from "@/components/common";

interface LoginProps {
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Login: FC<LoginProps> = ({ handleLogin }) => {
  return (
    <Wrapper>
      <Heading type={{ title: "Login" }} />

      <form className="flex flex-col w-1/3" onSubmit={handleLogin}>
        <Input type={{ type: "email", placeholder: "Email", name: "email" }} />
        <Input
          type={{ type: "password", placeholder: "Password", name: "password" }}
        />
        <Button type={{ type: "submit", text: "Login" }} />
      </form>

      <a
        href="/register"
        className="
                text-blue-500
                hover:text-blue-800
                font-bold
                text-sm
                mt-4"
      >
        Not registered? Register here
      </a>
    </Wrapper>
  );
};

export default Login;
