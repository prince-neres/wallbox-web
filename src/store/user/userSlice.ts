import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types";
import { RootState } from "../store";

const getInitialUserState = (): UserType => {
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
    loginSuccess: (state, action: PayloadAction<UserType["userInfo"]>) => {
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
    registerSuccess: (state, action: PayloadAction<UserType["userInfo"]>) => {
      state.error = "";
      state.loading = false;
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    registerFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateSuccess: (state, action: PayloadAction<UserType["userInfo"]>) => {
      state.error = "";
      state.loading = false;
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
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
  updateSuccess,
} = userSlice.actions;
export default userSlice.reducer;
