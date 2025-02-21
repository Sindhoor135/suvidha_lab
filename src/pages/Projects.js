import React from "react";
import "../styles.css";
import { FaProjectDiagram, FaTools, FaUsers } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="container">
      <h2>Our Projects</h2>
      <p>Discover the innovative NLP projects we are working on.</p>
      <div className="grid">
        <div className="card">
          <FaProjectDiagram className="icon" />
          <h3>AI Chatbots</h3>
          <p>Building conversational AI for businesses.</p>
        </div>
        <div className="card">
          <FaTools className="icon" />
          <h3>Text Analysis</h3>
          <p>Developing tools for sentiment and text analysis.</p>
        </div>
        <div className="card">
          <FaUsers className="icon" />
          <h3>Human-AI Interaction</h3>
          <p>Exploring how humans interact with AI systems.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;