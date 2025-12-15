import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Maheboob.</div>

      {/* Hamburger Icon (Mobile Only) */}
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
        <li><a href="/resume.pdf" className="resume-btn">Resume</a></li>
      </ul>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="nav-links mobile-menu">
          <li onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/about">About</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/skills">Skills</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/projects">Projects</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/contact">Contact</Link></li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="/resume.pdf" className="resume-btn">Resume</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
