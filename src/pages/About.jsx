import "../styles/About.css";
import profilePic from "../assets/profile.jpg";
import BackgroundAnimation from "../components/BackgroundAnimation";

export default function About() {
  return (
    <div className="about-wrapper">
      
      {/* Background Animation Behind */}
      <BackgroundAnimation />

      <div className="about-content">
        <h1 className="page-title">About Me</h1>

        <div className="about-container">
          {/* LEFT: IMAGE */}
          <img src={profilePic} alt="Profile" className="about-img" />

          {/* RIGHT: TEXT */}
          <div className="about-text">
            <p>
              I’m a passionate 
              <span className="highlight"> Full Stack Java Developer </span> 
              and 
              <span className="highlight"> SAP Certified Integration Associate.</span>
              I enjoy building scalable applications and solving meaningful 
              problems with clean and modern user experiences.
            </p>

            <p>
              My technical expertise includes Java, Spring Boot, React.js,
              REST APIs, MySQL, AWS, and SAP BTP/Integration Suite.  
            </p>

            <p>
              I focus on delivering user-centric applications that combine
              performance, design elegance, and real business impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
