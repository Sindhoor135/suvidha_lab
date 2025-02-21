import React from "react";
import "../styles.css";
import { FaBook, FaFileAlt, FaGlobe } from "react-icons/fa";

const Research = () => {
  return (
    <div className="container">
      <h2>Research & Publications</h2>
      <p>Explore our latest research papers and technical blogs.</p>
      <div className="grid">
        <div className="card">
          <FaBook className="icon" />
          <h3>Research Papers</h3>
          <p>Read our published work in top AI conferences.</p>
        </div>
        <div className="card">
          <FaFileAlt className="icon" />
          <h3>Technical Blogs</h3>
          <p>Learn about our insights and discoveries.</p>
        </div>
        <div className="card">
          <FaGlobe className="icon" />
          <h3>Open Source</h3>
          <p>Contribute to our open-source projects.</p>
        </div>
      </div>
    </div>
  );
};

export default Research;