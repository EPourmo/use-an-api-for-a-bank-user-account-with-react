import { createSlice } from "@reduxjs/toolkit";
import { userLogin, getUserDetails, postUserName } from "./userAction";

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

// initial state of reduc
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

// redux user slice
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
      // if REMEMEBER ME is checked, keep user id connexion from local storage
      state.rememberMe
        ? (state.userConnectID = JSON.parse(
            localStorage.getItem("userConnect")
          ))
        : (state.userConnectID = null);
    },
    //  change REMEMBER ME if checked or unchecked
    rememberMeFunc: (state, { payload }) => {
      state.rememberMe = payload.remembMe;
    },
    // manage change user form or welcome component
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
