import "../styles/Skills.css";
import BackgroundAnimation from "../components/BackgroundAnimation";
import certifications from "../data/certifications";
import { useNavigate } from "react-router-dom";

export default function Certifications() {
  const navigate = useNavigate();

  return (
    <div className="skills-wrapper">
      <BackgroundAnimation />

      <div className="skills-content">
        <h1 className="page-title">Certifications</h1>

        <div className="skills-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="skill-card glass-card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/certification/${cert.id}`)}
            >
              <h3>{cert.title}</h3>
              <p style={{ opacity: 0.8, marginTop: "8px" }}>
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
