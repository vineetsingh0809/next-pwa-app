"use client";
import Image from "next/image";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementCounter = () => {
    if (counter <= 0) {
      return;
    }
    setCounter((prev) => prev - 1);
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="h-[70%] w-[30%] max-[500px]:w-[90%] bg-[#D3D3D3] rounded-lg flex items-center justify-center">
        <div className="text-[#000000] w-[90%] flex items-center justify-between">
          <button
            className="bg-red-600 border-none px-4 py-2 rounded-md"
            onClick={decrementCounter}
          >
            Decrement
          </button>
          <span className="text-4xl font-bold">{counter}</span>
          <button
            className="bg-green-600 border-none px-4 py-2 rounded-md"
            onClick={incrementCounter}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
