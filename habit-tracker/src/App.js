// src/App.js
import React, { useState } from "react";
import HabitList from "./components/HabitList";
import AddHabit from "./components/AddHabit";

const App = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name,
      completed: false,
    };
    setHabits([...habits, newHabit]);
  };

  const toggleComplete = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      <AddHabit onAddHabit={addHabit} />
      <HabitList
        habits={habits}
        onToggleComplete={toggleComplete}
        onDelete={deleteHabit}
      />
    </div>
  );
};

export default App;
