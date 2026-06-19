import "./App.css";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const charCount = text.length;

  const generateSummary = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);

      const genAI = new GoogleGenerativeAI(
        import.meta.env.VITE_GEMINI_API_KEY
      );

      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const prompt = `
      Summarize the following text in a concise and clear manner:

      ${text}
      `;

      const result = await model.generateContent(prompt);

      setSummary(result.response.text());
    } catch (error) {
      console.error(error);
      setSummary("Failed to generate summary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copySummary = async () => {
    if (!summary) return;

    await navigator.clipboard.writeText(summary);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

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
        />

        <button
          className="summarize-btn"
          onClick={generateSummary}
          disabled={loading}
        >
          {loading ? "Generating..." : "Summarize"}
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
        <div className="summary-header">
          <h2>Summary</h2>

          <button
            className="copy-btn"
            onClick={copySummary}
          >
            {copied ? "✅ Copied!" : "📋 Copy"}
          </button>
        </div>

        <p>
          {summary ||
            "Your AI-generated summary will appear here..."}
        </p>
      </div>
    </div>
  );
}

export default App;