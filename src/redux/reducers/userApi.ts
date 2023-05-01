import { AppDispatch } from "../store";
import {
  loginRequest,
  loginFail,
  loginSuccess,
  registerFail,
  registerRequest,
  registerSuccess,
} from "./userSlice";
import api from "../../api";

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loginRequest());
      const { data } = await api.post("/login", { email, password });
      dispatch(loginSuccess(data));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(loginFail(error.response.data.message));
    }
  };

export const register =
  (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(registerRequest());
      const { data } = await api.post("/register", {
        username,
        email,
        password,
        confirm_password: confirmPassword,
      });
      dispatch(registerSuccess(data));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(registerFail(error.response.data.message));
    }
  };
