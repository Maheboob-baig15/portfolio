import React from "react";
import "../styles/Home.css";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home-container" id="home">
      
      {/* LEFT SIDE TEXT */}
      <div className="home-text">
        <h1>Hi, I'm</h1>
        <h2>Maheboob Baig</h2>

        <p>
          Full Stack Java Developer & SAP Integration Associate  
          passionate about building secure, scalable and modern digital solutions.
        </p>

        {/* BUTTONS */}
        <div className="home-buttons">
          {/* FORCE DOWNLOAD */}
          <a 
            href="/resume-file.pdf"
            download="Maheboob_Baig_Resume.pdf"
            className="resume-download"
          >
            Download Resume
          </a>

          <Link to="/contact" className="contact-btn">
            Contact Me
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="profile-wrapper">
        <img src={profile} alt="Profile" className="profile-photo" />
      </div>

    </section>
  );
}
