import Reveal from "./Reveal";
import {
  FaCode,
  FaTerminal,
  FaDatabase,
  FaLayerGroup,
  FaLightbulb,
  FaUsers,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";

function About() {
  const skillMatrix = [
    {
      title: "Languages & Tools",
      icon: <FaCode style={{ color: "#2563eb" }} />,
      bg: "#eff6ff",
      skills: [
        "Core Java",
        "C Programming",
        "Python",
        "Javascript",
        "SQL",
        "Power BI",
        "Microsoft Excel (Pivot Tables, Dashboards)",
      ],
    },
    {
      title: "Frameworks & Web",
      icon: <FaTerminal style={{ color: "#9333ea" }} />,
      bg: "#f3e8ff",
      skills: ["Django", "HTML5", "CSS3", "React js"],
    },
    {
      title: "Databases",
      icon: <FaDatabase style={{ color: "#059669" }} />,
      bg: "#ecfdf5",
      skills: ["MySQL", "SQL (Basic)", "DBMS"],
    },
    {
      title: "Design & OS",
      icon: <FaLayerGroup style={{ color: "#ea580c" }} />,
      bg: "#fff7ed",
      skills: ["Figma Wireframing", "Windows", "Linux (Basic)", "Git", "GitHub"],
    },
    {
      title: "Business Analysis",
      icon: <FaLightbulb style={{ color: "#7c3aed" }} />,
      bg: "#f3e8ff",
      skills: [
        "Requirement Gathering",
        "Business Process Analysis",
        "Workflow Analysis",
        "Gap Analysis",
        "Stakeholder Communication",
        "SDLC",
      ],
    },
    {
      title: "Soft Skills",
      icon: <FaUsers style={{ color: "#db2777" }} />,
      bg: "#fce7f3",
      skills: [
        "Problem Solving",
        "Logical Thinking",
        "Data Cleaning",
        "Data Visualization",
        "Communication",
        "Learning Agility",
      ],
    },
  ];

  return (
    <section className="about section" id="about">
      <Reveal>
        <div className="section-container" style={{ maxWidth: "1050px" }}>

          {/* Section 1: Bio Card matching media_1788152964666.png */}
          <div className="about-bio-card">
            <p className="about-greeting-tag">Namaste I'm</p>

            <h1 className="about-hero-name">
              Ashish <br />
              Santosh Sah.
            </h1>

            <p className="about-subheading">
              A final-year Computer Science student based in Pune, India.
            </p>

            <div className="about-narrative">
              <p>
                My journey started with software development, where I learned how systems
                are built and how technology solves problems. While building projects, I
                became increasingly interested in data analytics—why patterns exist, how
                raw data turns into strategic business decisions, and how interactive
                dashboards empower teams.
              </p>

              <p>
                That curiosity eventually led me to{" "}
                <strong>Data Analysis & Data Engineering</strong>.
              </p>

              <p>
                Today, I enjoy working at the intersection of data and software engineering,
                combining <strong>Python</strong>, <strong>SQL</strong>, <strong>Power BI</strong>, and{" "}
                <strong>Java</strong> to create insights and applications that are useful,
                intuitive, and meaningful.
              </p>
            </div>

            {/* Badges Footer */}
            <div className="about-badges-footer">
              <span className="badge-pill blue-badge">
                <FaMapMarkerAlt /> Bhosari, Pune – 411039
              </span>
              <span className="badge-pill green-badge">
                <FaGraduationCap /> MAEER's MIT ACSC (CGPA 8.0/10)
              </span>
            </div>
          </div>

          {/* Section 2: Technical Skillset Matrix matching media_1788152943577.png */}
          <div className="about-matrix-section" style={{ marginTop: "64px" }}>
            <div className="section-heading" style={{ textAlign: "left", marginBottom: "36px" }}>
              <p
                style={{
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  margin: "0 0 6px 0",
                  fontFamily: "monospace",
                  letterSpacing: "1px",
                  color: "var(--accent-primary)",
                  fontSize: "13px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                EXPERTISE
              </p>
              <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text-heading)" }}>
                Technical Skillset Matrix
              </h2>
            </div>

            {/* 6 Skill Cards Grid */}
            <div className="matrix-grid">
              {skillMatrix.map((item, idx) => (
                <div className="matrix-card" key={idx}>

                  {/* Card Header */}
                  <div className="matrix-card-header">
                    <div className="matrix-icon-box" style={{ background: item.bg }}>
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                  </div>

                  {/* Skill Pill Badges */}
                  <div className="matrix-pills-flex">
                    {item.skills.map((skill, sIdx) => (
                      <span className="matrix-skill-pill" key={sIdx}>
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default About;