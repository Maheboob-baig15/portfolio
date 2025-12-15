import "../styles/Contact.css";
import BackgroundAnimation from "../components/BackgroundAnimation";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      
      {/* Background Animation */}
      <BackgroundAnimation />

      <div className="contact-content">
        <h1 className="page-title">Contact Me</h1>

        <div className="contact-container glass-card">
          
          <p className="contact-text">
            Feel free to reach out for collaboration, job opportunities, or even a friendly tech conversation!
          </p>

          {/* CONTACT INFO */}
          <div className="contact-info">
            <p><strong>Email:</strong> maheboob.baiig@gmail.com</p>
            <p><strong>Phone:</strong> +91 8073419490</p>
            <p><strong>Location:</strong> Bangalore, India</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="contact-icons">
            <a href="https://wa.me/918073419490" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/maheboob-baig15" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/maheboob-baig15" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
