import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  let btnCount = () => {
    setCount(count + 1);
  };
  return (
    <Context.Provider
      value={{
        count,
        btnCount,
      }}
    >
      {children}
    </Context.Provider>
  );
};
