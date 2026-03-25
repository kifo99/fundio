import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// TODO fetch all products
const fetchProducts = async function () {
  const { data } = await axios.get('http://localhost:8080/product/products');

  if (!data) throw new Error('No data fetched');

  return data.products;
};
// TODO fetch vendors products

// TODO add product

// TODO delete product

// TODO edit product

export const useGetProducts = () =>
  useQuery({
    queryKey: ['getProducts'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    retry: 1,
  });
