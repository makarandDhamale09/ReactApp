// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import HabitList from "./components/HabitList";
import AddHabitPage from "./pages/AddHabitPage";
import { Container, Typography, Fab } from "@mui/material";
import {
  FitnessCenter,
  DirectionsRun,
  DirectionsWalk,
  AccessibilityNew,
  Add,
} from "@mui/icons-material";

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
      progress: 0,
      color,
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
    <Router>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom>
          Habit Tracker
        </Typography>
        <Routes>
          <Route
            path="/"
            element={
              <HabitList
                habits={habits}
                onUpdateProgress={updateProgress}
                onDelete={deleteHabit}
              />
            }
          />
          <Route path="/add" element={<AddHabitPage onAddHabit={addHabit} />} />
        </Routes>
        <NavigateButton />
      </Container>
    </Router>
  );
};

const NavigateButton = () => {
  const navigate = useNavigate();

  return (
    <Fab
      color="primary"
      aria-label="add"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
      }}
      onClick={() => navigate("/add")}
    >
      <Add />
    </Fab>
  );
};

export default App;
