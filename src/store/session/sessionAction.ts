import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../common/commonSlice";
import { saveSession } from "./sessionReducer";
import { userRequest } from "../../apiRoutes/apiRoutes";
import type { SessionParamsRedux } from "../../utils/interfaces";

export const getSessions = createAsyncThunk(
  "session/getSession",
  async ({ startDate, endDate }: SessionParamsRedux, { dispatch }) => {
    dispatch(setLoading(true));

    try {
      // Dynamically construct the query parameters
      const url = `home/sessions?startDate=${startDate}&endDate=${endDate}`;
      const res = await userRequest.get(url);

      if (res?.data?.success) {
        // dispatch(saveSession(res?.data?.data?.token));

        return res?.data;
      } else {
        return res?.data;
      }
    } catch (error) {
      // Handle error if needed
      return { error: "Failed to fetch sessions" };
    } finally {
      dispatch(setLoading(false));
    }
  }
);
