import axios from "axios";
import { base_url } from "../../utils/baseUrl";
// import { config } from "../../utils/axiosConfig";

const register = async (userData) => {
  const res = await axios.post(`${base_url}user/signup`, userData);
  if (res.data) {
    return res.data;
  }
};

const login = async (userData) => {
  const res = await axios.post(`${base_url}user/login`, userData);
  if (res.data) {
    return res.data;
  }
};

export const authService = {
  register,
  login,
};
