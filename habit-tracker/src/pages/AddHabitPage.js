// src/pages/AddHabitPage.js
import React from "react";
import AddHabit from "../components/AddHabit";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddHabitPage = ({ onAddHabit }) => {
  const navigate = useNavigate();

  const handleAddHabit = (name, icon, count, unit, color) => {
    onAddHabit(name, icon, count, unit, color);
    navigate("/"); // Navigate back to the home page
  };

  return (
    <Container maxWidth="sm">
      <AddHabit onAddHabit={handleAddHabit} />
    </Container>
  );
};

export default AddHabitPage;
