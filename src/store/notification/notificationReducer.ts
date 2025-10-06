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
    addNewNotification: (state, { payload }) => {
      state.notifications?.result?.unshift(payload);
    },
  },
});

export const { saveNotifications, addNewNotification } =
  notificationSlices.actions;

export default notificationSlices.reducer;
