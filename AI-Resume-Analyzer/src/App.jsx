import { analyzeResumeWithAI } from "./services/gemini";
import { useState } from "react";
import "./App.css";

function App() {
  const [resume, setResume] = useState("");
  const [aiResponse, setAiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {
    if (!resume.trim()) return;

    setLoading(true);

    try {
      const result = await analyzeResumeWithAI(resume);
      setAiResponse(result);
    } catch (error) {
      console.error(error);

      setAiResponse({
        atsScore: 0,
        strengths: [],
        weaknesses: [],
        suggestions: ["Failed to analyze resume"],
      });
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🤖 AI Resume Analyzer Pro</h1>

      <p className="tagline">
        Transform Your Resume Into Interview Opportunities
      </p>

      <textarea
        placeholder="Paste your resume here..."
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />

      <button onClick={analyzeResume}>
        Analyze Resume
      </button>

      <div className="result">
        <h2>🤖 AI Analysis</h2>

        {loading ? (
          <p>Analyzing Resume...</p>
        ) : aiResponse ? (
          <>
            <div className="ats-card">
              <h2>{aiResponse.atsScore}</h2>
              <p>ATS Score</p>
            </div>

            <h3>✅ Strengths</h3>
            <ul>
              {aiResponse.strengths?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>⚠ Weaknesses</h3>
            <ul>
              {aiResponse.weaknesses?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>💡 Suggestions</h3>
            <ul>
              {aiResponse.suggestions?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>Paste your resume and click Analyze Resume.</p>
        )}
      </div>
    </div>
  );
}

export default App;