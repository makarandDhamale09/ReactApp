// src/components/HabitList.js
import React from "react";
import HabitItem from "./HabitItem";

const HabitList = ({ habits, onUpdateProgress, onDelete, iconMap }) => {
  return (
    <div>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onUpdateProgress={onUpdateProgress}
          onDelete={onDelete}
          iconMap={iconMap}
        />
      ))}
    </div>
  );
};

export default HabitList;
