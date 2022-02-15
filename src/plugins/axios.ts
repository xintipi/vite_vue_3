import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import Cookie from 'js-cookie';
import { COOKIES_KEY } from '@/enums/cookie.enum';

const instance = axios.create();
instance.defaults.baseURL = import.meta.env.VITE_APP_AXIOS_BASE_URL;
instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Interceptors
instance.interceptors.request.use((config: AxiosRequestConfig | any): AxiosRequestConfig => {
  if (Cookie.get(COOKIES_KEY.token)) {
    config.headers['Authorization'] = `Bearer ${Cookie.get(COOKIES_KEY.token)}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<AxiosError> => {
    // Do something with response error
    // let { status } = error.response
    // let { data } = error.response

    return Promise.reject(error);
  },
);

export default instance;
