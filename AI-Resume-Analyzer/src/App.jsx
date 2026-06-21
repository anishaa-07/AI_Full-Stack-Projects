import { analyzeResumeWithAI } from "./services/gemini";
import { useState } from "react";
import "./App.css";

function App() {
  const [resume, setResume] = useState("");
  const [score, setScore] = useState(0);
  const [detectedSkills, setDetectedSkills] = useState([]);
  const [suggestion, setSuggestion] = useState("");
  const [aiResponse, setAiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {
    setLoading(true);

    const skills = [
      "java",
      "python",
      "javascript",
      "react",
      "node",
      "mongodb",
      "sql",
      "git",
    ];

    const found = [];

    skills.forEach((skill) => {
      if (resume.toLowerCase().includes(skill)) {
        found.push(skill);
      }
    });

    setDetectedSkills(found);
    setScore(found.length * 10);

    if (found.length >= 6) {
      setSuggestion(
        "Excellent resume! You have strong technical skills."
      );
    } else if (found.length >= 3) {
      setSuggestion(
        "Good resume. Try adding more relevant skills."
      );
    } else {
      setSuggestion(
        "Needs improvement. Add technical skills and projects."
      );
    }

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

      <textarea
        placeholder="Paste your resume here..."
        rows="12"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />

      <button onClick={analyzeResume}>
        Analyze Resume
      </button>

      <div className="result">
        <h2>Resume Score: {score}/100</h2>
      </div>

      <div className="result">
        <h2>Detected Skills</h2>

        {detectedSkills.length > 0 ? (
          <ul>
            {detectedSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p>No skills detected yet.</p>
        )}
      </div>

      <div className="result">
        <h2>Suggestions</h2>
        <p>{suggestion}</p>
      </div>

      <div className="result">
        <h2>🤖 AI Analysis</h2>

        {loading ? (
          <p>Analyzing Resume...</p>
        ) : aiResponse ? (
          <>
            <h3>ATS Score: {aiResponse.atsScore}/100</h3>

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
          <p>Analyze a resume to see AI insights.</p>
        )}
      </div>
    </div>
  );
}

export default App;