import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../common/commonSlice";
import { saveReports } from "./reportReducer";
import { userRequest } from "../../apiRoutes/apiRoutes";
import type { AddReportRedux, ReportGetRedux } from "../../utils/interfaces";

export const getReports = createAsyncThunk(
  "reports/getReports",
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
        dispatch(saveReports(res?.data?.data));
        return res?.data;
      } else {
        return res?.data;
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

// add report against dog
export const addReport = createAsyncThunk(
  "client/addReport",
  async (data: AddReportRedux, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const { dogId, ...reportData } = data; // extract dogId, keep report data
      const res = await userRequest.post(`reports/dog/${dogId}`, reportData);
      return res?.data;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

// delete report against dog
export const deleteReport = createAsyncThunk(
  "client/deleteReport",
  async (dogId: string, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const res = await userRequest.delete(`reports/${dogId}`);
      return res?.data;
    } finally {
      dispatch(setLoading(false));
    }
  }
);
