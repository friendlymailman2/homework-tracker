import { Button, Container, TextField } from "@mui/material";
import { useContext } from "react";
import { db } from "../config/firebase";
import { useDate } from "../hooks/useDate";
import { useFirebaseData } from "../hooks/useFirebaseData";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDateContext } from "../Contexts/DateContext";

export const AddTask = () => {
  const { setClassName, setDescription, addTask } = useFirebaseData();
  const { formatDateToMMDDYYYY } = useDate();

  const { setSelectedDate } = useDateContext();

  return (
    <>
      <Container sx={{ display: "grid", justifyContent: "center" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            sx={{ color: "white" }}
            onChange={(newValue: any) => {
              setSelectedDate(formatDateToMMDDYYYY(newValue));
            }}
          />
        </LocalizationProvider>
        <Container sx={{ display: "grid", justifyContent: "center" }}>
          <TextField
            required
            id="classInput"
            label="Class Name"
            onChange={(event: any) => setClassName(event.target.value)}
          />
          <TextField
            required
            id="descInput"
            label="Description"
            sx={{ mt: "5px" }}
            onChange={(event: any) => setDescription(event.target.value)}
          />
          <Button
            sx={{
              border: "1px solid white",
              textAlign: "center",
              fontSize: "20px",
              borderRadius: "50px",
              color: "white",
              my: "10px",
            }}
            onClick={addTask}
          >
            +
          </Button>
        </Container>
      </Container>
    </>
  );
};
