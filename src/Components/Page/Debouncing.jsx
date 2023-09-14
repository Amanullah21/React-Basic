import React, { useState } from "react";

const Debouncing = () => {
  const [count, setCount] = useState(0);
  const getData = () => {
    setCount(count + 1);
  };
  const Debouncing = (getData, delay) => {
    let timer;
    return function () {
      let content = this,
        agrs = arguments;
      clearTimeout(timer);
      timer = setTimeout((ele) => {
        getData.apply(content, agrs);
      }, delay);
    };
  };
  const onKeyUpFunction = Debouncing(getData, 300);
  return (
    <div>
      <div>
        <input type="text" onKeyUp={onKeyUpFunction} />
        <h1>{count}</h1>
      </div>
    </div>
  );
};

export default Debouncing;
