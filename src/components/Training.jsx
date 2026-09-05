import { useState } from "react";
import Reveal from "./Reveal";
import {
  FaLaptopCode,
  FaUsers,
  FaHtml5,
  FaCertificate,
  FaChevronDown,
  FaChevronUp,
  FaCalendarAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Training() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedId, setExpandedId] = useState(1);

  const workshops = [
    {
      id: 1,
      category: "technical",
      title: "C & OOPs Workshop & Certification",
      provider: "Technical Training Workshop",
      period: "Jan 2024",
      typeLabel: "PROGRAMMING WORKSHOP",
      typeIcon: <FaLaptopCode />,
      description:
        "Intensive training in Core C programming fundamentals, memory management, data structures, and Object-Oriented Programming (OOPs) design patterns.",
      stats: [
        { label: "Focus", value: "C & OOPs" },
        { label: "Duration", value: "Workshop" },
        { label: "Certificate", value: "Verified" },
      ],
      points: [
        "Mastered Core C syntax, memory allocation, pointers, and file operations.",
        "Implemented key Object-Oriented Programming (OOPs) concepts including Encapsulation, Inheritance, and Polymorphism.",
        "Built modular C programs simulating algorithmic logic and data structures."
      ],
      skills: ["C Programming", "OOPs", "Data Structures", "Pointers", "Memory Management"],
      certLink: "/IMG-20250412-WA0015.jpg",
      certName: "View C & OOPs Certificate",
    },
    {
      id: 2,
      category: "hackathon",
      title: "Smart India Hackathon 2024 Internal Challenge",
      provider: "Ministry of Education / Institute Innovation Council",
      period: "Aug 2024",
      typeLabel: "HACKATHON EVENT",
      typeIcon: <FaUsers />,
      description:
        "Internal Hackathon innovation challenge focused on analyzing national problem statements, rapid prototyping, and product design.",
      stats: [
        { label: "Challenge", value: "SIH 2024" },
        { label: "Role", value: "Developer" },
        { label: "Certificate", value: "Issued" },
      ],
      points: [
        "Analyzed real-world problem statements and conceptualized technical software architecture.",
        "Collaborated with cross-functional team members under strict submission deadlines.",
        "Presented solution prototype during institute evaluation rounds."
      ],
      skills: ["System Design", "Rapid Prototyping", "Problem Solving", "Teamwork"],
      certLink: "/IMG-20250412-WA0016.jpg",
      certName: "View SIH 2024 Certificate",
    },
    {
      id: 3,
      category: "technical",
      title: "HTML5 & CSS3 Web Development Workshop",
      provider: "Frontend Web Training",
      period: "Jan 2024",
      typeLabel: "FRONTEND WORKSHOP",
      typeIcon: <FaHtml5 />,
      description:
        "Hands-on workshop covering semantic HTML5 structure, modern CSS3 styling, Flexbox layout, and responsive web design patterns.",
      stats: [
        { label: "Focus", value: "Frontend UI" },
        { label: "Stack", value: "HTML5 / CSS3" },
        { label: "Output", value: "Web Pages" },
      ],
      points: [
        "Built responsive web layouts with mobile-first CSS media queries.",
        "Applied modern CSS Flexbox and Grid container layouts for clean UI hierarchy.",
        "Optimized web assets and accessibility markup standards."
      ],
      skills: ["HTML5", "CSS3", "Flexbox", "Responsive Web Design", "UI Design"],
      certLink: null,
      certName: null,
    },
    {
      id: 4,
      category: "domain",
      title: "Mathletics Mathematics & Analytical Competition",
      provider: "Academic Mathematics Association",
      period: "2024",
      typeLabel: "MATHEMATICS COMPETITION",
      typeIcon: <FaCertificate />,
      description:
        "Competitive training and problem-solving event testing advanced analytical reasoning, discrete mathematics, and numerical logic.",
      stats: [
        { label: "Domain", value: "Analytics" },
        { label: "Type", value: "Competition" },
        { label: "Certificate", value: "Awarded" },
      ],
      points: [
        "Applied discrete mathematics and logical algorithms to solve quantitative challenges.",
        "Strengthened mathematical logic, pattern recognition, and problem-solving speed."
      ],
      skills: ["Analytical Reasoning", "Mathematics", "Logical Thinking", "Problem Solving"],
      certLink: "/IMG-20250412-WA0014.jpg",
      certName: "View Mathletics Certificate",
    }
  ];

  const filteredWorkshops =
    activeTab === "all"
      ? workshops
      : workshops.filter((item) => item.category === activeTab);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="training section" id="training" style={{ paddingTop: "40px" }}>
      <Reveal>
        <div className="section-container">

          {/* Section Heading */}
          <div className="section-heading" style={{ textAlign: "left", marginBottom: "32px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text-heading)" }}>
              Training & Workshops.
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", marginTop: "6px" }}>
              Technical workshops, hackathons, and certified learning programs.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="exp-filter-tabs" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "36px" }}>
            {[
              { id: "all", label: "All Workshops & Training" },
              { id: "technical", label: "Technical Workshops" },
              { id: "hackathon", label: "Hackathons & Events" },
              { id: "domain", label: "Competitions & Analytics" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`exp-tab-btn ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Workshop Interactive Cards Timeline */}
          <div className="experience-timeline" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {filteredWorkshops.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  className={`experience-interactive-card ${isExpanded ? "expanded" : ""}`}
                  key={item.id}
                >
                  {/* Header Row */}
                  <div className="exp-card-header-row">
                    <div className="exp-role-meta">
                      <span className="exp-badge-pill">
                        {item.typeIcon} {item.typeLabel}
                      </span>
                      <h3>{item.title}</h3>
                      <h4>{item.provider}</h4>
                    </div>

                    <div className="exp-date-location">
                      <span className="exp-date-pill">
                        <FaCalendarAlt /> {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="exp-summary-desc">{item.description}</p>

                  {/* Key Stats */}
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
                    onClick={() => toggleExpand(item.id)}
                    className="exp-toggle-btn"
                  >
                    <span>{isExpanded ? "Hide Highlights & Key Learnings" : "View Highlights & Key Learnings"}</span>
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

                      {/* Certificate Link Button if available */}
                      {item.certLink && (
                        <div className="exp-cert-action-box">
                          <a
                            href={item.certLink}
                            target="_blank"
                            rel="noreferrer"
                            className="exp-pdf-action-btn"
                          >
                            <FaCertificate style={{ color: "var(--accent-primary)", fontSize: "16px" }} />
                            <span>{item.certName}</span>
                            <FaExternalLinkAlt style={{ fontSize: "11px", opacity: 0.7 }} />
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default Training;