import axios from 'axios';

export const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use((config) => {
  if (typeof localStorage !== 'undefined') {
    const userToken = localStorage.getItem('token');
    const token = userToken ? `Bearer ${userToken}` : false;
    if (token && config.headers) {
      config.headers.Authorization = token;
    }
    return config;
  }
  return config;
});
