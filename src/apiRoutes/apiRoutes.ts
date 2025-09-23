import axios from "axios";
import { store } from "../store/store";
import { toast } from "react-toastify";

const baseURL = "https://best-in-breed-v1.onrender.com/api";

export const userRequest = axios.create({
  baseURL: baseURL,
});

userRequest.interceptors.request.use(
  (config) => {
    const token = store.getState().authSlices?.token; // ✅ safe outside components

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

userRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);

    toast.error(error?.response?.data?.error?.message);
    // toast.error("error?.response?.data?.error?.messagefdshfisdhfihdfndsif");
    // if (error?.response?.data?.statusCode === 401) {
    //   store.dispatch({ type: "LOGOUT" });
    // }
    return Promise.reject(error);
  }
);
