import { Container, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AddTask } from "../components/AddTask";
import { DisplayTasks } from "../components/DisplaysTasks";
import { DateContext } from "../Contexts/DateContext";
import { useUserData } from "../hooks/useUserData";

export const Home = () => {
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = useState("");
  const { user } = useUserData();

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Container
        sx={{ display: "flex", bgcolor: theme.palette.background.default }}
      >
        <Container sx={{ ml: "100px" }}>
          <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
            <AddTask />
          </DateContext.Provider>
        </Container>
        <Container>
          <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
            <DisplayTasks />
          </DateContext.Provider>
        </Container>
      </Container>
    </>
  );
};
