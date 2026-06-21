import { useState } from "react";
import "./App.css";

function App() {
  const [resume, setResume] = useState("");
  const [score, setScore] = useState(0);
  const [detectedSkills, setDetectedSkills] = useState([]);
  const [suggestion, setSuggestion] = useState("");

  const analyzeResume = () => {
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
  };

  return (
    <div className="container">
      <h1>🤖 AI Resume Analyzer</h1>

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
    </div>
  );
}

export default App;