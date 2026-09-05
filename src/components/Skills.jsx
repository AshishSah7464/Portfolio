import Reveal from "./Reveal";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaFlask,
  FaDatabase,
  FaCode,
  FaBrain,
  FaChartBar,
  FaComments,
  FaClipboardCheck,
  FaUsers,
} from "react-icons/fa";

import {
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
      ],
    },
    {
      title: "Programming & Database",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <FaCode /> },
        { name: "Flask", icon: <FaFlask /> },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: <FaBrain /> },
        { name: "Logical Thinking", icon: <FaBrain /> },
        { name: "Data Analysis", icon: <FaChartBar /> },
        { name: "Data Cleaning", icon: <FaChartBar /> },
        { name: "Data Visualization", icon: <FaChartBar /> },
        { name: "Communication", icon: <FaComments /> },
        { name: "Learning Agility", icon: <FaBrain /> },
      ],
    },
    {
      title: "Business Analysis",
      skills: [
        { name: "Requirement Gathering", icon: <FaClipboardCheck /> },
        { name: "Business Process Analysis", icon: <FaClipboardCheck /> },
        { name: "Workflow Analysis", icon: <FaClipboardCheck /> },
        { name: "Gap Analysis", icon: <FaClipboardCheck /> },
        { name: "Stakeholder Communication", icon: <FaUsers /> },
        { name: "SDLC", icon: <FaCode /> },
      ],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <Reveal>
        <div className="section-container">

          <div className="section-heading">
            <p>What I Know</p>
            <h2>
              My <span>Skills</span>
            </h2>
          </div>

          <div className="skills-container">
            {skillCategories.map((category) => (
              <div className="skill-category" key={category.title}>
                <h3>{category.title}</h3>
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <div className="skill-icon">{skill.icon}</div>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default Skills;