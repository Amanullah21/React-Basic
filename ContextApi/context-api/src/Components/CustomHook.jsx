import React, { useEffect } from "react";

const CustomHook = (count) => {
  useEffect(() => {
    if (count >= 1) {
      document.title = `Page click count is ${count}`;
    } else {
      document.title = "Aman";
    }
  }, [count]);
};

export default CustomHook;
