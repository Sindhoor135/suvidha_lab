import React from "react";
import "../styles.css";
import { FaBrain, FaLightbulb, FaRocket } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to Suvidha AI Lab</h2>
      <p>Leading NLP research and innovation for a better future.</p>
      <div className="grid">
        <div className="card">
          <FaBrain className="icon" />
          <h3>Cutting-Edge Research</h3>
          <p>We push the boundaries of NLP with innovative research.</p>
        </div>
        <div className="card">
          <FaLightbulb className="icon" />
          <h3>Creative Solutions</h3>
          <p>We deliver AI-driven solutions tailored to your needs.</p>
        </div>
        <div className="card">
          <FaRocket className="icon" />
          <h3>Future-Ready Technology</h3>
          <p>Stay ahead with our advanced AI technologies.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;