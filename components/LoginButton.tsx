import { useSession, signIn, signOut } from "next-auth/react";
import { Box } from "@mui/system";
import Achievement from "./Achievement";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <Box>
        Signed in as {session.user.name} <br />
        <Achievement></Achievement>
      </Box>
    );
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          width: "200px",
          flexDirection: "column",
          margin: "20px auto 0  auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",

            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",

              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Box>
              Not signed in <br />
            </Box>
            <a onClick={() => signIn()}>
              <Box
                sx={{ cursor: "pointer", border: 1, borderRadius: 1 }}
                margin={2}
                padding={1}
              >
                <img src="strava.svg" height={65} width={65}></img>
              </Box>
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
}
