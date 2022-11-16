import { useSession } from "next-auth/react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import NativePickers from "./NativePickers";
import UserService from "../pages/api/UserService";
import { callOurApi } from "../pages/api/UserService";
import * as React from "react";
import { Moment } from "moment";
import { userGoal } from "../pages/api/UserService";

function Achievement() {
  const { data: session } = useSession();
  const [responseSwim, setResponseSwim] = useState();
  const [responseRun, setResponseRun] = useState();
  const [responseRiding, setResponseRiding] = useState();
  const [athledeId, setAthleteId] = useState();
  const [value, setValue] = useState("1");
  const [startDate, setStartDate] = React.useState<Moment | null>(null);
  const [goalDate, setGoalDate] = React.useState<Moment | null>(null);

  const [goal, setGoal] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const accessTokenString = JSON.stringify(session).split('"');
  const accessToken = accessTokenString[17];

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const callAthleteId = async () => {
    try {
      const res = await fetch(`https://www.strava.com/api/v3/athlete`, config);
      const dataRes = await res.json();
      setAthleteId(dataRes.id);
      return dataRes.id;
    } catch (err) {
      console.log(err);
    }
  };

  const callAthleteStats = async () => {
    const resultAthleteId = await callAthleteId();

    if (resultAthleteId) {
      try {
        const res = await fetch(
          `https://www.strava.com/api/v3/athletes/${resultAthleteId}/stats`,
          config
        );
        const dataRes = await res.json();
        setResponseSwim(dataRes.ytd_swim_totals.distance);
        setResponseRiding(dataRes.ytd_ride_totals.distance);
        setResponseRun(dataRes.ytd_run_totals.distance);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const resultDatabase = async () => {
    await callAthleteStats();
    const resultAthleteId = await callAthleteId();
    const r = await callOurApi();

    if (!r.find((id) => resultAthleteId === id.stravaId)) {
      if (session) {
        UserService({ name: session.user.name, id: resultAthleteId });
      }
    }
  };

  resultDatabase();

  const saveGoal = async () => {
    /* const id = await callAthleteId();
    console.log(id); */

    const resultAthleteId = await callAthleteId();
    const result = await callOurApi();

    const user = result.find((user) => resultAthleteId === user.stravaId);
    console.log(user);
    userGoal({
      sportType: value,
      kilometers: goal,
      userId: user.id,
      startDate: startDate,
      goalDate: goalDate,
    });
  };

  return (
    <Box maxWidth={"1200px"} margin={"auto"} sx={{ display: "flex-col" }}>
      <Typography
        variant="h3"
        sx={{ display: "flex" }}
        justifyContent="center"
        padding={"10px"}
      >
        This year so far
      </Typography>
      <Typography
        sx={{ display: "flex" }}
        justifyContent="center"
        padding={"10px"}
      >
        Swimming kilometers this year:{" "}
        {responseSwim ? Math.round(responseSwim / 1000) : 0}
      </Typography>
      <Typography
        sx={{ display: "flex" }}
        justifyContent="center"
        padding={"10px"}
      >
        Riding kilometers this year:{" "}
        {responseRiding ? Math.round(responseRiding / 1000) : 0}
      </Typography>
      <Typography
        sx={{ display: "flex" }}
        justifyContent="center"
        padding={"10px"}
      >
        Running kilometers this year:{" "}
        {responseRun ? Math.round(responseRun / 1000) : 0}
      </Typography>
      <Typography
        sx={{ display: "flex" }}
        justifyContent="center"
        padding={"10px"}
        variant={"h5"}
      >
        Set your goals
      </Typography>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Box
          sx={{
            maxWidth: "800px",
            typography: "body1",
            margin: "auto",
          }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Swimming Goals" value="Swimming" />
                <Tab label="Riding Goals" value="Riding" />
                <Tab label="Running Goals" value="Running" />
              </TabList>
            </Box>
            <TabPanel value="Swimming">
              <Typography>Set new Goal</Typography>
              <br />
              <NativePickers
                startDate={startDate}
                goalDate={goalDate}
                goal={goal}
                setGoal={setGoal}
                setGoalDate={setGoalDate}
                setStartDate={setStartDate}
              ></NativePickers>
            </TabPanel>
            <TabPanel value="Riding">
              <Typography>Set new Goal</Typography>
              <br />
              <NativePickers
                startDate={startDate}
                goalDate={goalDate}
                goal={goal}
                setGoal={setGoal}
                setGoalDate={setGoalDate}
                setStartDate={setStartDate}
              ></NativePickers>
            </TabPanel>
            <TabPanel value="Running">
              <Typography>Set new Goal</Typography>
              <br />
              <NativePickers
                startDate={startDate}
                goalDate={goalDate}
                goal={goal}
                setGoal={setGoal}
                setGoalDate={setGoalDate}
                setStartDate={setStartDate}
              ></NativePickers>
            </TabPanel>
          </TabContext>
        </Box>
      </LocalizationProvider>
      <button onClick={saveGoal}>Speichern</button>
    </Box>
  );
}

export default Achievement;
