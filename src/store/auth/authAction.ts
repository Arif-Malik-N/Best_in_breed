import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading, showMessage } from "../common/commonSlice";
import apiCall from "../services";
import { resetUserState, saveUserData, setToken } from "./authReducer";
import type { RootState } from "../store";
import type { LoginDataTypes } from "../../utils/interfaces";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: LoginDataTypes, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const res = await apiCall({
        path: "user/login",
        method: "POST",
        body: data,
      });
      if (res?.success) {
        dispatch(setToken(res.token));
        dispatch(saveUserData(res.data.user));
        return res;
      } else {
        dispatch(showMessage(res.message));
        return res;
      }
    } catch (error: any) {
      dispatch(setLoading(false));
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch, getState }) => {
    dispatch(setLoading(true));
    const state = getState() as RootState;
    const token = state.authSlices.token;
    try {
      const res = await apiCall({
        path: "user/logout",
        method: "POST",
        token: token,
      });

      if (res.success) {
        dispatch(resetUserState());
        return res;
      } else {
        return res;
      }
    } catch (error: any) {
      dispatch(setLoading(false));
    }
  }
);
