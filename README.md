# 🚀 Ashish Sah — Personal Portfolio & Technical Showcase

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A modern, responsive, multi-page personal developer portfolio built for **Ashish Sah** (B.Sc. Computer Science Student & Developer based in Pune, India). Designed with a light-mode aesthetic featuring crisp elevated cards, ambient blue glows, interactive skill matrix, expandable work experience timeline, framed certifications showcase, and verified PDF downloads.

---

## 💡 About Ashish Sah

- 🎓 **Education**: B.Sc. in Computer Science at MAEER's MIT Arts, Commerce & Science College, Alandi, Pune (CGPA: 8.0 / 10).
- 💼 **Experience**: Java Developer Intern at *Nileson IT Consulting (OPC) Pvt. Ltd.* (Pune, MH).
- 📊 **Domains of Focus**: Full Stack Web Development, Data Analytics, Business Analysis & Data Engineering.
- 🛠️ **Core Technologies**: Core Java, Python, SQL / MySQL, React.js, Power BI, HTML5/CSS3, Django, Git.

---

## ✨ Features & Highlights

- **📱 Multi-Page SPA Architecture**: Built using `react-router-dom v7` with clean route separation:
  - `/` — **Home**: Hero banner, greeting, 3D circular avatar with ambient double-ring glow, social quick-links, and PDF resume download button.
  - `/about` — **About**: Bio narrative, location & academic badges, plus **Technical Skillset Matrix**.
  - `/education-skills` — **Education & Skills**: Academic timeline cards (`MIT`, `DTP`, `SHS`) & categorized skill cards.
  - `/projects` — **Projects**: Featured portfolio showcase:
    - 🔴 **Zomato Restaurant Data Analytics project** (*Data Analyst / BI Engineer*) — Custom Zomato Red brand design (`#e23744`), feature bullet icons, and direct GitHub analytics repo link.
    - 💻 **CodeLab — Online Code Playground** — Interactive frontend code editor with live Vercel demo & GitHub repo.
    - 📈 **Sales E-Commerce Dashboard** — Data analytics dashboard analyzing 1000+ sales records, revenue trends, and regional performance.
  - `/experience` — **Work Experience**: Interactive **Java Developer Intern** experience card with key stats, expandable details accordion, skill tags, and PDF certificate viewer.
  - `/achievements` — **Achievements & Training**: Interactive Milestones grid (`SIH 2024`, `Eureka 2nd Position`, `Poster Presentation`), framed Certifications grid (*Microsoft Excel 101 – EDUTA Canada*, *Mathletics*, *C & OOPs*, *SIH 2024*), and Workshops filter list.
  - `/contact` — **Contact**: Interactive contact form, direct email/phone links, and social profile links.
- **🛠️ Technical Skillset Matrix**: 6-category expertise matrix (Languages & Tools, Frameworks & Web, Databases, Design & OS, Business Analysis, Soft Skills).
- **📜 Proof of Work (Certifications Grid)**: Framed certificate display showcasing verified certificates with direct preview links.
- **🎨 Custom UI & Micro-Interactions**: Custom CSS variable design system (`src/index.css`), floating white cards (`#ffffff`), soft blue ambient glow gradients, smooth hover transforms, and CSS micro-animations.
- **⚡ Fast Performance**: Powered by Vite 8.2.2 with instant HMR and lightweight bundle size.

---

## 🛠️ Tech Stack & Architecture

| Category | Technologies / Libraries Used |
| :--- | :--- |
| **Frontend Core** | React.js 19, JavaScript (ES6+), React Router DOM v7 |
| **Styling & Design** | Tailwind CSS v4, Custom CSS Variables (`src/index.css`), Flexbox & CSS Grid |
| **Icons & Animations** | React Icons (`react-icons/fa`, `react-icons/si`), Framer Motion |
| **Build System** | Vite 8.2.2 (`@vitejs/plugin-react`) |
| **Deployment & SPA Routing** | Vercel (`vercel.json` rewrite rules) |

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── assets/
│   │   ├── Ashish-Sah-Resume.pdf          # Downloadable PDF Resume
│   │   ├── java-internship-certificate.pdf # Java Internship PDF Certificate
│   │   ├── excel-certificate.pdf          # Microsoft Excel 101 PDF Certificate
│   │   ├── avatar.jpg                     # 3D Profile Avatar
│   │   ├── codelab.png                    # CodeLab Screenshot Preview
│   │   ├── sales-dashboard.png            # Sales Dashboard Screenshot
│   │   └── zomato.png                     # Zomato Analytics Banner
│   ├── IMG-excel-certificate.jpg          # Excel Certificate Thumbnail
│   ├── IMG-20250412-WA0014.jpg            # Mathletics Certificate Image
│   ├── IMG-20250412-WA0015.jpg            # C & OOPs Certificate Image
│   └── IMG-20250412-WA0016.jpg            # SIH 2024 Certificate Image
├── src/
│   ├── components/                        # Reusable UI Components
│   │   ├── About.jsx                      # Bio Card & Technical Skillset Matrix
│   │   ├── Additional.jsx                 # Interactive Milestones Grid
│   │   ├── Certifications.jsx             # Proof of Work Certificate Cards Grid
│   │   ├── Contact.jsx                    # Contact Form & Social Profiles
│   │   ├── Education.jsx                  # Academic Journey Timeline
│   │   ├── Experience.jsx                 # Interactive Work Experience Card
│   │   ├── Footer.jsx                     # Footer with Contact Links & Tagline
│   │   ├── Hero.jsx                       # Home Page Hero Banner & Avatar
│   │   ├── Navbar.jsx                     # Fixed Sticky Top Navbar
│   │   ├── Projects.jsx                   # Featured Projects Showcase & Zomato Brand Card
│   │   ├── Reveal.jsx                     # Scroll Animation Wrapper
│   │   ├── ScrollToTop.jsx                # Router Scroll Reset
│   │   ├── Skills.jsx                     # Skill Badges List
│   │   └── Training.jsx                   # Training & Workshops Timeline
│   ├── App.jsx                            # React Router Application Configuration
│   ├── main.jsx                           # Application Entry Point
│   └── index.css                          # Global Styles & Custom CSS Variables
├── vercel.json                            # Vercel SPA Routing Configuration
├── package.json                           # Dependencies & Build Scripts
└── README.md                              # Repository Documentation
```

---

## ⚡ Local Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- `npm` or `yarn`

### 1. Clone the Repository
```bash
git clone https://github.com/AshishSah7464/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory.

---

## 🔗 Connect & Links

- 📧 **Email**: [AshishSah7464@gmail.com](mailto:AshishSah7464@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/ashish-sah-9a5797338](https://www.linkedin.com/in/ashish-sah-9a5797338/)
- 🐙 **GitHub**: [github.com/AshishSah7464](https://github.com/AshishSah7464)
- 💻 **HackerRank**: [hackerrank.com/profile/ashishsah7464](https://www.hackerrank.com/profile/ashishsah7464)
- 📊 **Zomato Analytics Repo**: [github.com/AshishSah7464/Zomato-Data-Analytics-Project](https://github.com/AshishSah7464/Zomato-Data-Analytics-Project.git)
- ⚡ **CodeLab Live Demo**: [codelab-smoky.vercel.app](https://codelab-smoky.vercel.app/)

---

© 2026 Ashish Sah. Built with React & Vite.
