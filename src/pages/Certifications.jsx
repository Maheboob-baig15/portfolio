import "../styles/Skills.css";
import BackgroundAnimation from "../components/BackgroundAnimation";

export default function Certifications() {
  const certifications = [
    "SAP Certified Associate – Integration Developer",
    "Full Stack Web Development (MERN)",
    "Java & Spring Boot Training",
    "AWS Cloud Fundamentals"
  ];

  return (
    <div className="skills-wrapper">
      <BackgroundAnimation />

      <div className="skills-content">
        <h1 className="page-title">Certifications</h1>

        <div className="skills-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="skill-card glass-card">
              {cert}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
