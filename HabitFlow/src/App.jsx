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
      <h1>🔥HabitFlow</h1>

      <Dashboard habits={habits} />

      <HabitForm addHabit={addHabit} />

      <div className="habits-container">
        {habits.length === 0 ? (
          <div className="empty-state">
            <h2>No Habits Yet</h2>
            <p>Add your first habit and start building consistency.</p>
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