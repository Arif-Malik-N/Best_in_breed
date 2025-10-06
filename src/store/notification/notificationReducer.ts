import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: {
    pagination: { page: 0, perPage: 0, totalPages: 0 },
    result: [],
  },
};

const notificationSlices = createSlice({
  name: "notification",
  initialState,
  reducers: {
    saveNotifications: (state, { payload }) => {
      state.notifications = payload;
    },
  },
});

export const { saveNotifications } = notificationSlices.actions;

export default notificationSlices.reducer;
