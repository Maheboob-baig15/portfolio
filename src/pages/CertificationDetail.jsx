import { useParams, useNavigate } from "react-router-dom";
import BackgroundAnimation from "../components/BackgroundAnimation";
import certifications from "../data/certifications";

export default function CertificationDetail() {
  const { id } = useParams();
  const goTo = useNavigate(); // 🔹 renamed from navigate

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
              {/* ACTION BUTTONS */}
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  marginBottom: "15px",
                  flexWrap: "wrap"
                }}
              >
                <a
                  href={cert.file}
                  download
                  className="resume-download"
                >
                  ⬇ Download Certificate
                </a>

                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                >
                  🔗 Open in New Tab
                </a>
              </div>

              {/* PDF PREVIEW */}
              <iframe
                src={cert.file}
                title={cert.title}
                width="100%"
                height="500"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}
              />
            </div>
          )}

          <button
            className="contact-btn"
            style={{ marginTop: "25px" }}
            onClick={() => goTo("/")}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
