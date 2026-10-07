import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import store from '../store/store.js';
import { logout } from '../store/authSlice.js';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8080',
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.userToken;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const isAuthRoute = err.config?.url?.startsWith('/auth/');
    if (err.response?.status === 401 && !isAuthRoute) store.dispatch(logout());
    return Promise.reject(err);
  },
);

const login = async (data) => (await api.post('/auth/login', data)).data;
const signup = async (data) => (await api.post('/auth/signup', data)).data;

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log('User logged in!', data);

      return data;
    },
    onError: (error) => {
      console.log(`The error is: ${error}`);
    },
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log('User signed up!', data);
      return data;
    },
    onError: (error) => {
      console.log(`The error is: ${error}`);
    },
  });
};
