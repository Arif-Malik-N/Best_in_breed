import { createSlice } from "@reduxjs/toolkit";
// import type { authSliceState } from "../../utils/interfaces";

const initialState = {
  token: null,
  userData: {},
  metrices: {},
  profileImg: {},
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
    saveMetrices: (state, { payload }) => {
      state.metrices = payload;
    },
    setProfileImg: (state, { payload }) => {
      state.profileImg = payload;
    },
    resetUserState: () => initialState,
  },
});

export const {
  setToken,
  resetUserState,
  saveUserData,
  saveMetrices,
  setProfileImg,
} = authSlices.actions;

export default authSlices.reducer;
