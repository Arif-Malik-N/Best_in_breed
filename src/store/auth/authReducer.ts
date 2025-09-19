import { createSlice } from "@reduxjs/toolkit";
// import type { authSliceState } from "../../utils/interfaces";

const initialState = {
  token: null,
  userData: {},
  otp: null,
};

const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    saveUserData: (state, { payload }) => {
      state.userData = payload;
    },
    resetUserState: () => initialState,
  },
});

export const { setToken, resetUserState, saveUserData } = authSlices.actions;

export default authSlices.reducer;
