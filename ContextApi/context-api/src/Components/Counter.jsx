import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../ContextApi/Context";
import CustomHook from "./CustomHook";

const Counter = () => {
  const { count, btnCount } = useContext(Context);

  CustomHook(count);

  return (
    <div>
      <h1>Button Press count is {count}</h1>
      <button onClick={() => btnCount()}>Press me </button>
    </div>
  );
};

export default Counter;
