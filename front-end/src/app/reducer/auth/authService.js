import axios from "axios";
const env_var = import.meta.env;
const API_URL =
  env_var.VITE_APP_NODE_ENV === "development"
    ? `${env_var.VITE_APP_LOCAL_HOST}/api/users`
    : `${env_var.VITE_APP_PROD_HOST}/api/users`;

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = async () => localStorage.removeItem("user");

const authService = {
  register,
  login,
  logout,
};

export default authService;
