import axios from "axios";
const env_var = import.meta.env;
const API_URL =
  env_var.VITE_APP_NODE_ENV === "development"
    ? `${env_var.VITE_APP_LOCAL_HOST}/api/todos`
    : `${env_var.VITE_APP_PROD_HOST}/api/todos`;

const getTodos = async (uid) => {
  const response = await axios.get(`${API_URL}/list/${uid}`);
  if (response.data) return response.data;
};

const setTodo = async (formData) => {
  const response = await axios.post(`${API_URL}/create`, formData);
  if (response.data) return response.data;
};

const updateTodo = async (formData) => {
  const response = await axios.put(`${API_URL}/edit/${formData._id}`, formData);
  if (response.data) return response.data;
};

const removeTodo = async (id) => {
  const response = await axios.delete(`${API_URL}/remove/${id}`);
  if (response.data) return response.data;
};

const completeTodo = async (formData) => {
  const response = await axios.put(
    `${API_URL}/isCompleted/${formData._id}`,
    formData
  );
  if (response.data) return response.data;
};

const todoService = {
  getTodos,
  setTodo,
  updateTodo,
  completeTodo,
  removeTodo,
};

export default todoService;
