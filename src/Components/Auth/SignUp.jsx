import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [data, setData] = useState([]);
  const inputName = useRef();
  const inputPass = useRef();
  const inputPassAgain = useRef();
  const url = "http://localhost:3000/profile";
  const navigate = useNavigate();
  const getData = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) => setData(ele));
  };
  useEffect(() => getData(), []);
  const SignUpHandle = () => {
    console.log(data);
    if (inputPass.current.value === inputPassAgain.current.value) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === inputName.current.value) {
          alert("Name Already Exists");
          return;
        }
      }
      const inputData = {
        name: inputName.current.value,
        pass: inputPass.current.value,
      };
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(inputData),
      });
      inputName.current.value = "";
      inputPass.current.value = "";
      navigate("/login");
    } else {
      alert("Not Matched");
    }
  };
  return (
    <div>
      <div>Sign In form </div>
      <div>
        <input type="text" ref={inputName} />
        <input type="password" ref={inputPass} />
        <input type="password" ref={inputPassAgain} />
        <button onClick={SignUpHandle}>Sign Up </button>
      </div>
    </div>
  );
};

export default SignUp;
