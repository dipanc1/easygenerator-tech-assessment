import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return (
    <div
      className="
      flex
      items-center
      justify-center
      h-screen
      flex-col
      bg-gray-200
  "
    >
      {children}
    </div>
  );
};

export default Wrapper;
