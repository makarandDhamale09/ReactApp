// src/App.js
import React, { useState } from "react";
import HabitList from "./components/HabitList";
import AddHabit from "./components/AddHabit";
import { Container, Typography } from "@mui/material";

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
    <Container maxWidth="sm">
      <Typography variant="h3" align="center" gutterBottom>
        Habit Tracker
      </Typography>
      <AddHabit onAddHabit={addHabit} />
      <HabitList
        habits={habits}
        onToggleComplete={toggleComplete}
        onDelete={deleteHabit}
      />
    </Container>
  );
};

export default App;
