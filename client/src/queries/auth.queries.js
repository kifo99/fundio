import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';

const login = async function (data) {
  try {
    if (!data) throw new Error('No data has been passed!');

    const response = await axios({
      method: 'post',
      url: 'http://localhost:8080/auth/login',
      headers: {},
      data: data,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

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
