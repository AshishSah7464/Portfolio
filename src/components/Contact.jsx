import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus("Message ready to send!");

    console.log("Contact Form:", formData);
  };

  return (
    <section className="contact section" id="contact">
      <div className="section-container">

        <div className="section-heading">
          <p>Get In Touch</p>

          <h2>
            Let's build something <span>amazing together</span>.
          </h2>
        </div>

        <div className="contact-container">

          {/* Contact Information */}
          <div className="contact-info">

            <h3>Let's Connect</h3>

            <p>
              I'm currently looking for new opportunities as a Computer Science student and Developer.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <span className="contact-icon">
                  <FaEnvelope />
                </span>

                <div>
                  <h4>Email</h4>

                  <a href="mailto:AshishSah7464@gmail.com">
                    AshishSah7464@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <FaPhone />
                </span>

                <div>
                  <h4>Phone</h4>

                  <a href="tel:+917464077871">
                    +91 7464077871
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <FaMapMarkerAlt />
                </span>

                <div>
                  <h4>Location</h4>

                  <p>Pune, Maharashtra, India</p>
                </div>
              </div>

            </div>

            <div style={{ marginTop: "24px" }}>
              <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--text-heading)", marginBottom: "12px" }}>
                Social Profiles
              </h4>

              <div className="contact-socials">

                <a
                  href="https://www.linkedin.com/in/ashish-sah-9a5797338/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <FaLinkedinIn style={{ color: "#0077b5" }} /> LinkedIn
                  </span>
                  <FaExternalLinkAlt style={{ fontSize: "12px", opacity: 0.6 }} />
                </a>

                <a
                  href="https://github.com/AshishSah7464"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <FaGithub style={{ color: "#0f172a" }} /> GitHub
                  </span>
                  <FaExternalLinkAlt style={{ fontSize: "12px", opacity: 0.6 }} />
                </a>

                <a
                  href="https://www.hackerrank.com/profile/ashishsah7464"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <SiHackerrank style={{ color: "#2ec866" }} /> HackerRank
                  </span>
                  <FaExternalLinkAlt style={{ fontSize: "12px", opacity: 0.6 }} />
                </a>

              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Your Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-btn"
            >
              Send Message
            </button>

            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;