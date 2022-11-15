import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { userGoal } from "../pages/api/UserService";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function NativePickers({
  startDate,
  goalDate,
  goal,
  setGoal,
  setStartDate,
  setGoalDate,
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGoal(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Stack component="form" noValidate spacing={3}>
        <DatePicker
          label="Startdate"
          value={startDate}
          onChange={(newStartDate) => {
            setStartDate(newStartDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="Goaldate"
          value={goalDate}
          onChange={(newGoalDate) => {
            setGoalDate(newGoalDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <TextField
          id="outlined-basic"
          label="Kilometers"
          variant="outlined"
          type="number"
          value={goal}
          onChange={handleChange}
        />
      </Stack>
    </LocalizationProvider>
  );
}
