import Reveal from "./Reveal";

function Education() {
  const educationData = [
    {
      degree: "B.Sc. in Computer Science",
      institution: "MAEER's MIT Arts, Commerce & Science College, Alandi (D), Pune",
      duration: "2023 – 2026",
      score: "CGPA: 8 / 10",
      initials: "MIT",
    },
    {
      degree: "12th – HSC (Science / PCMB)",
      institution: "D.T. Patil Junior College, Pune",
      duration: "2021 – 2023",
      score: "Percentage: 51.83%",
      initials: "DTP",
    },
    {
      degree: "10th – SSC",
      institution: "Siddheshwar High School, Pune",
      duration: "2020 – 2021",
      score: "Percentage: 72.40%",
      initials: "SHS",
    }
  ];

  return (
    <section className="education section" id="education">
      <Reveal>
        <div className="section-container">

          <div className="section-heading">
            <p>My Academic Journey</p>

            <h2>
              <span>Education</span>
            </h2>
          </div>

          {/* Education List Layout */}
          <div className="education-list-wrapper" style={{ maxWidth: "850px", margin: "auto" }}>
            {educationData.map((item, index) => (
              <div className="education-row-card" key={index}>

                {/* Circular Badge Icon */}
                <div className="education-badge">
                  <span>{item.initials}</span>
                </div>

                {/* Content Info */}
                <div className="education-row-content">
                  <h3>{item.degree}</h3>
                  <p className="education-institution">{item.institution}</p>
                  <div className="education-meta">
                    <span className="education-duration">{item.duration}</span>
                    <span className="education-dot">•</span>
                    <span className="education-score">{item.score}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default Education;