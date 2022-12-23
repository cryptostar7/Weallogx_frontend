/* eslint-disable operator-linebreak */
/* eslint-disable no-undef */
import axios from 'axios';

const timeout = import.meta.env.MODE === 'development' ? 300000 : 500000;
const api = axios.create({
  Accept: '*/*',
  timeout,
  headers: { 
    'Content-Type': 'application/json',
    'Accept' : 'application/json',
    },
    // withCredentials: true,  
    responseType: 'json',
  // proxy: {
  //   host: process.env.REACT_APP_API_BASE_URL,
  // },
  // baseURL: import.meta.env.VITE_API_BASE_URL,
  baseURL: 'http://wlxpy.bizbybot.com',
  
});

export const get = async (url, getHeader=false) => {
  const response = await api.get(url, getHeader);
  return response;
};

export const post = async (url, data, getHeader=false) => {
  const response = await api.post(url, data, getHeader);
  return response;
};

export const put = async (url, data,  getHeader=false) => {
  const response = await api.put(url, data, getHeader);
  return response;
};

export const patch = async (url, data,  getHeader=false) => {
  const response = await api.patch(url, data, getHeader);
  return response;
};

// Note: delete is a reserved word
export const remove = async (url, headers) => {
  const response = await api.delete(url, headers);
  return response;
};
