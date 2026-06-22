import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>🤖 AI Code Reviewer</h1>

      <p className="subtitle">
        Paste your code and get instant AI feedback
      </p>

      <textarea
        placeholder="Paste your code here..."
        className="code-input"
      ></textarea>

      <button className="review-btn">
        Review Code
      </button>

      <div className="output-box">
        AI review will appear here...
      </div>
    </div>
  );
}

export default App;