function HabitCard({ habit, toggleHabit, deleteHabit }) {
  return (
    <div className={`habit-card ${habit.completed ? "completed" : ""}`}>
      <div>
        <h3>{habit.name}</h3>
        <p>🔥 Streak: {habit.streak}</p>
      </div>

      <div className="actions">
        <button onClick={() => toggleHabit(habit.id)}>
          {habit.completed ? "Undo" : "Done"}
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteHabit(habit.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default HabitCard;