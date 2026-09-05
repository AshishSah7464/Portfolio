import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-background">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
      </div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="availability">
            <span className="availability-dot"></span>
            Available for Opportunities
          </div>

          <p className="hero-greeting">
            Hi, I'm
          </p>

          <h1>
            Ashish <span>Sah</span>
          </h1>

          <h2>
            B.Sc. Computer Science Student
          </h2>

          <p className="hero-description">
            I build modern web applications and explore data-driven
            solutions using programming, analytics and machine learning.
          </p>

          <div className="hero-buttons">

            <Link to="/projects" className="btn primary-btn">
              View My Work
            </Link>

            <a href="/assets/Ashish-Sah-Resume.pdf"
               className="btn secondary-btn"
               download
            >
              Download Resume
            </a>
          </div>

          <div className="social-links">

            <a
              href="https://github.com/AshishSah7464"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ashish-sah-9a5797338/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.hackerrank.com/profile/ashishsah7464"
              target="_blank"
              rel="noreferrer"
              aria-label="HackerRank"
            >
              <SiHackerrank />
            </a>

          </div>

        </div>

        <div className="hero-image">

          <div className="image-ring">

            <div className="image-circle">

              <img
                src="/assets/avatar.jpg"
                alt="Ashish Sah"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/Ashu.jpeg";
                }}
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;