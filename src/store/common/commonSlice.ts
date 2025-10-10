import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// import { toast } from 'react-toastify';

const commonSlice = createSlice({
  name: "common",
  initialState: {
    isLoading: false as boolean,
    showModal: false as boolean,
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
  },
});

export const { setLoading, setShowModal } = commonSlice.actions;

export default commonSlice.reducer;
