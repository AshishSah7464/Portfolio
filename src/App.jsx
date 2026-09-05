import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Additional from "./components/Additional";
import Certifications from "./components/Certifications";
import Training from "./components/Training";
import Contact from "./components/Contact";

function EducationSkillsView() {
  return (
    <div style={{ paddingTop: "40px" }}>
      <Education />
      <Skills />
    </div>
  );
}

function AchievementsView() {
  return (
    <div style={{ paddingTop: "40px" }}>
      <Additional />
      <Certifications />
      <Training />
    </div>
  );
}

function PageView({ children }) {
  return <div style={{ paddingTop: "40px" }}>{children}</div>;
}

function App() {
  return (
    <Router>
      <Navbar />

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<PageView><About /></PageView>} />
          <Route path="/education-skills" element={<EducationSkillsView />} />
          <Route path="/education" element={<EducationSkillsView />} />
          <Route path="/skills" element={<EducationSkillsView />} />
          <Route path="/projects" element={<PageView><Projects /></PageView>} />
          <Route path="/experience" element={<PageView><Experience /></PageView>} />
          <Route path="/achievements" element={<AchievementsView />} />
          <Route path="/achievement" element={<AchievementsView />} />
          <Route path="/training" element={<AchievementsView />} />
          <Route path="/contact" element={<PageView><Contact /></PageView>} />
          {/* Fallback route */}
          <Route path="*" element={<Hero />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;