import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

export default api;
