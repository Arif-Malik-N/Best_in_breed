import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../common/commonSlice";
import { saveNotifications } from "./notificationReducer";
import { userRequest } from "../../apiRoutes/apiRoutes";
import type { ReportGetRedux } from "../../utils/interfaces";

export const getNotifications = createAsyncThunk(
  "notification/getNotifications",
  async (data: ReportGetRedux, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      // Dynamically construct the query parameters based on search name
      const url =
        data?.page && data?.perPage
          ? `dogs/with-reports?page=${data?.page}&perPage=${data?.perPage}`
          : "dogs/with-reports";

      const res = await userRequest.get(url);

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
