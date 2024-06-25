import React from "react";

import { Button, Heading, Input, Wrapper } from "@/components/common";

interface RegisterProps {
  handleRegister: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Register: React.FC<RegisterProps> = ({ handleRegister }) => {
  return (
    <Wrapper>
      <Heading type={{ title: "Register" }} />
      <form className="flex flex-col w-1/3" onSubmit={handleRegister}>
        <Input type={{ type: "text", placeholder: "Name", name: "name" }} />
        <Input type={{ type: "email", placeholder: "Email", name: "email" }} />
        <Input
          type={{ type: "password", placeholder: "Password", name: "password" }}
        />
        <Button type={{ type: "submit", text: "Register" }} />
      </form>

      <a
        href="/"
        className="
                text-blue-500
                hover:text-blue-800
                font-bold
                text-sm
                mt-4"
      >
        Already have an account? Login
      </a>
    </Wrapper>
  );
};

export default Register;
