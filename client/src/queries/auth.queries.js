import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import store from '../store/store.js';
import { logout } from '../store/authSlice.js';
import { notify } from '../utils/notify.jsx';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8080',
  withCredentials: true,
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
const getMe = async (data) => (await api.get('/auth/me', data)).data;
const logoutRequest = async () => await api.post('/auth/logout');

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      notify.success('User logged in!');

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
      notify.success('User logged in!');
      return data;
    },
    onError: (error) => {
      console.log(`The error is: ${error}`);
    },
  });
};

export const useMe = () =>
  useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

export const useLogout = () => {
  return useMutation({
    mutationFn: logoutRequest,
    onSuccess: () => {
      store.dispatch(logout());
      notify.success('User logged out!');
    },
    onError: (error) => {
      console.log(`The error is: ${error}`);
    },
  });
};
