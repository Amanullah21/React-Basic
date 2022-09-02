import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Navbar = () => {
  return (
    <div>
        <Link to="/">Portfolio</Link>
        <Link to="/github">Github</Link>
        <Link to="/linkdin">Linkdin</Link>
    </div>
  );
};

export default Navbar;
