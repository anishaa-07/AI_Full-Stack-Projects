function App() {
  return (
    <div className="container">
      <h1>📝 AI Text Summarizer</h1>

      <p className="tagline">
        Transform Long Text Into Clear Insights
      </p>

      <div className="input-section">
        <textarea
          className="text-input"
          placeholder="Paste your text here..."
        ></textarea>

        <button className="summarize-btn">
          Summarize
        </button>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h3>0</h3>
          <p>Words</p>
        </div>

        <div className="stat-card">
          <h3>0</h3>
          <p>Characters</p>
        </div>
      </div>

      <div className="summary-box">
        <h2>Summary</h2>
        <p>Your AI-generated summary will appear here...</p>
      </div>
    </div>
  );
}

export default App;