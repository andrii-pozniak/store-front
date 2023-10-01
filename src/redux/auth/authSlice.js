import { createSlice } from "@reduxjs/toolkit";
import { register, userLogIn, logOut } from "./operations";

const authState = {
  token: null,
  error: null,
  isLoggedIn: false,
  username: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, state => {
        state.isLoggedIn = false;
        state.error = null;

      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(userLogIn.pending, state => {
        state.isLoggedIn = false;
        state.error = null;

      })
      .addCase(userLogIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.username = action.payload.username;
        state.isLoggedIn = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(userLogIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.pending, state => {
        state.isLoggedIn = false;
        state.error = null;

      })
      .addCase(logOut.fulfilled, state => {
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
});

export const authReducer = authSlice.reducer;
