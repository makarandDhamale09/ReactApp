// src/App.js
import React, { useState } from "react";
import HabitList from "./components/HabitList";
import AddHabit from "./components/AddHabit";
import { Container, Typography } from "@mui/material";
import {
  FitnessCenter,
  DirectionsRun,
  DirectionsWalk,
  AccessibilityNew,
} from "@mui/icons-material";

const iconMap = {
  FitnessCenter: <FitnessCenter />,
  DirectionsRun: <DirectionsRun />,
  DirectionsWalk: <DirectionsWalk />,
  AccessibilityNew: <AccessibilityNew />,
};

const App = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (name, icon) => {
    const newHabit = {
      id: Date.now(),
      name,
      completed: false,
      icon, // Save the icon choice with the habit
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
        iconMap={iconMap}
      />
    </Container>
  );
};

export default App;
