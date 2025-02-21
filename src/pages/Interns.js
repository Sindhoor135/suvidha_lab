import React from "react";
import "../styles.css";
import { FaUserGraduate, FaCode, FaChartLine } from "react-icons/fa";

const Interns = () => {
  return (
    <div className="container">
      <h2>Interns</h2>
      <p>Meet our talented NLP research interns.</p>
      <div className="grid">
        <div className="card">
          <FaUserGraduate className="icon" />
          <h3>Research Interns</h3>
          <p>Passionate students working on groundbreaking NLP projects.</p>
        </div>
        <div className="card">
          <FaCode className="icon" />
          <h3>Development Interns</h3>
          <p>Building scalable AI solutions with cutting-edge technology.</p>
        </div>
        <div className="card">
          <FaChartLine className="icon" />
          <h3>Data Science Interns</h3>
          <p>Analyzing data to derive actionable insights.</p>
        </div>
      </div>
    </div>
  );
};

export default Interns;