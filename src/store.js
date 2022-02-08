import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";

const reducer = {
  users: usersSlice,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
});

export default store;
