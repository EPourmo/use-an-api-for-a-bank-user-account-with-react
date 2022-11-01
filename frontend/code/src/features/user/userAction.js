import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// url base to API
const BASE_URL = "http://localhost:3001/api/v1";

/**
 * login API call
 * @async
 * @param {string} email
 * @param {string} password
 * @returns {Promise} response of the API
 */
export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // axios fetching data
      const { data } = await axios.post(
        BASE_URL + "/user/login",
        {
          email,
          password,
        },
        config
      );

      // store user's token in local storage
      localStorage.setItem("userToken", data.body.token);

      return data;
    } catch (error) {
      // return custom error message from API if any
      return rejectWithValue(error.response.data.message);
    }
  }
);

/**
 * user profile data API call
 * @async
 * @returns {Promise} response of the API
 */
export const getUserDetails = createAsyncThunk(
  "user/profile",
  async (arg, { getState }) => {
    try {
      // get user data from store
      const { user } = getState();
      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      };
      const { data } = await axios.post(BASE_URL + "/user/profile", {}, config);
      return data;
    } catch (error) {
      // return custom error message from API if any
      console.log(error.response.data.message);
    }
  }
);

/**
 * change user name though API
 * @async
 * @param {string} firstName
 * @param {string} lastName
 * @returns {Promise} response of the API
 */
export const postUserName = createAsyncThunk(
  "user/newName",
  async ({ firstName, lastName }, { getState }) => {
    try {
      // First letter should be Uppercase
      const firstNameUppercase =
        firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
      const lastNameUppercase =
        lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

      // get user data from store
      const { user } = getState();
      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      };
      const { data } = await axios.put(
        BASE_URL + "/user/profile",
        { firstName: firstNameUppercase, lastName: lastNameUppercase },
        config
      );
      return data;
    } catch (error) {
      // return custom error message from API if any
      console.log(error.response.data.message);
    }
  }
);
