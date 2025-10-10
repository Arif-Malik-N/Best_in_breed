import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reports: {
    pagination: { page: 0, perPage: 0, totalPages: 0 },
    result: [],
  },
};

const reportSlices = createSlice({
  name: "report",
  initialState,
  reducers: {
    saveReports: (state, { payload }) => {
      state.reports = payload;
    },
  },
});

export const { saveReports } = reportSlices.actions;

export default reportSlices.reducer;
