import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer/auth/authSlice";
import todoSlice from "./reducer/todo/todoSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    todo: todoSlice,
  },
});
