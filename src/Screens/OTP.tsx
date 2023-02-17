import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Styles/OTP.css";
const OTP = () => {
  const digitGroups = document.querySelectorAll(".digit-group");

  digitGroups.forEach((group) => {
    const inputs = group.querySelectorAll("input");
    inputs.forEach((input) => {
      input.maxLength = 1;
      input.addEventListener("keyup", (e) => {
        console.log(e);
        const parent: any = input.parentNode;

        if (e.keyCode === 8 || e.keyCode === 37) {
          const prev = parent.querySelector(`input#${input.dataset.previous}`);

          if (prev) {
            prev.select();
          }
        } else if (
          (e.keyCode >= 48 && e.keyCode <= 57) ||
          (e.keyCode >= 65 && e.keyCode <= 90) ||
          (e.keyCode >= 96 && e.keyCode <= 105) ||
          e.keyCode === 39
        ) {
          const next = parent.querySelector(`input#${input.dataset.next}`);
          if (next) {
            next.select();
          }
        }
      });
    });
  });
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
        <Typography component="h1" variant="h6" textAlign={"center"} marginBottom={"3%"}>
          Please enter the recevied OTP to verify.
        </Typography>
        <form
          method="get"
          className="digit-group"
          data-group-name="digits"
          data-autosubmit="false"
          autoComplete="off"
        >
          <input type="text" id="digit-1" name="digit-1" data-next="digit-2" />
          <input
            type="text"
            id="digit-2"
            name="digit-2"
            data-next="digit-3"
            data-previous="digit-1"
          />
          <input
            type="text"
            id="digit-3"
            name="digit-3"
            data-next="digit-4"
            data-previous="digit-2"
          />
          <input
            type="text"
            id="digit-4"
            name="digit-4"
            data-next="digit-5"
            data-previous="digit-3"
          />
          <input
            type="text"
            id="digit-5"
            name="digit-5"
            data-next="digit-6"
            data-previous="digit-4"
          />
          <input
            type="text"
            id="digit-6"
            name="digit-6"
            data-previous="digit-5"
          />
        </form>
        <Button
            type="submit"
            
            color="error"
            variant="outlined"
            sx={{ mt: 3, mb: 2, height: 40,border:1.5 }}
          >
            Verify OTP
          </Button>
      </Box>
    </Container>
  );
};

export default OTP;
