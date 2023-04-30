import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./interfaces";

const initialState: User = {
  loading: false,
  userInfo: {
    username: "",
    email: "",
    token: "",
  },
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<User["userInfo"]>) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    loginFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action: PayloadAction<User["userInfo"]>) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    registerFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.userInfo = undefined;
      state.error = undefined;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFail,
  logout,
  registerFail,
  registerRequest,
  registerSuccess,
} = userSlice.actions;
export default userSlice.reducer;
