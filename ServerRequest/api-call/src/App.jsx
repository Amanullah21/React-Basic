import React, { useState, useEffect } from "react";

function App() {
  const url = "http://localhost:3000/friends";
  const init = {
    name: "",
    state: "",
  };
  const [serverData, setServerData] = useState([]);
  const [data, setData] = useState(init);


  //input handle
  const inputhandle = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  //submit  button handle
  const submitBtn = () => {
    AddToServer();
    getToServer();
  };

  //add to server
  const AddToServer = () => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
  };
  useEffect(() => getToServer(), []);

  // get to server
  const getToServer = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) => setServerData(ele))
      .catch((ele) => console.log(ele));
  };

  //deleting to server aur delete button handle
  const deleteHandle = (key) => {
    console.log(key);
    fetch(`${url}?id=${key}`, {
      method: "DELETE",
    }).then((res) => console.log(res));
  };

  return (
    <div className="App">
      <input
        placeholder="Enter name"
        onChange={inputhandle}
        name="name"
        value={data.name}
      />
      <input
        required
        name="state"
        placeholder="Enter State"
        onChange={inputhandle}
        value={data.address}
      />
      <button onClick={submitBtn}>submit</button>
      {serverData.map((ele, index) => (
        <div key={index}>
          <h1>{ele.name}</h1>
          <h2>{ele.state}</h2>
          <button onClick={() => deleteHandle(index)}>Delete to Server</button>
        </div>
      ))}
    </div>
  );
}

export default App;
