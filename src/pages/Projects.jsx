import "../styles/Projects.css";
import BackgroundAnimation from "../components/BackgroundAnimation";

export default function Projects() {
  const projects = [
    {
      name: "GrowPure – Agricultural Marketplace Platform",
      desc: "A digital platform enabling farmers and buyers to connect directly, with ML-powered crop disease detection.",
      tech: "HTML, CSS, JavaScript, Java, MySQL"
    },
    {
      name: "Web-Based RTO Management System",
      desc: "Automated system for managing vehicle registration, licensing, fines, and digital document workflows.",
      tech: "Spring Boot, Hibernate, MySQL, REST API"
    },
    {
      name: "Alcohol Detection & Engine Locking System",
      desc: "IoT-based system using MQ-3 sensor and GPS to detect alcohol and lock ignition for safety.",
      tech: "Arduino, MQ-3 Sensor, Java, GPS Module"
    }
  ];

  return (
    <div className="projects-wrapper">
      <BackgroundAnimation />
      <h1 className="page-title">Projects</h1>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card glass-card">
            <h2 className="project-title">{p.name}</h2>
            <p className="project-desc">{p.desc}</p>
            <p className="project-tech"><span>Tech Stack:</span> {p.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
