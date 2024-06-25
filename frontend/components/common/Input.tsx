import React, { FC } from "react";

type InputType = {
  type: string;
  placeholder: string;
  name: string;
};

interface InputProps {
  type: InputType;
}

const Input: FC<InputProps> = ({ type }) => {
  return (
    <input
      type={type.type}
      placeholder={type.placeholder}
      className="mb-4 p-2 border-radius-2"
      name={type.name}
    />
  );
};

export default Input;
