import Reveal from "./Reveal";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaPlay,
  FaUtensils,
  FaMotorcycle,
  FaStar,
} from "react-icons/fa";

const projects = [
  {
    id: "zomato",
    title: "Zomato Restaurant Data Analytics project",
    role: "Data Analyst / BI Engineer",
    duration: "September 2026",
    brandName: "zomato",
    tagline: "Food Delivery & Dining Experience",
    image: "/assets/zomato.png",
    isBrandCard: true,
    brandColor: "#e23744",
    highlights: [
      { icon: <FaUtensils />, text: "Discover the best restaurants & cuisines near you" },
      { icon: <FaMotorcycle />, text: "Fast & reliable food delivery at your doorstep" },
      { icon: <FaStar />, text: "Ratings & reviews to help you make the right choice" }
    ],
    description:
      "An end-to-end Zomato Restaurant Data Analytics project analyzing customer orders, restaurant performance, dining trends, and pricing insights.",
    technologies: ["Python", "SQL", "Power BI", "Pandas", "Excel"],
    github: "https://github.com/AshishSah7464/Zomato-Data-Analytics-Project.git",
    demo: "https://github.com/AshishSah7464/Zomato-Data-Analytics-Project.git",
  },
  {
    id: "codelab",
    title: "CodeLab — Online Code Playground",
    image: "/assets/codelab.png",
    description:
      "An interactive online code editor and playground environment for writing, executing, and testing frontend web code in real-time.",
    technologies: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Vercel"],
    github: "https://github.com/AshishSah7464/Codelab",
    demo: "https://codelab-smoky.vercel.app/",
  },
  {
    id: "sales",
    title: "Sales E-Commerce Dashboard",
    image: "/assets/sales-dashboard.png",
    description:
      "An interactive data analytics dashboard analyzing 1000+ sales records, revenue trends, top products, and regional performance.",
    technologies: ["SQL", "Python", "Power BI", "Pandas", "Excel"],
    github: "https://github.com/AshishSah7464",
    demo: "#",
  }
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <Reveal>
        <div className="section-container">

          {/* Section Heading */}
          <div className="section-heading" style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: "0 0 6px 0", fontFamily: "monospace", letterSpacing: "1px", color: "var(--accent-primary)", fontSize: "13px", fontWeight: "700", textTransform: "uppercase" }}>
              PORTFOLIO SHOWCASE
            </p>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text-heading)" }}>
              Featured Projects.
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", marginTop: "6px", maxWidth: "600px", marginInline: "auto" }}>
              Web applications, data analytics, and software projects I've designed and engineered.
            </p>
          </div>

          {/* Creative Projects Grid */}
          <div className="creative-projects-grid">
            {projects.map((project) => (
              <div
                className={`creative-project-card ${project.isBrandCard ? "zomato-brand-card" : ""}`}
                key={project.id}
              >

                {/* Zomato Custom Brand Card Layout */}
                {project.isBrandCard ? (
                  <div className="zomato-card-container">

                    {/* Red Zomato Header Banner */}
                    <div className="zomato-card-header">
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "10px" }}>
                        <span style={{ background: "rgba(255,255,255,0.25)", padding: "4px 12px", borderRadius: "999px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "0.5px" }}>
                          {project.role}
                        </span>
                        <span style={{ background: "rgba(0,0,0,0.25)", padding: "4px 12px", borderRadius: "999px", fontSize: "11.5px", fontWeight: "600" }}>
                          {project.duration}
                        </span>
                      </div>
                      <div className="zomato-logo-title">zomato</div>
                      <p className="zomato-subtitle">{project.title}</p>
                    </div>

                    {/* Zomato Feature Bullet List matching reference image */}
                    <div className="zomato-features-list">
                      {project.highlights.map((item, hIdx) => (
                        <div className="zomato-feature-item" key={hIdx}>
                          <span className="zomato-icon-circle">{item.icon}</span>
                          <span className="zomato-feature-text">{item.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Card Content & Actions */}
                    <div className="zomato-card-body">
                      <p className="project-card-desc" style={{ color: "#ffffff", opacity: 0.9 }}>
                        {project.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="technology-list">
                        {project.technologies.map((tech, techIdx) => (
                          <span className="tech-badge-pill zomato-tech-pill" key={techIdx}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="project-buttons" style={{ borderTopColor: "rgba(255, 255, 255, 0.2)" }}>
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            className="project-btn zomato-btn-white"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub /> Repository
                          </a>
                        )}

                        {project.demo !== "#" && (
                          <a
                            href={project.demo}
                            className="project-btn zomato-btn-dark"
                            target="_blank"
                            rel="noreferrer"
                          >
                            View Analytics <FaExternalLinkAlt style={{ fontSize: "11px" }} />
                          </a>
                        )}
                      </div>

                    </div>

                  </div>
                ) : (
                  /* Standard Image Card Layout */
                  <>
                    <div
                      className="project-banner-header"
                      style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.1), rgba(15, 23, 42, 0.6)), url(${project.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "top center",
                      }}
                    >
                      <a
                        href={project.demo !== "#" ? project.demo : project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="banner-hover-overlay"
                      >
                        <span className="overlay-pill">
                          <FaPlay style={{ fontSize: "10px" }} /> Launch App <FaExternalLinkAlt style={{ fontSize: "11px" }} />
                        </span>
                      </a>
                    </div>

                    <div className="project-card-body">
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-desc">{project.description}</p>

                      <div className="technology-list">
                        {project.technologies.map((tech, techIdx) => (
                          <span className="tech-badge-pill" key={techIdx}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="project-buttons">
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            className="project-btn secondary-btn-link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub /> Source Code
                          </a>
                        )}

                        {project.demo !== "#" && (
                          <a
                            href={project.demo}
                            className="project-btn primary-demo-btn"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Demo <FaExternalLinkAlt style={{ fontSize: "11px" }} />
                          </a>
                        )}
                      </div>
                    </div>
                  </>
                )}

              </div>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default Projects;