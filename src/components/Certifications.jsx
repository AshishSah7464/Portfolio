import Reveal from "./Reveal";
import { FaExternalLinkAlt } from "react-icons/fa";

function Certifications() {
  const certificationsData = [
    {
      title: "Microsoft Excel 101 – The Ultimate Beginner's Workshop",
      provider: "EDUTA Incorporation Canada",
      date: "Aug 2026",
      file: "/assets/excel-certificate.pdf",
      thumbnail: "/IMG-excel-certificate.jpg",
    },
    {
      title: "Mathletics Certificate",
      provider: "Mathematics Competition",
      date: "2024",
      file: "/IMG-20250412-WA0014.jpg",
      thumbnail: "/IMG-20250412-WA0014.jpg",
    },
    {
      title: "C & OOPs Certificate",
      provider: "Programming Workshop",
      date: "2024",
      file: "/IMG-20250412-WA0015.jpg",
      thumbnail: "/IMG-20250412-WA0015.jpg",
    },
    {
      title: "SIH 2024 Certificate",
      provider: "Smart India Hackathon",
      date: "2024",
      file: "/IMG-20250412-WA0016.jpg",
      thumbnail: "/IMG-20250412-WA0016.jpg",
    }
  ];

  return (
    <section className="certifications section" id="certifications" style={{ paddingTop: "40px" }}>
      <Reveal>
        <div className="section-container">

          {/* Header */}
          <div className="section-heading" style={{ textAlign: "left", marginBottom: "40px" }}>
            <p style={{ background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: "0 0 6px 0", fontFamily: "monospace", letterSpacing: "1px", color: "var(--accent-primary)", fontSize: "13px", fontWeight: "700", textTransform: "uppercase" }}>
              CERTIFICATIONS
            </p>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "var(--text-heading)" }}>
              Proof of the work.
            </h2>
          </div>

          {/* Certifications Visual Card Grid matching Screenshot media_1788100375007.png */}
          <div className="certifications-grid-format">
            {certificationsData.map((cert, index) => (
              <a
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                className="cert-item-link"
                key={index}
              >
                {/* Rounded Frame Box */}
                <div className="cert-frame-box">
                  <img
                    src={cert.thumbnail}
                    alt={cert.title}
                    className="cert-frame-img"
                  />
                </div>

                {/* Text Info Below Frame */}
                <div className="cert-frame-info">
                  <h4>{cert.title}</h4>
                  <p className="cert-provider-name">{cert.provider}</p>
                  <span className="cert-date-link">
                    {cert.date} <FaExternalLinkAlt className="arrow-icon" />
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default Certifications;
