import React, { useState } from "react";

const init = {
  name: "",
  address: "",
};
function App() {
  const [data, setData] = useState(init);

  // onchange input handle
  const inputhandle = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  //onclick button handle
  const submitBtn = () => {
    console.log(data);
  };
  return (
    <div className="App">
      <input
        placeholder="Md Amanullah"
        onChange={inputhandle}
        name="name"
        value={data.name}
      />
      <input
        required
        name="address"
        placeholder="Aman"
        onChange={inputhandle}
        value={data.address}
      />
      <button onClick={submitBtn}>submit</button>
    </div>
  );
}

export default App;
