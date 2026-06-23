import questions from "./data/questions.js";
import { useState } from "react";
import { model } from "./services/gemini";
import "./styles/App.css";

function App() {
  const [category, setCategory] = useState("java");
  const [difficulty, setDifficulty] = useState("easy");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  // Offline Question Generator
  const generateOfflineQuestion = () => {
    const selectedQuestions = questions[category][difficulty];

    const randomIndex = Math.floor(
      Math.random() * selectedQuestions.length
    );

    const question = selectedQuestions[randomIndex];

    setCurrentQuestion(`
Question:
${question.question}

Hint:
${question.hint}
`);
  };

  // AI Question Generator
  const generateAIQuestion = async () => {
    try {
      setLoading(true);

      const prompt = `
Generate one ${difficulty} level ${category} interview question.

Return in this exact format:

Question:
<question>

Answer:
<answer>

Explanation:
<explanation>
`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setCurrentQuestion(text);
    } catch (error) {
      console.error(error);

      setCurrentQuestion(
        "⚠️ Gemini API quota exceeded or unavailable.\n\nPlease use 'Generate Question' for offline interview questions."
      );
    } finally {
      setLoading(false);
    }
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

          <button onClick={generateOfflineQuestion}>
            Generate Question
          </button>

          <button onClick={generateAIQuestion}>
            {loading ? "Generating..." : "Generate AI Question"}
          </button>
        </div>

        {currentQuestion && (
          <div className="question-card">
            <h2>Interview Question</h2>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                fontFamily: "inherit",
                lineHeight: "1.8",
              }}
            >
              {currentQuestion}
            </pre>

            <button
              className="next-btn"
              onClick={generateOfflineQuestion}
            >
              Next Question →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;