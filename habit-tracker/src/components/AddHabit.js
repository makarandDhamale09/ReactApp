// src/components/AddHabit.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import {
  FitnessCenter,
  DirectionsRun,
  DirectionsWalk,
  AccessibilityNew,
} from "@mui/icons-material";

const AddHabit = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("FitnessCenter"); // Default icon

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName) {
      onAddHabit(habitName, selectedIcon);
      setHabitName("");
    }
  };

  // List of available icons (can expand this list)
  const iconOptions = [
    { value: "FitnessCenter", label: "Weights", icon: <FitnessCenter /> },
    { value: "DirectionsRun", label: "Running", icon: <DirectionsRun /> },
    { value: "DirectionsWalk", label: "Walking", icon: <DirectionsWalk /> },
    {
      value: "AccessibilityNew",
      label: "Stretching",
      icon: <AccessibilityNew />,
    },
  ];

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
      <FormControl>
        <InputLabel>Icon</InputLabel>
        <Select
          value={selectedIcon}
          onChange={(e) => setSelectedIcon(e.target.value)}
          label="Icon"
        >
          {iconOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.icon} {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Add Habit
      </Button>
    </form>
  );
};

export default AddHabit;
