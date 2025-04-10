// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // or your backend URL
  withCredentials: true, // only if you're using cookies/session
});

export default api;
