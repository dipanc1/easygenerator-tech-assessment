import React, { FC } from "react";

type HeadingType = {
  title: string;
};

interface HeadingProps {
  type: HeadingType;
}

const Heading: FC<HeadingProps> = ({ type }) => {
  return (
    <h1
      className="
    text-3xl
    font-bold
    text-center
    mb-8"
    >
      {type.title}
    </h1>
  );
};

export default Heading;
