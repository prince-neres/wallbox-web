import axios from "axios";
import { logout } from "../store/user/userSlice";
import store from "../store/store";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "https://flask-production-1803.up.railway.app/api/",
});

api.interceptors.request.use(
  (config) => {
    const userInfoString = localStorage.getItem("userInfo");
    if (userInfoString) {
      const { userInfo } = JSON.parse(userInfoString);
      if (userInfo?.token) {
        config.headers.Authorization = `Bearer ${userInfo.token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error.response?.data?.message);
    if (
      error.response?.status === 401 &&
      error.response?.data?.msg === "Token has expired"
    ) {
      store.dispatch(logout());
      toast.error("Token espirado, autenticação necessária!");
    }
    return Promise.reject(error);
  }
);

export default api;
