import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { UserLoginBody } from "../Interface/Network/UserLoginBody";
import CBDCService from "../Network/CBDCService";
import { APIENDPOINTS } from "../Network/Endpoints";
import { useNavigate } from "react-router-dom";
import { Colors } from "../Utils/Colors";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let userLogin: UserLoginBody = {
      userName: data.get("email"),
      password: data.get("password"),
    };
    navigate("/otp");
    // let userLoginResponse = await CBDCService.userLogin(userLogin);
    // console.log(userLoginResponse);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: Colors.PRIMARY}}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="UserName"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, height: 60, color: Colors.PRIMARY }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
