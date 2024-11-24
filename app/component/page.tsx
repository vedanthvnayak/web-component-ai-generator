"use client";
import React, { useState } from "react";

function ButtonComponent() {
  const [text, setText] = useState("Hello");

  const toggleText = () => {
    setText((previousText) => (previousText === "Hello" ? "Hi" : "Hello"));
  };

  return (
    <button
      onClick={toggleText}
      className="bg-red-500 text-black border border-black w-full md:w-auto py-2 px-4 shadow-md hover:bg-red-600 
      transition duration-200 ease-in-out sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
    >
      {text}
    </button>
  );
}

export default ButtonComponent;
