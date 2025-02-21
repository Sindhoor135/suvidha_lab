import React, { useState } from "react";
import "../styles.css";
import { FaUserPlus, FaHandshake, FaCalendarAlt } from "react-icons/fa";

const JoinUs = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);

  
    setFormData({
      name: "",
      email: "",
      skills: "",
    });

   
    setIsPopupOpen(false);

    
    alert("Application submitted successfully!");
  };

  return (
    <div className="container">
      <h2>Join Us</h2>
      <p>Apply to be a part of the Suvidha NLP Research Group.</p>
      <div className="grid">
        <div className="card">
          <FaUserPlus className="icon" />
          <h3>Internships</h3>
          <p>Gain hands-on experience in NLP research.</p>
        </div>
        <div className="card">
          <FaHandshake className="icon" />
          <h3>Collaborations</h3>
          <p>Partner with us on innovative projects.</p>
        </div>
        <div className="card">
          <FaCalendarAlt className="icon" />
          <h3>Events</h3>
          <p>Join our workshops and seminars.</p>
        </div>
      </div>

      {/* Apply to Join Button */}
      <button
        className="btn"
        onClick={() => setIsPopupOpen(true)}
        style={{ marginTop: "20px" }}
      >
        Apply to Join
      </button>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Application Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="skills">Skills</label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn">
                Submit Application
              </button>
              <button
                type="button"
                className="btn btn-cancel"
                onClick={() => setIsPopupOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinUs;