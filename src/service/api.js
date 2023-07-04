import axios from "axios";

const api = axios.create({
  baseURL: "https://ct9ew9nqf3.execute-api.us-west-1.amazonaws.com",
});

export default api;