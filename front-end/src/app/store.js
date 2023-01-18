import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
