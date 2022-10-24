import { useSession, signIn, signOut } from "next-auth/react";
import { Box } from "@mui/system";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
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
            <Box>
              Signed in as {session.user.email} <br />
              <a onClick={() => signOut()}>
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
          <Box>
            Not signed in <br />
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
