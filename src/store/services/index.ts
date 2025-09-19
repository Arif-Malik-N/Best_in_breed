import axios from 'axios';
import { store } from '../store';
export const BASE_URL = 'https://ready-to-dine-backend.onrender.com/v1/';
export const SOCIAL_BASE_URL = 'https://ready-to-dine-backend.onrender.com/v1/link/';


interface props {
  path: string;
  isForm?: boolean;
  method?: string;
  url?: any;
  body?: any;
  token?: any;
  params?: any;
}

const apiCall = async ({
  path,
  method = 'GET',
  isForm,
  url = null,
  body = null,
  token = null,
  params = null,
}: props) => {
  let urlString = BASE_URL + path;
  let headers: any = {
    ...(isForm
      ? {
        'Content-Type': 'multipart/form-data',
      }
      : {
        'Content-Type': 'application/json',
        Accept: 'application/x-www-form-urlencoded, application/json',
      }),
  };
  let options: any = {
    method,
  };
  if (token) headers['authorization'] = 'Bearer ' + token;
  options.headers = headers;
  if (body) options.data = body;
  if (params) options.params = params;
  if (url) urlString = url;
  options.url = urlString;

  try {
    const response = await axios(options);
    return response?.data;
  } catch (error: any) {
    if (error?.response) {
    } else if (error?.response.data) {
    }

    if (error?.response?.data?.status_code == 401) {
      store.dispatch({ type: "LOGOUT" });
    }

    if (!navigator.onLine) {
      alert("No Internet Connection");
    }
    throw error;

  }
};

export default apiCall;
