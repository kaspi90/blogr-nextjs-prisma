import { Box } from "@mui/system";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { alignProperty } from "@mui/material/styles/cssUtils";

function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Box>
        <AppleIcon
          fontSize="large"
          sx={{ fontSize: 60, border: 1, borderRadius: "8px", margin: "2px" }}
        />
      </Box>
      <Box>
        <GoogleIcon
          sx={{ fontSize: 60, border: 1, borderRadius: "8px", margin: "2px" }}
        />
      </Box>
      <Box>
        <FacebookIcon
          sx={{ fontSize: 60, border: 1, borderRadius: "8px", margin: "2px" }}
        />
      </Box>
    </Box>
  );
}

export default Login;
