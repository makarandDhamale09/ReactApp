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

  const addHabit = (name, icon, count, unit, color) => {
    const newHabit = {
      id: Date.now(),
      name,
      completed: false,
      icon,
      count,
      unit,
      progress: 0, // Track the progress percentage
      color, // Store the color
    };
    setHabits([...habits, newHabit]);
  };

  const updateProgress = (id, progress) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? { ...habit, progress: progress > 100 ? 100 : progress }
          : habit
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
        onUpdateProgress={updateProgress}
        onDelete={deleteHabit}
        iconMap={iconMap}
      />
    </Container>
  );
};

export default App;
