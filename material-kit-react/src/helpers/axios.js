import axios from 'axios';

import { environment } from '../environment';
import { getTokenLocalStorage } from './localStorage';

const onRequest = (request) => {
  const token = getTokenLocalStorage();

  if (request.headers) {
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    request.headers['X-Authorization'] = environment.apiKey;
  }

  return request;
};

const onResponse = (response) => {
  if (response.status === 401) {
    getTokenLocalStorage();
    window.location.reload();
  }
  return response;
};

axios.defaults.baseURL = environment.apiUrl;

axios.interceptors.request.use(onRequest);
axios.interceptors.response.use(onResponse);
