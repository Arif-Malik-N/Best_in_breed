import { createSlice } from "@reduxjs/toolkit";
// import type { authSliceState } from "../../utils/interfaces";

const initialState = {
  sessions: [],
  metrics: [],
};

const sessionSlices = createSlice({
  name: "session",
  initialState,
  reducers: {
    saveSession: (state, { payload }) => {
      state.sessions = payload;
    },
    saveMetrics: (state, { payload }) => {
      state.metrics = payload;
    },
  },
});

export const { saveSession, saveMetrics } = sessionSlices.actions;

export default sessionSlices.reducer;
