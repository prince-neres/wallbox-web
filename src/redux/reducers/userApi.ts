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
    } catch (error) {
      dispatch(loginFail("Deu ruim"));
    }
  };

export const register =
  (username: string, email: string, password: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(registerRequest());
      const { data } = await api.post("/register", {
        username,
        email,
        password,
      });
      dispatch(registerSuccess(data));
    } catch (error) {
      dispatch(registerFail("Deu ruim"));
    }
  };
