const Generator = () => {
  return (
    <section className="generator">

      <h2>Create a Quiz</h2>

      <input
        type="text"
        placeholder="Enter Topic (Example: Java, React)"
      />

      <select>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <button>Generate with AI</button>

    </section>
  );
};

export default Generator;