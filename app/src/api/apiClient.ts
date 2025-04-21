import axios from "axios";

// Create an Axios instance with a base URL and default headers
const apiClient = axios.create({
  baseURL: "http://vial.aobox.com:8080", // Base URL for your API
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
