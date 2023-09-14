import React, { useState } from "react";

const init = {
  name: "",
  phone: "",
  pass: "",
};
const Form = () => {
  const [initData, setInitData] = useState(init);
  const [inputData, setInputData] = useState([]);
  // Normal Form
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setInitData({ ...initData, [name]: value });

  };
  const submitInput = () => {
    setInputData([...inputData, initData]);
  };
  return (
    <div>
      <div>
        
        <input
          type="text"
          name="name"
          value={initData.name}
          placeholder="Name"
          onChange={(e) => inputHandle(e)}
        />
        <input
          type="tel"
          name="phone"
          value={initData.phone}
          placeholder="Mobile No"
          onChange={(e) => inputHandle(e)}
        />
        <input
          type="password"
          name="pass"
          value={initData.pass}
          placeholder="Password"
          onChange={(e) => inputHandle(e)}
        />
        <button onClick={submitInput}>Submit</button>
        {inputData.map((ele, index) => (
          <div key={index}>
            <h1>
              {ele.name} - {ele.phone} - {ele.pass}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
