import React, { FC } from "react";

type ButtonType = {
  type: "submit" | "button";
  text: string;
};

interface ButtonProps {
  type: ButtonType;
}

const Button: FC<ButtonProps> = ({ type }) => {
  return (
    <button
      type={type.type}
      className="
          bg-blue-500
          text-white
          font-bold
          py-2
          px-4
          rounded
          focus:outline-none
          focus:shadow-outline
          hover:bg-blue-600
          mb-4"
    >
      {type.text}
    </button>
  );
};

export default Button;
