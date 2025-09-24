import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../common/commonSlice";
import { saveClients } from "./clientReducer";
import { userRequest } from "../../apiRoutes/apiRoutes";
import type { ClientIntakeForm, UploadImgRedux } from "../../utils/interfaces";

// ===> for get
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

// for post
export const uploadClientAndDogImg = createAsyncThunk(
  "client/uploadClientAndDogImg",
  async (formData: UploadImgRedux, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const url = `client-intake-form-merged/${formData.name}-photo`;
      const res = await userRequest.post(url, formData.formData);
      // const res = await userRequest.post("users/profile/picture", formData);
      return res?.data;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const createClientIntake = createAsyncThunk(
  "client/createClientIntake",
  async (data: ClientIntakeForm, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const res = await userRequest.post("client-intake-form-merged", data);
      return res?.data;
    } finally {
      dispatch(setLoading(false));
    }
  }
);
