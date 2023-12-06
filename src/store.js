import { configureStore } from "@reduxjs/toolkit";
import { userReducer, usersReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
  },
});

export default store;
