import React from "react";
import "../styles.css";
import teamImage from "../assets/team.jpg"; // Add a team image

const About = () => {
  return (
    <div className="container">
      <h2>About Us</h2>
      <p>Our mission is to advance NLP research and AI innovation.</p>
      <div className="grid">
        <div className="card">
          <img src={teamImage} alt="Our Team" style={{ width: "100%", borderRadius: "10px" }} />
        </div>
        <div className="card">
          <h3>Who We Are</h3>
          <p>We are a team of passionate researchers and developers dedicated to solving real-world problems using AI.</p>
          <h3>Our Vision</h3>
          <p>To create a future where AI enhances human capabilities and improves lives.</p>
        </div>
      </div>
    </div>
  );
};

export default About;