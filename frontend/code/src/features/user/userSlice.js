import { createSlice } from "@reduxjs/toolkit";
import { userLogin, getUserDetails, postUserName } from "./userAction";

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  isConnected: false,
  userConnectID: null,
  rememberMe: false,
  changeUserName: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken"); // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.isConnected = false;
      state.rememberMe
        ? (state.userConnectID = JSON.parse(
            localStorage.getItem("userConnect")
          ))
        : (state.userConnectID = null);
    },
    rememberMeFunc: (state, { payload }) => {
      state.rememberMe = payload.remembMe;
    },
    changeUser: (state) => {
      state.changeUserName = !state.changeUserName;
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userToken = payload.body.token;
      state.isConnected = true;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      if (payload === "Error: Password is invalid") {
        state.error = "Le mot de passe est incorrect";
      } else if (payload === "Error: User not found!") {
        state.error = "L'email est invalide";
      }
    },
    // get user profile
    [getUserDetails.pending]: (state) => {
      state.loading = true;
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.body;
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // put user name
    [postUserName.pending]: (state) => {
      state.loading = true;
    },
    [postUserName.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.body;
      state.changeUserName = false;
    },
    [postUserName.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout, rememberMeFunc, changeUser } = userSlice.actions;
export default userSlice.reducer;
