import { styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Colors } from "../../Utils/Colors";

const CssTextField = styled(TextField)({
  // "& label.Mui-focused": {
  //   color: "green",
  // },
  // "& .MuiInput-underline:after": {
  //   borderBottomColor: "green",
  // },
  "& label.Mui-focused": {
    color: Colors.BLACK,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: Colors.BLACK,
      borderWidth: "3px",
    },
    "&:hover fieldset": {
      borderColor: Colors.BLACK,
    },
    "&.Mui-focused fieldset": {
      borderColor: Colors.BLACK,
    },
  },
});

export default function CustomizedInputs(props: TextFieldProps) {
  return <CssTextField id="custom-css-outlined-input" {...props} />;
}
