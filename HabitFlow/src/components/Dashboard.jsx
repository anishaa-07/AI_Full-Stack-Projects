function Dashboard({ habits }) {
  const completed = habits.filter((h) => h.completed).length;

  const progress =
    habits.length === 0
      ? 0
      : Math.round((completed / habits.length) * 100);

  return (
    <div className="dashboard">
      <div className="card">
        <h3>{habits.length}</h3>
        <p>Total Habits</p>
      </div>

      <div className="card">
        <h3>{completed}</h3>
        <p>Completed</p>
      </div>

      <div className="card">
        <h3>{progress}%</h3>
        <p>Progress</p>
      </div>
    </div>
  );
}

export default Dashboard;