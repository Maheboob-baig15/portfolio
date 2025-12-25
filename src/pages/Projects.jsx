import "../styles/Projects.css";
import BackgroundAnimation from "../components/BackgroundAnimation";

export default function Projects() {
  const projects = [
    {
      name: "GrowPure – Agricultural Marketplace Platform",
      desc: "A full-stack platform connecting farmers and buyers directly.",
      details: [
        "Implemented ML-based crop disease detection",
        "Farmer-to-buyer direct marketplace",
        "Role-based authentication system"
      ],
      tech: "HTML, CSS, JavaScript, Java, MySQL"
    },
    {
      name: "Web-Based RTO Management System",
      desc: "Automated digital system for transport office operations.",
      details: [
        "Vehicle registration & license management",
        "Fine payment and document workflows",
        "RESTful backend with Spring Boot"
      ],
      tech: "Spring Boot, Hibernate, MySQL, REST API"
    },
    {
      name: "Alcohol Detection & Engine Locking System",
      desc: "Safety-focused IoT solution preventing drunk driving.",
      details: [
        "Alcohol detection using MQ-3 sensor",
        "Engine locking mechanism",
        "GPS-based location tracking"
      ],
      tech: "Arduino, MQ-3 Sensor, Java, GPS Module"
    }
  ];

  return (
    <div className="projects-wrapper">
      <BackgroundAnimation />

      <div className="projects-content">
        <h1 className="page-title">Projects</h1>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <h2 className="project-title">{project.name}</h2>
              <p className="project-desc">{project.desc}</p>

              <ul>
                {project.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <p className="project-tech">
                <span>Tech Stack:</span> {project.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
