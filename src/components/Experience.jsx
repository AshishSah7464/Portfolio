import { useState } from "react";
import Reveal from "./Reveal";
import {
  FaFilePdf,
  FaExternalLinkAlt,
  FaBriefcase,
  FaChevronDown,
  FaChevronUp,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Experience() {
  const [isExpanded, setIsExpanded] = useState(true); // Default expanded for primary internship

  const item = {
    id: 1,
    role: "Java Developer Intern",
    company: "Nileson IT Consulting (OPC) Pvt. Ltd.",
    location: "Pune, Maharashtra",
    period: "Aug 2025 – Nov 2025",
    typeLabel: "INTERNSHIP",
    typeIcon: <FaBriefcase />,
    description:
      "Gained intensive hands-on experience in Core Java development, object-oriented design patterns, collections framework, and structured software development workflows.",
    stats: [
      { label: "Duration", value: "3 Months" },
      { label: "Core Tech", value: "Java & OOPs" },
      { label: "Location", value: "Pune, MH" },
    ],
    points: [
      "Gained hands-on experience in Core Java including Object-Oriented Programming (OOPs), exception handling, collections, and file I/O operations.",
      "Developed mini-projects to strengthen real-world problem-solving and clean code architecture.",
      "Collaborated on structured programming tasks simulating an enterprise software development environment.",
      "Built a strong foundation in software design best practices, code debugging, and version control."
    ],
    skills: ["Core Java", "OOP", "Collections Framework", "Exception Handling", "File Handling", "Git"],
    pdfLink: "/assets/java-internship-certificate.pdf",
  };

  return (
    <section className="experience section" id="experience">
      <Reveal>
        <div className="section-container">

          {/* Section Heading */}
          <div className="section-heading" style={{ textAlign: "left", marginBottom: "36px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text-heading)" }}>
              Work & Internship Experience.
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", marginTop: "6px" }}>
              My professional software development internship journey.
            </p>
          </div>

          {/* Experience Card */}
          <div className="experience-timeline">
            <div className={`experience-interactive-card ${isExpanded ? "expanded" : ""}`}>

              {/* Header Row */}
              <div className="exp-card-header-row">
                <div className="exp-role-meta">
                  <span className="exp-badge-pill">
                    {item.typeIcon} {item.typeLabel}
                  </span>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                </div>

                <div className="exp-date-location">
                  <span className="exp-date-pill">
                    <FaCalendarAlt /> {item.period}
                  </span>
                  <span className="exp-loc-pill">
                    <FaMapMarkerAlt /> {item.location}
                  </span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="exp-summary-desc">{item.description}</p>

              {/* Interactive Key Stats */}
              <div className="exp-stats-row">
                {item.stats.map((stat, idx) => (
                  <div className="exp-stat-box" key={idx}>
                    <span className="stat-val">{stat.value}</span>
                    <span className="stat-lbl">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Expand / Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="exp-toggle-btn"
              >
                <span>{isExpanded ? "Hide Responsibilities & Details" : "View Highlights & Responsibilities"}</span>
                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {/* Accordion Content */}
              {isExpanded && (
                <div className="exp-accordion-body">
                  <ul className="exp-points-list">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <FaCheckCircle className="pt-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skill Tags */}
                  <div className="exp-skills-flex">
                    {item.skills.map((sk, sIdx) => (
                      <span className="exp-skill-tag" key={sIdx}>
                        {sk}
                      </span>
                    ))}
                  </div>

                  {/* Certificate Link */}
                  {item.pdfLink && (
                    <div className="exp-cert-action-box">
                      <a
                        href={item.pdfLink}
                        target="_blank"
                        rel="noreferrer"
                        className="exp-pdf-action-btn"
                      >
                        <FaFilePdf style={{ color: "#dc2626", fontSize: "16px" }} />
                        <span>View Certificate</span>
                        <FaExternalLinkAlt style={{ fontSize: "11px", opacity: 0.7 }} />
                      </a>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default Experience;