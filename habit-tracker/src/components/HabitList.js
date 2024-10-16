// src/components/HabitList.js
import React from "react";
import HabitItem from "./HabitItem";

const HabitList = ({ habits, onUpdateProgress, onDelete }) => {
  return (
    <div>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onUpdateProgress={onUpdateProgress}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default HabitList;
