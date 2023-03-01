import { Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import { hideModal } from "./Redux/GlobalSlice/GlobalSlice";
import { useAppDispatch, useAppSelector } from "./Redux/Hooks/hooks";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Login from "./Screens/Login";
import OTP from "./Screens/OTP";
import { RegisterMerchant } from "./Screens/RegisterNewMerchant/RegisterMerchant";
export default function RouteComponent() {
  const dispatch = useAppDispatch();
  const loaderVisible: boolean = useAppSelector(
    (state) => state.globalState.loader
  );
  const modalVisible: boolean = useAppSelector(
    (state) => state.globalState.modal
  );
  const modalText: string = useAppSelector(
    (state) => state.globalState.modalText
  );
  function handleClose() {
    dispatch(hideModal());
  }

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterMerchant />} />
      </Routes>
      {loaderVisible ? <Loader /> : <></>}
      <Modal
        open={modalVisible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalText}
          </Typography>
        </Box>
      </Modal>
    </BrowserRouter>
  );
}
