import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [letter, setLetter] = useState("");

  const generateLetter = () => {
    const coverLetter = `Dear Hiring Manager,

I am ${name} and I am excited to apply for the ${role} position.

With ${experience} of experience and strong skills in ${skills}, I am confident in my ability to contribute effectively to your team.

My passion for learning, problem-solving abilities, and dedication to excellence make me a strong candidate for this role.

Thank you for your time and consideration. I look forward to discussing how I can contribute to your organization.

Sincerely,
${name}`;

    setLetter(coverLetter);
  };

  return (
    <div className="app">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <nav className="navbar">
        <h2>CoverCraft AI</h2>
        <button className="nav-btn">Get Started</button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="badge">
            ✨ AI Powered Writing Assistant
          </span>

          <h1>
            Create Professional
            <span> Cover Letters </span>
            In Seconds
          </h1>

          <p>
            Generate job-winning cover letters with a beautiful,
            modern AI-powered experience designed for students,
            developers, and professionals.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Generate Now
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-header">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <h3>Generated Cover Letter</h3>

          <p>
            Dear Hiring Manager...
            <br />
            <br />
            AI generated professional content preview.
          </p>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h2>10K+</h2>
          <p>Cover Letters Generated</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Interview Success Rate</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Professional Templates</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>AI Powered Support</p>
        </div>
      </section>

      <section className="generator-section">
        <div className="generator-form">
          <h2>Create Your Cover Letter</h2>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Job Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <input
            type="text"
            placeholder="Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />

          <input
            type="text"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

          <button
            className="generate-btn"
            onClick={generateLetter}
          >
            Generate Cover Letter
          </button>
        </div>

        <div className="preview-card">
          <h2>Live Preview</h2>

          <textarea
            readOnly
            value={letter}
            placeholder="Your generated cover letter will appear here..."
          />
        </div>
      </section>
    </div>
  );
}

export default App;