import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveMetrics, saveSession, setLoading } from "./sessionReducer";
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
        dispatch(saveSession(res?.data?.data?.result));
        return res?.data;
      } else {
        return res?.data;
      }
    } catch (error) {
      console.error(error);
      return { error: "Failed to fetch sessions" };
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const getMetrices = createAsyncThunk(
  "session/getMetrices",
  async (_, { dispatch }) => {
    try {
      const res = await userRequest.get("metrics/dashboard");
      if (res?.data?.success) {
        dispatch(saveMetrics(res?.data?.data));
        return res?.data;
      } else {
        return res?.data;
      }
    } catch (error) {
      console.error(error);
      return { error: "Failed to fetch sessions" };
    }
  }
);
