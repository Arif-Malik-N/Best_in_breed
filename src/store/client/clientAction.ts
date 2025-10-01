import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../common/commonSlice";
import { saveClients, saveClientsWithContract } from "./clientReducer";
import { userRequest } from "../../apiRoutes/apiRoutes";
import type {
  AddReportRedux,
  ClientGetRedux,
  ClientIntakeFormProp,
  UploadImgRedux,
} from "../../utils/interfaces";

// ===> for get clients for client and contract table
export const getClientsWithContract = createAsyncThunk(
  "client/getClientsWithContract",
  async (data: ClientGetRedux, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      // Dynamically construct the query parameters based on search name

      const url = data?.searchName
        ? `clients/contracts?search=${data?.searchName}&page=${data?.page}&perPage=${data?.perPage}`
        : data?.page && data?.perPage
        ? `clients/contracts?page=${data?.page}&perPage=${data?.perPage}`
        : "clients/contracts";

      const res = await userRequest.get(url);

      if (res?.data?.success) {
        dispatch(saveClientsWithContract(res?.data?.data));
        return res?.data;
      } else {
        return res?.data;
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

// ===> for get clients for client page
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

// for get client info against id
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

// for create client instake form with client and dog images
export const uploadClientAndDogImg = createAsyncThunk(
  "client/uploadClientAndDogImg",
  async (formData: UploadImgRedux, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const url = `client-intake-form-merged/${formData.name}-photo`;
      const res = await userRequest.post(url, formData.formDataImg);
      return res?.data;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

// for create client instake form with sign images
export const uploadSignatureImg = createAsyncThunk(
  "client/uploadSignatureImg",
  async (formData: UploadImgRedux, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const url = `client-intake-form-merged/${formData.name}-signature`;
      const res = await userRequest.post(url, formData.formDataImg);
      return res?.data;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

// for create client instake creation
export const createClientIntake = createAsyncThunk(
  "client/createClientIntake",
  async (data: ClientIntakeFormProp, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const res = await userRequest.post("client-intake-form-merged", data);
      return res?.data;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

// add dog against already created client
export const addDogAgaintsClient = createAsyncThunk(
  "client/addDogAgaintsClient",
  async (data: ClientIntakeFormProp, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const { clientId, ...dogData } = data; // extract clientId, keep dog data
      const res = await userRequest.post(
        `dogs/client/${clientId}/add`,
        dogData
      );
      return res?.data;
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
