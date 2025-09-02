import axios from "axios";

// Just store your backend base URL as a string
const API_URL = "https://your-backend.onrender.com/api";

// Register user
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Login user
export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};
