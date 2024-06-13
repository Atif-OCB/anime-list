import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL,
  timeout: 1000,
});

export const apiAuth = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    Authorization: `Bearer <YOUR_KEY>`,
  },
})