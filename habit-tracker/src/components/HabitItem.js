// src/components/HabitItem.js
import React, { useState } from "react";

const HabitItem = ({ habit, onToggleComplete, onDelete }) => {
  return (
    <div className="habit-item">
      <span
        style={{ textDecoration: habit.completed ? "line-through" : "none" }}
      >
        {habit.name}
      </span>
      <button onClick={() => onToggleComplete(habit.id)}>
        {habit.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => onDelete(habit.id)}>Delete</button>
    </div>
  );
};

export default HabitItem;
