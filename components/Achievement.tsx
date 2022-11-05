import { useSession } from "next-auth/react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { DataThresholding } from "@mui/icons-material";
import { flexbox } from "@mui/system";
import { useState } from "react";

function Achievement() {
  const { data } = useSession();
  const [responseSwim, setResponseSwim] = useState();
  const [responseRun, setResponseRun] = useState();
  const [responseRiding, setResponseRiding] = useState();
  const [athledeId, setAthleteId] = useState();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const accessTokenString = JSON.stringify(data).split('"');
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
    } catch (err) {
      console.log(err);
    }
  };

  const callAthleteStats = async () => {
    callAthleteId();

    if (athledeId) {
      try {
        const res = await fetch(
          `https://www.strava.com/api/v3/athletes/${athledeId}/stats`,
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

  callAthleteStats();

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
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Swimming Goal" />
        <Tab label="Riding Goal" />
        <Tab label="Running Goal" />
      </Tabs>
      <button onClick={callAthleteId}>Make API call</button>
      <button onClick={callAthleteStats}>Make API call 2</button>
    </Box>
  );
}

export default Achievement;
