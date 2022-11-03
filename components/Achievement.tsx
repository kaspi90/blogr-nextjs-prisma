import { access } from "fs";
import { useSession } from "next-auth/react";
import { Tracing } from "trace_events";
import axios from "axios";

function Achievement() {
  const { data } = useSession();
  const accessTokenString = JSON.stringify(data).split('"');
  const accessToken = accessTokenString[17];
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const callAPI = async () => {
    console.log(accessToken);

    try {
      const res = await fetch(`https://www.strava.com/api/v3/athlete`, config);
      const dataRes = await res.json();
      console.log(dataRes);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button onClick={callAPI}>Make API call</button>
    </>
  );
}

export default Achievement;
