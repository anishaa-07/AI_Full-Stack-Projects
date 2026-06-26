import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import HabitForm from "./components/HabitForm";
import HabitCard from "./components/HabitCard";
import "./App.css";

function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const savedHabits = localStorage.getItem("habits");

    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name,
      completed: false,
      streak: 0,
    };

    setHabits([...habits, newHabit]);
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed: !habit.completed,
              streak: !habit.completed
                ? habit.streak + 1
                : Math.max(habit.streak - 1, 0),
            }
          : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="container">

      <div className="hero">
        <h1>🔥 HabitFlow</h1>

        <p className="subtitle">
          Build consistency. Track progress. Become unstoppable.
        </p>
      </div>

      <div className="focus-card">
        <span className="focus-badge">
          TODAY'S MOTIVATION
        </span>

        <h2>
          Small habits create extraordinary results.
        </h2>

        <p>
          Success is the product of daily discipline.
        </p>
      </div>

      <Dashboard habits={habits} />

      <HabitForm addHabit={addHabit} />

      <div className="section-title">
        <h2>📋 My Habits</h2>
      </div>

      <div className="habits-container">
        {habits.length === 0 ? (
          <div className="empty-state">

            <div className="empty-icon">
              🌱
            </div>

            <h2>No Habits Yet</h2>

            <p>
              Start your first habit and begin your
              self-improvement journey.
            </p>

          </div>
        ) : (
          habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              toggleHabit={toggleHabit}
              deleteHabit={deleteHabit}
            />
          ))
        )}
      </div>

    </div>
  );
}

export default App;