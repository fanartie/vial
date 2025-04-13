import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://vial.aobox.com:8080', // Base URL for your API
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiClient;
