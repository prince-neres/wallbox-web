import axios from "axios";
import { logout } from "../redux/reducers/userSlice";
import store from "../redux/store";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
});

api.interceptors.request.use(
  (config) => {
    console.log(config);
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
