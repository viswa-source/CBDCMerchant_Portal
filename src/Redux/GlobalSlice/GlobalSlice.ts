import { createSlice } from "@reduxjs/toolkit";

interface GlobalState {
  loader: boolean;
  modal: boolean;
  modalText: string;
}

const initialState: GlobalState = {
  loader: false,
  modal: false,
  modalText: "",
};

export const globalSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    showLoader: (state) => {
      state.loader = true;
    },
    hideLoader: (state) => {
      state.loader = false;
    },
    showModal: (state) => {
      state.modal = true;
    },
    hideModal: (state) => {
      state.modal = false;
    },
    setModalText: (state, payload) => {
      state.modalText = payload.payload;
    },
  },
});

export const { showLoader, hideLoader, hideModal, showModal, setModalText } =
  globalSlice.actions;

export default globalSlice.reducer;
