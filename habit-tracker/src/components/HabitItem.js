// src/components/HabitItem.js
import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
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
        backgroundColor: "white", // Initial white background
        borderRadius: "5px",
        padding: "10px",
        margin: "10px 0",
        overflow: "hidden",
        height: "100px", // Adjusted height to be compact
        border: 1,
      }}
    >
      {/* Progress fill */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: `${progressPercentage}%`,
          backgroundColor: color, // Use selected color for progress fill
          transition: "width 0.5s ease",
          zIndex: 0,
        }}
      />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        zIndex={1} // Ensure content is on top of the progress fill
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
          <Box display="flex" alignItems="center">
            {iconMap[icon]} {/* Render the icon based on the icon type */}
          </Box>
        </Box>
        <Typography variant="body2">
          Target: {count} {unit}
        </Typography>
        <IconButton
          onClick={() => onDelete(habit.id)}
          size="large"
          sx={{ color: "text.primary" }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>

      <input
        type="number"
        value={inputValue} // Use local state for input value
        onChange={handleProgressChange}
        placeholder="Update Progress"
        style={{
          marginTop: "5px",
          width: "90%",
          padding: "6px", // Add padding for better usability
          borderRadius: "4px",
          border: "1px solid #ccc",
          zIndex: 1,
          backgroundColor: "white", // Ensure input field stays visible
        }}
      />
    </Box>
  );
};

export default HabitItem;
