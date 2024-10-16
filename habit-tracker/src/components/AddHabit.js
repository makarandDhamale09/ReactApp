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

const pastelColors = [
  { name: "Light Blue", hex: "#ADD8E6" },
  { name: "Light Coral", hex: "#F08080" },
  { name: "Light Green", hex: "#90EE90" },
  { name: "Light Yellow", hex: "#FFFFE0" },
  { name: "Lavender", hex: "#E6E6FA" },
];

const AddHabit = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("FitnessCenter");
  const [habitCount, setHabitCount] = useState("");
  const [habitUnit, setHabitUnit] = useState("count");
  const [habitColor, setHabitColor] = useState(pastelColors[0].hex); // Default to the first pastel color

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName && habitCount) {
      onAddHabit(habitName, selectedIcon, habitCount, habitUnit, habitColor);
      setHabitName("");
      setHabitCount("");
      setHabitColor(pastelColors[0].hex); // Reset to the first color
    }
  };

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

  const unitOptions = ["count", "minutes", "reps"];

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        margin: "20px 0",
      }}
    >
      <TextField
        variant="outlined"
        label="Enter Habit"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        fullWidth
      />
      <FormControl fullWidth>
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
      <TextField
        variant="outlined"
        label="Enter Total Count"
        value={habitCount}
        onChange={(e) => setHabitCount(e.target.value)}
        type="number"
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel>Units</InputLabel>
        <Select
          value={habitUnit}
          onChange={(e) => setHabitUnit(e.target.value)}
          label="Units"
        >
          {unitOptions.map((unit) => (
            <MenuItem key={unit} value={unit}>
              {unit}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Color</InputLabel>
        <Select
          value={habitColor}
          onChange={(e) => setHabitColor(e.target.value)}
          label="Color"
        >
          {pastelColors.map((color) => (
            <MenuItem
              key={color.hex}
              value={color.hex}
              style={{ backgroundColor: color.hex }}
            >
              {color.name}
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
