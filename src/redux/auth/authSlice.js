import { createSlice } from "@reduxjs/toolkit";
import { register, login, getCurrentUser, logout } from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isFetchingCurrentUser: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [login.pending]: (state, { payload }) => {
      state.error = null;
      state.isLoading = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.error = null;
      state.isLoading = false;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [getCurrentUser.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
      state.isFetchingCurrentUser = true;
    },
    [getCurrentUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isFetchingCurrentUser = false;
      state.isLoading = false;
    },
    [logout.fulfilled]: (state) => {
      state.token = null;
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.pending]: (state, { payload }) => {
      state.isLoading = true;

      state.error = null;
    },
    [logout.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
