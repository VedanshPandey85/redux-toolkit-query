import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    tasks: taskReducer,
  },
});
