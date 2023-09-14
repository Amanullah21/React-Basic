import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [inputData, setInputData] = useState([]);
  const [data, setData] = useState([]);
  const [isCredentials, setIsCredentials] = useState(false);
  const textInput = useRef();
  const textPass = useRef();
  const url = "http://localhost:3000/profile";
  const navigate = useNavigate();

  const getData = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) => setData(ele));
  };
  useEffect(() => getData, []);
  // console.log(data);
  const loginHandle = () => {
    // let
    const inObj = {
      text: textInput.current.value,
      pass: textPass.current.value,
    };
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === inObj.text && data[i].password === inObj.pass) {
        navigate("/");
        setIsCredentials(true);
      } else {
        continue;
      }
    }
    console.log(isCredentials);
    if (isCredentials === false) {
      alert("Enter right name & Password");
    }
    textInput.current.value = "";
    textPass.current.value = "";
  };

  // useEffect(()=>{
  //   if(typeof isCredentials === "boolean" && isCredentials===false)
  // },[isCredentials])
  return (
    <div>
      <div>Login Page</div>
      <input ref={textInput} type="text" placeholder="name" />
      <input ref={textPass} type="password" />
      <button onClick={loginHandle}>Login</button>
    </div>
  );
};

export default Login;
