import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const AxiosInterceptor = () => {
  const updateHeaders = (request: AxiosRequestConfig) => {
    const token = 'test123';
    const newHeaders = {
      Authorization: token,
      'Content-Type': 'application/json',
    };

    request.headers = newHeaders;
    return request;
  };
  axios.interceptors.request.use((request) => {
    if (request.url?.includes('assets')) return request;
    return updateHeaders(request);
  });

  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log('response', response);
      return response;
    },
    (error: AxiosError) => {
      console.log('error', error);
      return Promise.reject(error);
    },
  );
};
