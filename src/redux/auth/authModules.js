import { createSlice } from "@reduxjs/toolkit";

import api, { login as apiLogin } from "services/api";

const initialState = {
  data: null,
  error: null,
  isLoading: true,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loading: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    setAuth: (state, action) => ({
      ...state,
      data: action.payload,
      isLoading: false,
      isAuthenticated: true,
    }),
    errorAuth: (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }),
    resetAuth: () => ({
      ...initialState,
      isLoading: false,
    }),
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = authSlice;

// Extract each action creator by name
const { loading, setAuth, resetAuth, errorAuth } = actions;

// FIXME: Remove any as type
const reloadAuth = (data) => (dispatch) => {
  const { token, user } = data;
  if (token && user) {
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("user", JSON.stringify(user));
    api.defaults.headers.common.Authorization = `JWT ${token}`;
    dispatch(setAuth(data));
  } else {
    dispatch(resetAuth());
  }
};

// FIXME: Remove any as type
const login = (params) => async (dispatch) => {
  try {
    dispatch(loading());
    const response = await apiLogin(params);
    const { data } = response;
    dispatch(reloadAuth(data));
  } catch (e) {
    dispatch(errorAuth(e.response.data));
  }
};

const logout = () => (dispatch) => {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("user");
  api.defaults.headers.common.Authorization = undefined;
  dispatch(resetAuth());
};

// Export needed thunks
export { login, reloadAuth, logout };

// Export the reducer as default
export default reducer;
