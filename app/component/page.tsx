"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

function MyButtonComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <button
        className="animate-bounce bg-gray-800 text-white border-2 border-gray-700 p-4 rounded-md text-2xl sm:p-8 sm:text-4xl hover:bg-gray-700 transition-colors duration-300"
        onClick={() => setCount(count + 1)}
      >
        Click me: {count}
      </button>
    </div>
  );
}

export default MyButtonComponent;
