import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
}

export const register = createAsyncThunk(
  "users/register",
  async (credential, thunkApi) => {
    try {
      const res = await axios.post("api/users/register", credential);
      setAuthHeader(res.data.token);
      console.log("first", credential)
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLogIn = createAsyncThunk(
  "users/login",
  async (credential, thunkApi) => {
    try {
      const res = await axios.post("api/users/login", credential);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "users/logout",
  async (credential, thunkApi) => {
    try {
      await axios.post("api/users/logout", credential);
      clearAuthHeader();
    
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
