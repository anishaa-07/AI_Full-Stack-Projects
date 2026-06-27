const Generator = () => {
  return (
    <section className="generator">

      <h2>✨ Create Your AI Quiz</h2>

      <input
        type="text"
        placeholder="Enter Topic (Java, React, Python...)"
      />

      <select defaultValue="">
        <option value="" disabled>
          Select Difficulty
        </option>

        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <button>
        🚀 Generate AI Quiz
      </button>

    </section>
  );
};

export default Generator;