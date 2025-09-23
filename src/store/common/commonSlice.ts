import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// import { toast } from 'react-toastify';

const commonSlice = createSlice({
  name: "common",
  initialState: {
    isLoading: false as boolean,
    isMainLoading: false as boolean,
    isScreenLoading: false as boolean,
    showModal: false as boolean,
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setMainLoading: (state, { payload }) => {
      state.isMainLoading = payload;
    },
    setScreenLoading: (state, { payload }) => {
      state.isScreenLoading = payload;
    },
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
    showMessage: (_, { payload }) => {
      toast(payload);
    },
  },
});

export const {
  setLoading,
  setMainLoading,
  showMessage,
  setShowModal,
  setScreenLoading,
} = commonSlice.actions;

export default commonSlice.reducer;
