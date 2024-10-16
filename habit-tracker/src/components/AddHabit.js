// src/components/AddHabit.js
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const AddHabit = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName) {
      onAddHabit(habitName);
      setHabitName("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "10px", margin: "20px 0" }}
    >
      <TextField
        variant="outlined"
        label="Enter Habit"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Add Habit
      </Button>
    </form>
  );
};

export default AddHabit;
