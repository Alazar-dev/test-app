import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasErrors: false,
  users: [],
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, { payload }) => {
      state.users = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUsersFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getUsers, getUsersSuccess, getUsersFailure } =
  usersSlice.actions;

export const usersSelector = (state) => state.users;

export default usersSlice.reducer;

export function fetchUsers() {
  return async (dispatch) => {
    dispatch(getUsers());

    try {
      const response = await axios.get(
        "https://61ee4c48d593d20017dbad43.mockapi.io/api/users/newUsers"
      );
      dispatch(getUsersSuccess(response.data));
    } catch (error) {
      dispatch(getUsersFailure());
    }
  };
}
