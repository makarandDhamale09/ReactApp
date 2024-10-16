// src/components/HabitItem.js
import React from "react";
import { Button, IconButton } from "@mui/material";
import {
  Delete,
  CheckCircleOutline,
  Undo,
  HelpOutline,
} from "@mui/icons-material"; // Default fallback icon

const HabitItem = ({ habit, onToggleComplete, onDelete, iconMap }) => {
  // Use a fallback icon if the selected icon is not available in iconMap
  const habitIcon = iconMap[habit.icon] || <HelpOutline />; // Fallback to HelpOutline icon if habit.icon is undefined

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        margin: "10px 0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Show the selected icon or fallback */}
        {habitIcon}
        <span
          style={{ textDecoration: habit.completed ? "line-through" : "none" }}
        >
          {habit.name}
        </span>
      </div>
      <div>
        <Button
          variant="contained"
          color={habit.completed ? "secondary" : "primary"}
          startIcon={habit.completed ? <Undo /> : <CheckCircleOutline />}
          onClick={() => onToggleComplete(habit.id)}
        >
          {habit.completed ? "Undo" : "Complete"}
        </Button>
        <IconButton color="error" onClick={() => onDelete(habit.id)}>
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default HabitItem;
