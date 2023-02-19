import React, { useState, useRef, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Styles/OTP.css";
import { useNavigate } from "react-router-dom";
import { Colors } from "../Utils/Colors";

const OTP = () => {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const digitRefs: any = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    digitRefs.current[0].focus();
  }, []);

  const handleDigitChange = (index: number, value: string) => {
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);

    if (value && digitRefs.current[index + 1]) {
      digitRefs.current[index + 1].focus();
    } else if (!value && digitRefs.current[index - 1]) {
      digitRefs.current[index - 1].focus();
    }
  };
  function verifyOtp() {
    navigate("/dashboard");
  }
  return (
    <Container
      component="main"
      maxWidth="lg"
      style={{ border: 10, borderColor: "red" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          textAlign={"center"}
          marginBottom={"3%"}
        >
          Please enter the received OTP to verify.
        </Typography>
        <form
          method="get"
          className="digit-group"
          data-group-name="digits"
          data-autosubmit="false"
          autoComplete="off"
        >
          {digits.map((digit, index) => (
            <input
              type="text"
              key={index}
              maxLength={1}
              value={digit}
              ref={(ref) => (digitRefs.current[index] = ref)}
              onChange={(e) => handleDigitChange(index, e.target.value)}
            />
          ))}
        </form>
        <Button
          type="submit"
          color="primary"
          variant="outlined"
          sx={{
            mt: 3,
            mb: 2,
            height: 40,
            border: 2,
            borderColor: Colors.PRIMARY,
            fontWeight: "bold",
          }}
          onClick={verifyOtp}
        >
          Verify OTP
        </Button>
      </Box>
    </Container>
  );
};

export default OTP;
