import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Box, Button } from "@material-ui/core";
import { useState } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Moment } from "moment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function NativePickers() {
  const [startDate, setStartDate] = React.useState<Moment | null>(null);
  const [goalDate, setGoalDate] = React.useState<Moment | null>(null);

  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
          value={value}
          onChange={handleChange}
        />

        <button>Speichern</button>
      </Stack>
    </LocalizationProvider>
  );
}
