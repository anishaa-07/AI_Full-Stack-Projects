import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <nav className="navbar">
        <h2>CoverCraft AI</h2>

        <button className="nav-btn">
          Get Started
        </button>
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
            Dear Hiring Manager,
            <br /><br />
            I am excited to apply for the Frontend Developer
            position...
            <br /><br />
            My skills in React, JavaScript and UI Design...
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
    </div>
  );
}

export default App;