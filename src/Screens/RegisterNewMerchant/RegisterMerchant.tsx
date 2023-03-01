import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../../Components/TextField";
import {
  BOX_SX_ITEMS,
  BOX_SX_MAIN,
  TEXTFEILD_INPUT,
  TEXTFIELD_SX,
} from "../../Styles/RegisterMerchant_STYLES";
import { Colors } from "../../Utils/Colors";
export const RegisterMerchant = () => {
  const navigate = useNavigate();

  const [TextFieldCol1, setTextFieldCol1] = useState([
    {
      label: "Merchant Name",
      name: "merchantName",
      merchantName: "",
      isvalid: false,
      helperText: "",
    },
    {
      label: "Business Name",
      name: "businessName",
      businessName: "",
      isvalid: false,
      helperText: "",
    },
    {
      label: "Address",
      name: "address",
      address: "",
      isvalid: false,
      helperText: "",
    },
    { label: "City", name: "city", city: "", isvalid: false, helperText: "" },
    {
      label: "State",
      name: "state",
      state: "",
      isvalid: false,
      helperText: "",
    },
    {
      label: "Pincode",
      name: "pincode",
      pincode: "",
      isvalid: false,
      helperText: "",
    },
    {
      label: "Mobile No",
      name: "mobileNo",
      mobileNo: "",
      isvalid: false,
      helperText: "",
    },
    { label: "PAN", name: "pan", pan: "", isvalid: false, helperText: "" },
    {
      label: "Email",
      name: "email",
      email: "",
      isvalid: false,
      helperText: "",
    },
  ]);
  const [TextFieldCol2, setTextFieldCol2] = useState([
    {
      label: "Merchant Type",
      name: "merchantType",
      merchantType: "",
      isvalid: false,
      helperText: "",
    },
    { label: "Mcc", name: "mcc", mcc: "", isvalid: false, helperText: "" },
    {
      label: "Account No",
      name: "accountNo",
      accountNo: "",
      isvalid: false,
      helperText: "",
    },
    {
      label: "IFSC Code",
      name: "ifscCode",
      ifscCode: "",
      isvalid: false,
      helperText: "",
    },
    {
      label: "Date of consent",
      name: "dateOfConsent",
      dateOfConsent: "",
      isvalid: false,
      helperText: "",
    },
    {
      label: "Ownership Type",
      name: "ownershipType",
      ownershipType: "",
      isvalid: false,
      helperText: "",
    },
    { label: "MID", name: "mid", mid: "", isvalid: false, helperText: "" },
    { label: "TID", name: "tid", tid: "", isvalid: false, helperText: "" },
    {
      label: "GST Number",
      name: "gstNumber",
      gstNumber: "",
      isvalid: false,
      helperText: "",
    },
  ]);
  const commonProps = {
    InputLabelProps: {
      style: TEXTFEILD_INPUT,
    },
    sx: TEXTFIELD_SX,
  };
  function validationCheck(
    name: string,
    value: string,
    row: string | undefined
  ) {
    let isvalid = false;
    let helperText = "";

    if (name === "merchantName") {
      isvalid = value !== "";
      helperText = isvalid ? "" : "Merchant name is required";
    } else if (name === "businessName") {
      isvalid = value !== "";
      helperText = isvalid ? "" : "Business name is required";
    } else if (name === "address") {
      isvalid = value !== "";
      helperText = isvalid ? "" : "Address is required";
    } else if (name === "city") {
      isvalid = value !== "";
      helperText = isvalid ? "" : "City is required";
    } else if (name === "state") {
      isvalid = value !== "";
      helperText = isvalid ? "" : "State is required";
    } else if (name === "pincode") {
      isvalid = /^[1-9][0-9]{5}$/.test(value);
      helperText = isvalid ? "" : "Please enter a valid pincode";
    } else if (name === "mobileNo") {
      isvalid = /^[6-9][0-9]{9}$/.test(value);
      helperText = isvalid ? "" : "Please enter a valid mobile number";
    } else if (name === "pan") {
      isvalid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value);
      helperText = isvalid ? "" : "Please enter a valid PAN number";
    } else if (name === "email") {
      isvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
      helperText = isvalid ? "" : "Please enter a valid email address";
    } else if (name === "merchantType" && !value) {
      isvalid = false;
      helperText = "Merchant Type is required";
    } else if (name === "mcc" && !value) {
      isvalid = false;
      helperText = "Mcc is required";
    } else if (name === "accountNo" && !value) {
      isvalid = false;
      helperText = "Account No is required";
    } else if (name === "ifscCode" && !value) {
      isvalid = false;
      helperText = "IFSC Code is required";
    } else if (name === "dateOfConsent" && !value) {
      isvalid = false;
      helperText = "Date of consent is required";
    } else if (name === "ownershipType" && !value) {
      isvalid = false;
      helperText = "Ownership Type is required";
    } else if (name === "mid" && !value) {
      isvalid = false;
      helperText = "MID is required";
    } else if (name === "tid" && !value) {
      isvalid = false;
      helperText = "TID is required";
    } else if (name === "gstNumber" && !value) {
      isvalid = false;
      helperText = "GST Number is required";
    }

    if (row) {
      setTextFieldCol2((prevValues) =>
        prevValues.map((field) =>
          field.name === name
            ? { ...field, [name]: value, isvalid, helperText }
            : field
        )
      );
    } else {
      setTextFieldCol1((prevValues) =>
        prevValues.map((field) =>
          field.name === name
            ? { ...field, [name]: value, isvalid, helperText }
            : field
        )
      );
    }
  }
  const handleInputChange = (event: any, row: string | undefined) => {
    const { name, value } = event.target;
    validationCheck(name, value, row);
  };

  function navigateToLogin() {
    navigate("/");
  }

  function register(){
    TextFieldCol1.map((data:any)=>validationCheck(data.name,data[data.name],undefined))
    TextFieldCol2.map((data:any)=>validationCheck(data.name,data[data.name],"2"))
  }
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        // alignContent="center"
        height="100vh"
      >
        <Box
          bgcolor={Colors.BLACK}
          display="flex"
          flexDirection={"column"}
          justifyContent={"center"}
          height="100vh"
          width="60vh"
          mb="3%"
        >
          <Typography
            variant="h4"
            component={"h1"}
            sx={{
              fontSize: { xs: "1rem", md: "2.6rem" },
              textAlign: "center",
              m: "3%",
              color: Colors.WHITE,
              mb: "6%",
            }}
          >
            Register Merchant
          </Typography>
          <Box
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap="wrap"
            mt="4%"
          >
            <Typography
              variant="subtitle2"
              component={"h1"}
              sx={{
                fontSize: { xs: "1rem" },
                textAlign: "center",
                m: "3%",
                color: Colors.WHITE,
                // mb: "6%",
              }}
            >
              Already have an account ?
            </Typography>
            <Button
              size="small"
              onClick={navigateToLogin}
              variant="outlined"
              sx={{
                borderColor: Colors.WHITE,
                borderWidth: "2px",
                color: Colors.WHITE,
                height: "60%",
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Box sx={BOX_SX_MAIN}>
          {TextFieldCol1.map((data: any) => {
            return (
              <Box sx={BOX_SX_ITEMS} key={data.name}>
                <TextField
                  required
                  error={!data.isvalid}
                  helperText={data.helperText}
                  value={data[data.name]}
                  label={data.label}
                  onChange={(event) => handleInputChange(event, undefined)}
                  name={data.name}
                  {...commonProps}
                />
              </Box>
            );
          })}
          <Button
            type="submit"
            variant="outlined"
            sx={{
              mt: 3,
              mb: 2,
              width: "40%",
              height: "15%",
              color: Colors.BLACK,
              borderColor: Colors.BLACK,
              borderRadius: 20,
              alignSelf: "center",
            }}
          >
            Cancel
          </Button>
        </Box>
        <Box sx={BOX_SX_MAIN}>
          {TextFieldCol2.map((data: any) => {
            return (
              <Box sx={BOX_SX_ITEMS} key={data.name}>
                <TextField
                  required
                  error={!data.isvalid}
                  helperText={data.helperText}
                  value={data[data.name]}
                  label={data.label}
                  onChange={(event) => handleInputChange(event, "2")}
                  name={data.name}
                  {...commonProps}
                />
              </Box>
            );
          })}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // bgColor={Colors.BLACK}
            onClick={register}
            sx={{
              mt: 3,
              mb: 2,
              width: "40%",
              height: "15%",
              color: "white",
              bgcolor: Colors.BLACK,
              borderRadius: 20,
              alignSelf: "center",
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
};
