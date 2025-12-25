import { useParams, useNavigate } from "react-router-dom";
import certifications from "../data/certifications";
import BackgroundAnimation from "../components/BackgroundAnimation";

export default function CertificationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const cert = certifications.find((c) => c.id === id);

  if (!cert) {
    return (
      <p style={{ color: "#fff", textAlign: "center" }}>
        Certification not found
      </p>
    );
  }

  return (
    <div className="skills-wrapper">
      <BackgroundAnimation />

      <div className="skills-content">
        <h1 className="page-title">{cert.title}</h1>

        <div className="glass-card" style={{ padding: "30px" }}>
          <p><strong>Issuer:</strong> {cert.issuer}</p>

          <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
            {cert.description}
          </p>

          {cert.file && (
            <div style={{ marginTop: "25px" }}>
              <iframe
                src={cert.file}
                title={cert.title}
                width="100%"
                height="500"
                style={{ borderRadius: "10px" }}
              />
            </div>
          )}

          <button
            className="contact-btn"
            style={{ marginTop: "25px" }}
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
