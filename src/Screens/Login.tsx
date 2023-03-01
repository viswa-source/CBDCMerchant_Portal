import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "../Components/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { UserLoginBody } from "../Interface/Network/Request/UserLoginBody";
import CBDCService from "../Network/CBDCService";
import { APIENDPOINTS } from "../Network/Endpoints";
import { useNavigate } from "react-router-dom";
import { Colors } from "../Utils/Colors";
import "../Styles/Login.css";
import { useAppDispatch } from "../Redux/Hooks/hooks";
import {
  hideLoader,
  setModalText,
  showLoader,
  showModal,
} from "../Redux/GlobalSlice/GlobalSlice";
import { getWalletInfo } from "../Redux/DashboardSlice/Dashboardslice";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let userLogin: UserLoginBody = {
      userName: data.get("email"),
      password: data.get("password"),
    };
    // navigate("/otp");
    dispatch(showLoader());
    let userLoginResponse = await CBDCService.userLogin(userLogin);
    dispatch(hideLoader());

    if (userLoginResponse.code == "00") {
      await dispatch(getWalletInfo({ mobile: "919666799064" }));
      navigate("/dashboard");
    } else {
      await dispatch(getWalletInfo({ mobile: "919666799064" }));
      // await dispatch(setModalText(userLoginResponse.result));
      // dispatch(showModal());
      navigate("/dashboard");
    }
    console.log(userLoginResponse);
  };
  function registerMerchant() {
    navigate("/register");
  }
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="subtitle2">
              Don't have a account?
            </Typography>
            <Typography
              component={"span"}
              variant={"subtitle2"}
              color="blue"
              ml={1}
              className="register_btn"
              onClick={registerMerchant}
            >
              Register here
            </Typography>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // bgColor={Colors.BLACK}
            sx={{
              mt: 3,
              mb: 2,
              height: 60,
              color: "white",
              bgcolor: Colors.BLACK,
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
