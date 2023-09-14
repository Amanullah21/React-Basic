import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Page/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./Components/Page/Product";
import About from "./Components/Page/About";
import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";
import Form from "./Components/Page/Form";
import Debouncing from "./Components/Page/Debouncing";
import Pagination from "./Components/Page/Pagination";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/debounce" element={<Debouncing />} />
        <Route path="pagination" element={<Pagination />} />
      </Routes>
    </div>
  );
}

export default App;
