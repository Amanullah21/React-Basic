import "./App.css";
import { useEffect, useState } from "react";
import useApiGetCall from "./CustomHook/useApiGetCall";

function App() {
  const url = "https://adidas-db.herokuapp.com/product";
  useApiGetCall(url);
  return (
    <div className="App">
      <h1>It is Custom Hook </h1>
    </div>
  );
}

export default App;
