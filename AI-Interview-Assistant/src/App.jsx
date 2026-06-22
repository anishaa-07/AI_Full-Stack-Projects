import questions from "./data/questions.js";
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [category, setCategory] = useState("java");
  const [difficulty, setDifficulty] = useState("easy");
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const generateQuestion = () => {
    const selectedQuestions = questions[category][difficulty];

    const randomIndex = Math.floor(
      Math.random() * selectedQuestions.length
    );

    setCurrentQuestion(selectedQuestions[randomIndex]);
  };

  return (
    <div className="container">
      <div className="hero">
        <h1>🎯 AI Interview Preparation Assistant</h1>

        <p>
          Practice technical interview questions, improve confidence,
          and get ready for your dream job.
        </p>

        <div className="controls">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="java">Java</option>
            <option value="dsa">DSA</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <button onClick={generateQuestion}>
            Generate Question
          </button>
        </div>

        {currentQuestion && (
          <div className="question-card">
            <h2>Interview Question</h2>

            <p className="question">
              {currentQuestion.question}
            </p>

            <h3>Hint</h3>

            <p className="hint">
              {currentQuestion.hint}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;