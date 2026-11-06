import { api } from '../lib/api';
import { useQuery } from '@tanstack/react-query';
import store from '../store/store.js';
import { logout } from '../store/authSlice.js';

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const isAuthRoute = err.config?.url?.startsWith('/product');
    if (err.response?.status === 401 && !isAuthRoute) store.dispatch(logout());
    return Promise.reject(err);
  },
);

const categoryProducts = async (data) => (await api.get('/product', data)).data;

export const useCategoryProducts = () =>
  useQuery({
    queryKey: ['categoryProducts'],
    queryFn: categoryProducts,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

// TODO add product

// TODO delete product

// TODO edit product
