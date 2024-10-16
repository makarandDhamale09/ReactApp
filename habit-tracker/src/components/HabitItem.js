// src/components/HabitItem.js
import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
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

const HabitItem = ({ habit, onUpdateProgress, onDelete }) => {
  const { name, icon, count, unit, progress, color } = habit;

  // Local state to hold the input value
  const [inputValue, setInputValue] = useState("");

  const handleProgressChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue); // Update local state

    const newProgress = parseInt(newValue, 10);
    if (!isNaN(newProgress)) {
      onUpdateProgress(habit.id, newProgress);
    }
  };

  const progressPercentage = (progress / count) * 100;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: color,
        borderRadius: "5px",
        padding: "16px",
        margin: "10px 0",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: `${progressPercentage}%`,
          backgroundColor: "rgba(0, 0, 0, 0.1)", // Light overlay for better visibility
          transition: "width 0.5s ease",
        }}
      />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Typography variant="h6" zIndex={1}>
          {name}
        </Typography>
        <IconButton onClick={() => onDelete(habit.id)} zIndex={1}>
          🗑️
        </IconButton>
      </Box>
      <Box display="flex" alignItems="center" zIndex={1} marginTop="10px">
        <Typography variant="body1">
          Target: {count} {unit}
        </Typography>
      </Box>
      <input
        type="number"
        value={inputValue} // Use local state for input value
        onChange={handleProgressChange}
        placeholder="Update Progress"
        style={{
          marginTop: "10px",
          width: "100%",
          padding: "8px", // Add padding for better click area
          borderRadius: "4px",
          border: "1px solid #ccc",
          zIndex: 1,
          position: "relative", // Ensures input is above the filled background
          backgroundColor: "white", // Ensure input has a white background
        }}
      />
      <Box display="flex" alignItems="center" zIndex={1} marginTop="10px">
        {iconMap[icon]} {/* Render the icon based on the icon type */}
      </Box>
    </Box>
  );
};

export default HabitItem;
