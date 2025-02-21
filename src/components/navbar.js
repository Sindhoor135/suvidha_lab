import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Suvidha AI Lab</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/interns">Interns</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/join">Join Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
