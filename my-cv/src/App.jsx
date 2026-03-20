// =============================================
//  Abdullah Tallat — CV
//  Paste this into: src/App.jsx
//  Run: npm run dev
// =============================================

import "./App.css";

// ── DATA ──────────────────────────────────────
const data = {
  name: { first: "Abdullah", last: "Tallat" },
  title: "Software Engineering Student",
  university: "University of Chenab",
  dob: "23 Aug 2004",
  about:
    "Passionate and motivated student with a strong eagerness to learn, grow, and contribute. Dedicated to developing both academic knowledge and practical skills, with a proactive mindset and enthusiasm for tackling new challenges in Software Engineering and Cyber Security.",

  contact: [
    { icon: "✉", label: "abhiullah64@gmail.com", href: "mailto:abhiullah64@gmail.com" },
    { icon: "📱", label: "(+92) 308 6260186", href: null },
    { icon: "📍", label: "Gujrat, Pakistan", href: null },
    { icon: "💬", label: "WhatsApp: +92 308 6260186", href: null },
    {
      icon: "🔗",
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/abdullah-tallat-537319335",
    },
  ],

  skills: [
    { name: "Object-Oriented Programming", pct: 88 },
    { name: "Database Systems", pct: 82 },
    { name: "Cyber Security", pct: 80 },
    { name: "Data Structures & Algorithms", pct: 78 },
    { name: "MS Office Suite", pct: 90 },
    { name: "Problem Solving", pct: 85 },
    { name: "Project Management", pct: 75 },
  ],

  languages: [
    { lang: "Urdu", level: "Native" },
    { lang: "English", level: "B2" },
    { lang: "German", level: "A1" },
  ],

  interests: ["Cyber Security", "AI & ML", "Software Dev", "Networking", "Problem Solving", "Open Source"],

  education: [
    {
      degree: "Bachelor of Software Engineering",
      school: "The University of Chenab",
      location: "Gujrat, Pakistan",
      period: "Oct 2023 – Present",
      grade: "A+",
      tag: "Engineering",
      coursework:
        "Programming Fundamentals, OOP, Digital Logic Design, Database Systems, Computer Networks, Data Structures & Algorithms, Artificial Intelligence, Information Security, Software Engineering, Probability & Statistics, Discrete Structures, Linear Algebra, Calculus & Analytical Geometry, Multivariable Calculus.",
    },
    {
      degree: "Higher Secondary School Certificate (HSSC)",
      school: "Govt. Zamindar Graduate College",
      location: "Gujrat, Pakistan",
      period: "Aug 2021 – Dec 2023",
      grade: "A",
      tag: "Pre-Engineering",
      coursework: null,
    },
    {
      degree: "Matriculation (SSC)",
      school: "Allied School (Boys) Mohammadan Campus, G.T Road",
      location: "Gujrat, Pakistan",
      period: "Mar 2019 – Oct 2021",
      grade: "A+",
      tag: null,
      coursework: null,
    },
  ],

  certifications: [
    {
      title: "Malware Analysis & Introduction to Assembly Language",
      issuer: "IBM via Coursera",
      date: "May 2025",
      link: "https://coursera.org/verify/T78FF98GJGQD",
      color: "#f87171",
      icon: "🛡",
    },
    {
      title: "Vulnerability Scanning with Nmap: Network Scanning",
      issuer: "Coursera",
      date: "Dec 2024",
      link: "https://coursera.org/verify/1EQ97Z5HBGQF",
      color: "#60a5fa",
      icon: "🔍",
    },
    {
      title: "Cyber Security Crash Course",
      issuer: "DiceCamp",
      date: "2024",
      link: "https://dicecamp.com/lms/certificate-public-link/fJkDXvIc02FOP4hq7oLnTeyUA3QYR5ubwBjsMSVxWCldzt19GN",
      color: "#a78bfa",
      icon: "🔐",
    },
    {
      title: "Foundations of Project Management",
      issuer: "Google via Coursera",
      date: "Feb 2025",
      link: "https://coursera.org/verify/EETJOY038HVE",
      color: "#34d399",
      icon: "📋",
    },
    {
      title: "Requirement Gathering in Business Analysis",
      issuer: "Microsoft via Coursera",
      date: "Apr 2025",
      link: "https://coursera.org/verify/WVHG98M9LS78",
      color: "#fbbf24",
      icon: "📊",
    },
  ],

  techTags: [
    "Object-Oriented Programming","Data Structures & Algorithms","Database Systems (SQL)",
    "Computer Networks","Cyber Security","Artificial Intelligence","Information Security",
    "Digital Logic Design","MS Word","MS Excel","MS PowerPoint","Project Management",
    "Business Analysis","Critical Thinking","Communication Skills","Problem Solving",
  ],
};

// ── SMALL COMPONENTS ──────────────────────────

function SkillBar({ name, pct }) {
  return (
    <div className="skill-item">
      <span className="skill-label">{name}</span>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function SectionHead({ num, title }) {
  return (
    <div className="sec-head">
      <span className="sec-num">{num}</span>
      <h2 className="sec-title">{title}</h2>
    </div>
  );
}

function EduCard({ item }) {
  return (
    <div className="edu-card">
      <div className="edu-icon">🎓</div>
      <div className="edu-body">
        <div className="edu-top">
          <div>
            <h4 className="edu-degree">{item.degree}</h4>
            <p className="edu-school">{item.school} — {item.location}</p>
          </div>
          <span className="edu-date">{item.period}</span>
        </div>
        <div className="edu-badges">
          <span className="grade-badge">Grade: {item.grade}</span>
          {item.tag && <span className="tag-badge">{item.tag}</span>}
        </div>
        {item.coursework && (
          <p className="coursework">
            <strong>Relevant Coursework:</strong> {item.coursework}
          </p>
        )}
      </div>
    </div>
  );
}

function CertCard({ item }) {
  return (
    <div className="cert-card" style={{ borderLeftColor: item.color }}>
      <div className="cert-icon" style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}>
        <span>{item.icon}</span>
      </div>
      <div className="cert-body">
        <h4 className="cert-title">{item.title}</h4>
        <p className="cert-meta">
          {item.issuer} · <span className="cert-date">{item.date}</span>
        </p>
        <a href={item.link} target="_blank" rel="noreferrer" className="verify-link">
          🔗 Verify Certificate
        </a>
      </div>
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────
export default function App() {
  return (
    <div className="page">

      {/* ════ SIDEBAR ════ */}
      <aside className="sidebar">

        <div className="profile-block">
          <div className="avatar-ring">
            <div className="avatar-inner">AT</div>
          </div>
          <h1 className="s-name">{data.name.first}<br />{data.name.last}</h1>
          <p className="s-title">{data.title}</p>
        </div>

        <div className="s-divider" />

        <div className="s-section">
          <h3 className="s-heading"><span className="s-dot" />Contact</h3>
          <ul className="contact-list">
            {data.contact.map((c, i) => (
              <li key={i}>
                <span className="c-icon">{c.icon}</span>
                {c.href
                  ? <a href={c.href} target="_blank" rel="noreferrer">{c.label}</a>
                  : <span>{c.label}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="s-divider" />

        <div className="s-section">
          <h3 className="s-heading"><span className="s-dot" />Core Skills</h3>
          {data.skills.map((s) => (
            <SkillBar key={s.name} name={s.name} pct={s.pct} />
          ))}
        </div>

        <div className="s-divider" />

        <div className="s-section">
          <h3 className="s-heading"><span className="s-dot" />Languages</h3>
          {data.languages.map((l) => (
            <div key={l.lang} className="lang-row">
              <span>{l.lang}</span>
              <span className="lang-badge">{l.level}</span>
            </div>
          ))}
        </div>

        <div className="s-divider" />

        <div className="s-section">
          <h3 className="s-heading"><span className="s-dot" />Interests</h3>
          <div className="interest-tags">
            {data.interests.map((t) => (
              <span key={t} className="interest-tag">{t}</span>
            ))}
          </div>
        </div>

      </aside>

      {/* ════ MAIN ════ */}
      <main className="main">

        {/* Header */}
        <header className="main-header">
          <div>
            <h1 className="main-name">
              {data.name.first} <span>{data.name.last}</span>
            </h1>
            <p className="main-subtitle">
              Bachelor of Software Engineering &nbsp;·&nbsp; {data.university}
            </p>
          </div>
          <div className="header-pills">
            <span>BSE</span>
            <span>2023</span>
            <span>A+</span>
          </div>
        </header>

        {/* About */}
        <section className="section">
          <SectionHead num="01" title="About Me" />
          <p className="about-text">{data.about}</p>
        </section>

        {/* Education */}
        <section className="section">
          <SectionHead num="02" title="Education" />
          {data.education.map((e) => (
            <EduCard key={e.degree} item={e} />
          ))}
        </section>

        {/* Certifications */}
        <section className="section">
          <SectionHead num="03" title="Certifications" />
          <div className="cert-list">
            {data.certifications.map((c) => (
              <CertCard key={c.title} item={c} />
            ))}
          </div>
        </section>

        {/* Skills & Tech */}
        <section className="section">
          <SectionHead num="04" title="Skills & Technologies" />
          <div className="tech-cloud">
            {data.techTags.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
