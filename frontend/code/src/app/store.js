import { configureStore } from "@reduxjs/toolkit";

import useReducer from "../features/user/userSlice";

// redux store
const store = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default store;
