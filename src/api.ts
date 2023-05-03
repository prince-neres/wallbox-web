import axios from "axios";
import { logout } from "./redux/reducers/userSlice";
import store from "./redux/store";

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Se o erro for um token expirado, deslogue o usuário
    if (
      error.response?.status === 401 &&
      error.response?.data?.msg === "Token has expired"
    ) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export default api;
