import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const path = {
  SIGNUP: "/users/signup",
  LOGIN: "/users/login",
  LOGOUT: "/users/logout",
  CURRENT: "/users/current",
};

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(path.SIGNUP, credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(path.LOGIN, credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(path.LOGOUT);
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    token.set(token);
    try {
      const { data } = await axios.get(path.CURRENT);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
