import axios from "axios";
import { parseCookies } from "nookies";

import { PropsAxiosInstance } from "../interfaces";

export function getAPIClient(ctx?: any) {
  const { token } = parseCookies(ctx);

  const api: PropsAxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
  });

  // api.interceptors.request.use((config) => {
  //   console.log(config);

  //   return config
  // });

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`; 
  }

  return api;
}