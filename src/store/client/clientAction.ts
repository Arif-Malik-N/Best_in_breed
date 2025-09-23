import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../common/commonSlice";
import { saveClients } from "./clientReducer";
import { userRequest } from "../../apiRoutes/apiRoutes";

export const getClients = createAsyncThunk(
  "client/getClients",
  async (searchName: string, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      // Dynamically construct the query parameters based on search name
      const url = searchName
        ? `clients/search?search=${searchName}`
        : "clients/search";
      const res = await userRequest.get(url);
      if (res?.data?.success) {
        dispatch(saveClients(res?.data?.data));
        return res?.data;
      } else {
        return res?.data;
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const getClientWithDog = createAsyncThunk(
  "client/getClientWithDog",
  async (_id: string, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const url = `clients/${_id}/full`;
      const res = await userRequest.get(url);

      if (res?.data?.success) {
        // dispatch(saveClients(res?.data?.data));
        return res?.data;
      } else {
        return res?.data;
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);
