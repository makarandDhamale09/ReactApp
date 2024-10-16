// src/components/AddHabit.js
import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter habit"
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default AddHabit;
