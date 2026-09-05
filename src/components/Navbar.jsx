import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          Ashish Sah<span>.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/education-skills" onClick={closeMenu}>
            Education & Skills
          </NavLink>

          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>

          <NavLink to="/experience" onClick={closeMenu}>
            Experience
          </NavLink>

          <NavLink to="/achievements" onClick={closeMenu}>
            Achievements & Training
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;