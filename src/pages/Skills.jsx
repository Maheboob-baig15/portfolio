import "../styles/Skills.css";
import BackgroundAnimation from "../components/BackgroundAnimation";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"]
    },
    {
      title: "Backend",
      items: ["Java", "Spring Boot", "Hibernate", "REST APIs"]
    },
    {
      title: "Cloud & Integration",
      items: ["AWS Basics", "SAP BTP", "SAP Integration Suite"]
    },
    {
      title: "Database & Tools",
      items: ["MySQL", "Git", "GitHub", "Postman"]
    }
  ];

  return (
    <div className="skills-wrapper">
      
      {/* Background Animation */}
      <BackgroundAnimation />

      <div className="skills-content">
        <h1 className="page-title">Skills</h1>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card glass-card">
              <h2>{group.title}</h2>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
