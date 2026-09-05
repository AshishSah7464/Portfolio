import Reveal from "./Reveal";
import {
  FaLightbulb,
  FaTrophy,
  FaAward,
  FaCheckCircle,
  FaBookOpen,
} from "react-icons/fa";

function Additional() {
  const milestoneCards = [
    {
      icon: <FaTrophy style={{ color: "#eab308" }} />,
      year: "2024",
      tag: "Competition",
      title: "Eureka Pitching Competition – 2nd Position",
      description: "Secured Second Position in the Eureka Pitching Competition at MITACSC Alandi, Pune."
    },
    {
      icon: <FaLightbulb style={{ color: "#2563eb" }} />,
      year: "2024",
      tag: "Hackathon",
      title: "Smart India Hackathon 2024",
      description: "Part of the team selected for the Smart India Hackathon 2024 internal challenge. Contributed to problem-solving, idea innovation, and technical design."
    },
    {
      icon: <FaAward style={{ color: "#8b5cf6" }} />,
      year: "2024",
      tag: "Presentation",
      title: "Poster Presentation Participation",
      description: "Participated in the academic poster presentation event, presenting technical research concepts and project work."
    },
    {
      icon: <FaCheckCircle style={{ color: "#10b981" }} />,
      year: "2024",
      tag: "Certification",
      title: "C & DSA in C Programming",
      description: "Completed comprehensive training on Core C Programming, Data Structures & Algorithms (DSA), and Object-Oriented Programming (OOPs)."
    },
    {
      icon: <FaBookOpen style={{ color: "#0284c7" }} />,
      year: "2024",
      tag: "Course",
      title: "HTML5 & CSS3 Web Development",
      description: "Mastered frontend web development fundamentals, responsive layout design, HTML5 semantic markup, and CSS3 styling."
    },
    {
      icon: <FaCheckCircle style={{ color: "#06b6d4" }} />,
      year: "2024",
      tag: "Course",
      title: "MATLAB Programming & Electronics Applications",
      description: "Completed training in MATLAB programming and its practical applications in electronics, signal processing, and numerical computing."
    },
    {
      icon: <FaCheckCircle style={{ color: "#3b82f6" }} />,
      year: "2025",
      tag: "Certification",
      title: "Python for Data Science (Coursera)",
      description: "Earned certification in Python programming for data science, data manipulation with Pandas & NumPy, and analytical modeling."
    },
    {
      icon: <FaCheckCircle style={{ color: "#f97316" }} />,
      year: "2025",
      tag: "Certification",
      title: "Java Programming Masterclass (Udemy)",
      description: "Completed masterclass in Core Java development, object-oriented design patterns, collections framework, and software best practices."
    }
  ];

  return (
    <section className="additional section" id="additional">
      <Reveal>
        <div className="section-container">

          {/* Section Heading */}
          <div className="section-heading" style={{ textAlign: "left", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text-heading)" }}>
              Milestones Along The Way.
            </h2>
            <p
              className="section-subtitle-text"
              style={{
                background: "transparent",
                border: "none",
                borderRadius: 0,
                padding: 0,
                margin: "8px 0 0 0",
                fontFamily: "inherit",
                fontSize: "15px",
                color: "var(--text-secondary)",
                textTransform: "none",
                letterSpacing: "normal",
                display: "block"
              }}
            >
              Academic achievements, hackathons, certifications, courses, and presentations that have shaped my technical journey.
            </p>
          </div>

          {/* Milestones Card Grid */}
          <div className="milestones-grid-format">
            {milestoneCards.map((card, index) => (
              <div className="milestone-card" key={index}>

                {/* Top Row: Icon Badge & Year */}
                <div className="milestone-card-top">
                  <div className="milestone-icon-badge">
                    {card.icon}
                  </div>
                  <span className="milestone-year">{card.year}</span>
                </div>

                {/* Category Pill Tag */}
                <span className="milestone-category-tag">{card.tag}</span>

                {/* Title & Description */}
                <h4>{card.title}</h4>
                <p className="milestone-desc">{card.description}</p>

              </div>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default Additional;