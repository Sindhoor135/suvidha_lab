import React from "react";
import "../styles.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you!</p>
      <div className="grid">
        <div className="card">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>info@suvidhafoundationedutech.org</p>
        </div>
        <div className="card">
          <FaPhone className="icon" />
          <h3>Phone</h3>
          <p>+91 7020044091</p>
        </div>
        <div className="card">
          <FaMapMarkerAlt className="icon" />
          <h3>Address</h3>
          <p>Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;