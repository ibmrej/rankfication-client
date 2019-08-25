import axios from "axios";

const api = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? process.env.API_HOST : "http://localhost:9000"
});

export default api;
