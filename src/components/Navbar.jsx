import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Maheboob.</div>

      {/* Hamburger for mobile */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Desktop Menu */}
      <ul className="nav-links desktop-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <a href="/resume.pdf" target="_blank" className="resume-btn">
            Resume
          </a>
        </li>
      </ul>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <li onClick={closeMenu}><Link to="/">Home</Link></li>
        <li onClick={closeMenu}><Link to="/about">About</Link></li>
        <li onClick={closeMenu}><Link to="/skills">Skills</Link></li>
        <li onClick={closeMenu}><Link to="/projects">Projects</Link></li>
        <li onClick={closeMenu}><Link to="/contact">Contact</Link></li>
        <li onClick={closeMenu}>
          <a href="/resume.pdf" target="_blank" className="resume-btn">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
