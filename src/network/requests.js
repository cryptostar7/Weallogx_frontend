/* eslint-disable operator-linebreak */
/* eslint-disable no-undef */
import axios from 'axios';

// Increase timeout for all requests - especially helpful for login flow
const timeout = import.meta.env.MODE === 'development' ? 300000 : 600000;
const api = axios.create({
  Accept: '*/*',
  timeout: timeout,
  headers: {
    'Accept': 'application/json',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
  },
  // responseType: 'json',
  baseURL: "__VITE_API_BASE_URL__" === "__VITE_API_BASE_URL__" ? (import.meta.env.VITE_API_BASE_URL || '/api') : "__VITE_API_BASE_URL__",
});

// Add response interceptor to handle common error cases
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle authentication errors (401 Unauthorized)
    if (error.response && error.response.status === 401) {
      // Clear all authentication data
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("plan_active");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("remember");
      localStorage.removeItem("login_from_admin");
      
      // Redirect to login page
      if (typeof window !== 'undefined' && window.location.pathname !== '/sign-in') {
        window.location.href = '/sign-in';
      }
    }
    
    // Handle network errors or timeout errors
    if (error.code === 'ECONNABORTED' || error.code === 'ERR_NETWORK') {
      console.error('Network error occurred:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export const get = async (url, getHeader = false) => {
  const response = await api.get(url, getHeader);
  return response;
};

export const post = async (url, data, getHeader = false) => {
  const response = await api.post(url, data, getHeader);
  return response;
};

export const put = async (url, data, getHeader = false) => {
  const response = await api.put(url, data, getHeader);
  return response;
};

export const patch = async (url, data, getHeader = false) => {
  const response = await api.patch(url, data, getHeader);
  return response;
};

// Note: delete is a reserved word
export const remove = async (url, headers) => {
  const response = await api.delete(url, headers);
  return response;
};
