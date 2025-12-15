import "../styles/About.css";
import profilePic from "../assets/profile.jpg";
import BackgroundAnimation from "../components/BackgroundAnimation";

export default function About() {
  return (
    <div className="about-wrapper">
      <BackgroundAnimation />

      <h1 className="page-title">About Me</h1>

      <div className="about-container glass-card">
        <img src={profilePic} alt="Profile" className="about-img" />

        <div className="about-text">
          <p>
            I’m a passionate <span className="highlight">Full Stack Java Developer</span> 
             &nbsp; and  <span className="highlight">SAP Certified Integration Associate</span>.
            I love building scalable applications, solving real-world problems,
            and designing clean user experiences.
          </p>

          <p>
            My technical expertise includes Java, Spring Boot, React.js,
            RESTful APIs, MySQL, AWS, and SAP BTP/Integration Suite.
          </p>

          <p>
            I focus on delivering impactful, user-centric digital solutions
            that combine performance, design, and reliability.
          </p>
        </div>
      </div>
    </div>
  );
}
