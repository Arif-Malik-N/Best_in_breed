import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../common/commonSlice";
import { saveNotifications } from "./notificationReducer";
import { userRequest } from "../../apiRoutes/apiRoutes";
// import type { ReportGetRedux } from "../../utils/interfaces";

export const getNotifications = createAsyncThunk(
  "notification/getNotifications",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      // Dynamically construct the query parameters based on search name
      // const url =
      //   data?.page && data?.perPage
      //     ? `notifications?page=${data?.page}&perPage=${data?.perPage}`
      //     : "notifications";

      const res = await userRequest.get("notifications");

      if (res?.data?.success) {
        dispatch(saveNotifications(res?.data?.data));
        return res?.data;
      } else {
        return res?.data;
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const markAllNotifyRead = createAsyncThunk(
  "notification/markAllNotifyRead",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const res = await userRequest.post("notifications/mark-all-read");
      return res?.data;
    } finally {
      dispatch(setLoading(false));
    }
  }
);
