"use client";
import React from "react";

const Button = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <button
      className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${
        click ? "border-black" : ""
      }`}
      onClick={handleClick}
    >
      Click Me
    </button>
  );
};

export default Button;
