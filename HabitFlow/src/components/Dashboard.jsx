function Dashboard({ habits }) {
  const completed = habits.filter((h) => h.completed).length;

  const progress =
    habits.length === 0
      ? 0
      : Math.round((completed / habits.length) * 100);

  const totalStreak = habits.reduce(
    (sum, habit) => sum + habit.streak,
    0
  );

  return (
    <div className="dashboard">
      <div className="card">
        <span>📋</span>
        <h3>{habits.length}</h3>
        <p>Total Habits</p>
      </div>

      <div className="card">
        <span>✅</span>
        <h3>{completed}</h3>
        <p>Completed</p>
      </div>

      <div className="card">
        <span>🔥</span>
        <h3>{totalStreak}</h3>
        <p>Total Streaks</p>
      </div>

      <div className="card progress-card">
        <h3>{progress}%</h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p>Daily Progress</p>
      </div>
    </div>
  );
}

export default Dashboard;