import { createSlice } from "@reduxjs/toolkit";
// import type { authSliceState } from "../../utils/interfaces";

const initialState = {
  sessions: [],
};

const sessionSlices = createSlice({
  name: "session",
  initialState,
  reducers: {
    saveSession: (state, { payload }) => {
      state.sessions = payload;
    },
  },
});

export const { saveSession } = sessionSlices.actions;

export default sessionSlices.reducer;
