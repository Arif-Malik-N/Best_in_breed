import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../common/commonSlice";
import {
  saveMetrices,
  saveUserData,
  setProfileImg,
  setToken,
} from "./authReducer";
import type {
  ChangePsdRedux,
  LoginRedux,
  UpdateProfileRedux,
} from "../../utils/interfaces";
import { userRequest } from "../../apiRoutes/apiRoutes";

export const login = createAsyncThunk(
  "auth/login",
  async (data: LoginRedux, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const res = await userRequest.post("auth/login", data);
      if (res?.data?.success) {
        dispatch(setToken(res?.data?.data?.token));
        dispatch(saveUserData(res?.data?.data?.user));
        dispatch(saveMetrices(res?.data?.data?.metrics));
        dispatch(setProfileImg(res?.data?.data?.user?.imageUrl));

        return res?.data;
      } else {
        return res?.data;
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (data: ChangePsdRedux, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const res = await userRequest.post("auth/change-password", data);
      if (res?.data?.success) {
        return res?.data;
      } else {
        return res?.data;
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (emailToSend: string, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const res = await userRequest.post("auth/forgot-password", {
        email: emailToSend,
      });
      if (res?.data?.success) {
        return res?.data;
      } else {
        return res?.data;
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (data: UpdateProfileRedux, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const res = await userRequest.patch("users/profile", data);

      if (res?.data?.success) {
        dispatch(saveUserData(res?.data.data));
        return res?.data;
      } else {
        return res?.data;
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const updateProfileImg = createAsyncThunk(
  "auth/updateProfileImg",
  async (formData, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const res = await userRequest.post("users/profile/picture", formData);

      if (res?.data?.success) {
        dispatch(setProfileImg(res?.data?.data?.pictureUrl));
        return res?.data;
      } else {
        return res?.data;
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);
