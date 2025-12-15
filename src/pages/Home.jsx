import { motion } from "framer-motion";
import "../styles/Home.css";
import profilePic from "../assets/profile.jpg";
import BackgroundAnimation from "../components/BackgroundAnimation";

export default function Home() {
  return (
    <div className="home-wrapper">
      <BackgroundAnimation />

      <div className="home-container">
        <motion.div
          className="home-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="title">
            Hi, I'm <span className="highlight">Maheboob Baig</span>
          </h1>

          <h2 className="subtitle">
            Full Stack Java Developer & SAP Integration Associate
          </h2>

          <p className="description">
            I build scalable, secure, and cloud-integrated digital solutions with
            clean architecture and modern UI/UX principles.
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" download className="glass-btn">
              Download Resume
            </a>
            <a href="/contact" className="glass-btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="home-photo"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={profilePic} alt="profile" className="profile-img" />
        </motion.div>
      </div>
    </div>
  );
}
