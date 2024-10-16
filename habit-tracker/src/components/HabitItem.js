// src/components/HabitItem.js
import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import { Delete, HelpOutline } from "@mui/icons-material";

const HabitItem = ({ habit, onUpdateProgress, onDelete, iconMap }) => {
  const [partialCount, setPartialCount] = useState("");
  const habitIcon = iconMap[habit.icon] || <HelpOutline />;

  const handleProgressChange = (e) => {
    const progress =
      (parseFloat(e.target.value) / parseFloat(habit.count)) * 100;
    setPartialCount(e.target.value);
    onUpdateProgress(habit.id, progress); // Call onUpdateProgress to update habit progress
  };

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
        background: `linear-gradient(to right, ${habit.color} ${habit.progress}%, transparent ${habit.progress}%)`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {habitIcon}
        <span
          style={{
            textDecoration: habit.progress === 100 ? "line-through" : "none",
          }}
        >
          {habit.name} - {habit.progress.toFixed(0)}% complete
        </span>
      </div>
      <div>
        <TextField
          variant="outlined"
          label={`Enter ${habit.unit}`}
          value={partialCount}
          onChange={handleProgressChange}
          type="number"
          size="small"
          style={{ width: "100px", marginRight: "10px" }}
        />
        <IconButton color="error" onClick={() => onDelete(habit.id)}>
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default HabitItem;
