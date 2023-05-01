import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./interfaces";
import { RootState } from "../store";

const getInitialUserState = (): User => {
  const storedUserState = localStorage.getItem("userInfo");
  return storedUserState
    ? JSON.parse(storedUserState)
    : {
        loading: false,
        userInfo: {
          username: "",
          email: "",
          token: "",
        },
        error: "",
      };
};

const userSlice = createSlice({
  name: "user",
  initialState: getInitialUserState(),
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<User["userInfo"]>) => {
      state.error = "";
      state.loading = false;
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    loginFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action: PayloadAction<User["userInfo"]>) => {
      state.error = "";
      state.loading = false;
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    registerFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.userInfo = undefined;
      state.error = undefined;
      localStorage.removeItem("userInfo");
    },
  },
});

export const selectUser = (state: RootState) => state.user;

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
