/* eslint-disable operator-linebreak */
/* eslint-disable no-undef */
import axios from 'axios';
import { getAccessToken } from '../services/helper';

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
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Add request interceptor to attach auth token to all requests
api.interceptors.request.use(
  (config) => {
    // Get access token using helper (handles JSON format and expiry)
    const accessToken = getAccessToken();

    if (accessToken) {
      // Attach token to Authorization header
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle common error cases
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle authentication errors (401 Unauthorized)
    if (error.response && error.response.status === 401) {
      // Check if this is an impersonation session before clearing
      const isImpersonation = sessionStorage.getItem("login_from_admin") === "1" ||
                              localStorage.getItem("login_from_admin") === "1";

      // Clear all authentication data from BOTH storages
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("plan_active");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("remember");
      localStorage.removeItem("login_from_admin");

      sessionStorage.removeItem("access_token");
      sessionStorage.removeItem("currentUser");
      sessionStorage.removeItem("login_from_admin");

      // Redirect based on session type
      if (typeof window !== 'undefined') {
        if (isImpersonation) {
          // Impersonation session expired - redirect back to admin panel
          const adminUrl = import.meta.env.VITE_ADMIN_PANEL_URL || 'http://localhost:8000/admin';
          window.location.href = adminUrl;
        } else if (window.location.pathname !== '/sign-in') {
          // Regular session expired - redirect to login
          window.location.href = '/sign-in';
        }
      }
    }
    
    // Handle network errors or timeout errors
    if (error.code === 'ECONNABORTED' || error.code === 'ERR_NETWORK') {
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
