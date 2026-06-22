import { useState } from "react";
import "./App.css";
import { reviewCode } from "./gemini";

function App() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    console.log("Button clicked");

    if (!code.trim()) {
      setResult("Please enter some code first.");
      return;
    }

    setLoading(true);

    const feedback = await reviewCode(code);

    setResult(feedback);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🤖 AI Code Reviewer</h1>

      <p className="subtitle">
        Paste your code and get instant AI feedback !!
      </p>

      <textarea
        className="code-input"
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button className="review-btn" onClick={handleReview}>
        {loading ? "Reviewing..." : "Review Code"}
      </button>

      <div className="output-box">
        {result || "AI review will appear here..."}
      </div>
    </div>
  );
}

export default App;