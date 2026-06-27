const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          ✨ AI Powered Quiz Generator
        </span>

        <h1>
          Generate Smart
          <br />
          Quizzes in Seconds
        </h1>

        <p>
          Create AI-powered quizzes instantly for Java, React, Python,
          JavaScript, DSA, and hundreds of other topics. Learn faster,
          practice smarter, and track your progress effortlessly.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            🚀 Generate Quiz
          </button>

          <button className="secondary-btn">
            📚 Explore Topics
          </button>
        </div>

      </div>

      <div className="hero-right">

        <div className="hero-card">

          <div className="card-header">
            🤖 AI Quiz Preview
          </div>

          <h3>React Fundamentals</h3>

          <p>
            Which React Hook is used for managing component state?
          </p>

          <div className="option">✅ useState()</div>
          <div className="option">useFetch()</div>
          <div className="option">useRender()</div>
          <div className="option">useDOM()</div>

        </div>

      </div>

    </section>
  );
};

export default Hero;