import React from "react";
import { useState } from "react";

function Hero(props) {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  return (
    <>
      <h1>{props.value}</h1>
      <div className="flex items-center mt-[52px] gap-[24px] pl-[80px]">
        <button
          onClick={() => setCount(count - 1)}
          className="border-[1px] w-[30px] h-[30px] border-black rounded-[4px] flex items-center justify-center"
        >
          -
        </button>
        <p>{count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="border-[1px] w-[30px] h-[30px] border-black rounded-[4px] flex items-center justify-center"
        >
          +
        </button>
        <input
          onChange={(e) => setInput(e.target.value)}
          className="border-[1px] border-black rounded-[4px]"
          type="text"
        />
      </div>
        <p className="block">{input}</p>
    </>
  );
}

export default Hero;
