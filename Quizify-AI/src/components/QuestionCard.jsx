const QuestionCard = () => {
  return (
    <section className="question-card">

      <h2>Sample Question</h2>

      <p>
        Which hook is used for managing state in React?
      </p>

      <div className="options">

        <button>useRef</button>

        <button>useEffect</button>

        <button>useState</button>

        <button>useMemo</button>

      </div>

    </section>
  );
};

export default QuestionCard;