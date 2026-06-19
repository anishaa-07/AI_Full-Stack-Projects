import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const charCount = text.length;

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
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button
  className="summarize-btn"
  onClick={() => {
    const shortSummary =
      text.length > 120
        ? text.slice(0, 120) + "..."
        : text;

    setSummary(shortSummary);
  }}
>
  Summarize
</button>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h3>{wordCount}</h3>
          <p>Words</p>
        </div>

        <div className="stat-card">
          <h3>{charCount}</h3>
          <p>Characters</p>
        </div>
      </div>

      <div className="summary-box">
        <h2>Summary</h2>
        <p>{summary || "Your AI-generated summary will appear here..."}</p>
      </div>
    </div>
  );
}

export default App;