import { BoxProps } from "@mui/material/Box";
import { TextFieldProps } from "@mui/material/TextField";
import { Colors } from "../Utils/Colors";

export const BOX_SX_MAIN: BoxProps = {
  display: "flex",
  flexDirection: "column",
  mt:"3%",
  width: { xs: "100%", sm: "50%" },
};
export const BOX_SX_ITEMS:BoxProps={
  display: "flex",
  justifyContent : "center",
  alignItems :"center",
  height : "25%",
}
export const TEXTFIELD_SX:TextFieldProps = {
  //@ts-ignore
  input: { color: Colors.BLACK },
  width: "70%",
  mb: "4%",
};
export const TEXTFEILD_INPUT = { color: Colors.BLACK };