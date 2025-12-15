import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">Maheboob.</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <a href="/resume.pdf" download className="resume-btn">Resume</a>
        </li>
      </ul>

      <div className="social-icons">
        <a href="https://wa.me/918073419490" target="_blank"><FaWhatsapp /></a>
        <a href="https://www.linkedin.com/in/maheboob-baig15" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/maheboob" target="_blank"><FaGithub /></a>
        <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
      </div>
    </nav>
  );
}
