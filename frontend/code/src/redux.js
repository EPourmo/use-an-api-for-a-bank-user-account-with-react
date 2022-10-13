import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "password123",
    welcome: "Welcome back",
  },

  reducers: {
    changeUser: (state, action) => {
      //   const newUser = {
      //     firstName: "Ermane",
      //     lastName: "Pourmo",
      //     email: "test@stark.com",
      //     password: "test123",
      //   };
      state.firstName = action.payload;
    },
  },
});

// Actions creator
export const { changeUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
