function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-container">

        {/* Left Side Quote Statement */}
        <div className="footer-quote">
          <h2>A work in progress.</h2>
          <h2>Just like every good product.</h2>
          <p>I hope it left you with a bit of curiosity and inspiration.</p>
        </div>

        {/* Right Side Columns */}
        <div className="footer-nav-columns">

          <div className="footer-col">
            <h4>CONTACT</h4>
            <a href="mailto:AshishSah7464@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/ashish-sah-9a5797338/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/AshishSah7464"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.hackerrank.com/profile/ashishsah7464"
              target="_blank"
              rel="noreferrer"
            >
              HackerRank
            </a>
          </div>

        </div>

      </div>

      <div className="footer-bottom-bar">
        <p className="copyright">© 2026 Ashish Sah. All Rights Reserved.</p>
        <p className="tagline">B.SC. COMPUTER SCIENCE STUDENT x DEVELOPER</p>
      </div>
    </footer>
  );
}

export default Footer;