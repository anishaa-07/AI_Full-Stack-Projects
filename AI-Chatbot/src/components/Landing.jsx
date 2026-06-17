function Landing({ onStart }) {
  return (
    <div className="landing">

      <div className="hero">

        <h1 className="hero-title">
          Coco AI 🤖
        </h1>

        <p className="hero-subtitle">
          Meet Coco — Your Personal AI Bestie !!
        </p>



        <button onClick={onStart}>
          Start Chatting 🚀
        </button>

      </div>

      <div className="features">

        <div className="card">
          <h3>⚡ Fast</h3>
          <p>Instant AI responses</p>
        </div>

        <div className="card">
          <h3>🧠 Smart</h3>
          <p><p>Powered by Google's Gemini</p></p>
        </div>

        <div className="card">
          <h3>💬 Friendly</h3>
          <p>Your personal AI companion</p>
        </div>

      </div>

    </div>
  );
}

export default Landing;