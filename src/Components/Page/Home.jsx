import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} maxLength='2'/>
      <div
        style={{
          width: "300px",
          height: "50px",
          background: "red",
          borderRadius: "50px",
        }}
      >
        <div
          style={{
            width: `${text}%`,
            height: "50px",
            background: "green",
            borderRadius: "50px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
