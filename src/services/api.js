import axios from "axios";

import config from "config";
import * as apiURLs from "./apiURL";

// Basic configuration for HTTP calls
const instance = axios.create({
  baseURL: config.API_URL,
  responseType: "json",
});

// --- HTTP Auth Header Config --- //
export const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Token ${token}`;
};

// --- Authentication --- //
export async function login(credentials) {
  const { email, password } = credentials;
  return instance.post(apiURLs.LOGIN, { email, password });
}

// --- Export default instance of axios API --- //
export default instance;
