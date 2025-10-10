import { createSlice } from "@reduxjs/toolkit";
// import type { authSliceState } from "../../utils/interfaces";

const initialState = {
  sessions: [],
  metrics: {
    activeClients: 0,
    appointments: 0,
    pendingContracts: 0,
  },
  isLoading: false,
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
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const { saveSession, saveMetrics, setLoading } = sessionSlices.actions;

export default sessionSlices.reducer;
