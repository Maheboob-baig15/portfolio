import React from "react";
import "../styles/Home.css";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="home-container" id="home">
      <div className="home-text">
        <h1>Hi, I'm</h1>
        <h2>Maheboob Baig</h2>

        <p>
          Full Stack Java Developer & SAP Integration Associate
          passionate about building secure, scalable and modern digital solutions.
        </p>

        <div className="home-buttons">
          <a
            href="/resume-file.pdf"
            download="Maheboob_Baig_Resume.pdf"
            className="resume-download"
          >
            View Resume
          </a>

          <button
            className="contact-btn"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="profile-wrapper">
        <img src={profile} alt="Profile" className="profile-photo" />
      </div>
    </section>
  );
}
