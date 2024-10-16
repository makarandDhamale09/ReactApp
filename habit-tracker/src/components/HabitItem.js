// src/components/HabitItem.js
import React from "react";
import { Button, IconButton } from "@mui/material";
import { Delete, CheckCircleOutline, Undo } from "@mui/icons-material";

const HabitItem = ({ habit, onToggleComplete, onDelete }) => {
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
      <span
        style={{ textDecoration: habit.completed ? "line-through" : "none" }}
      >
        {habit.name}
      </span>
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
